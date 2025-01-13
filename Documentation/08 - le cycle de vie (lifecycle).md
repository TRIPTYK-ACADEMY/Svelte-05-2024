le cycle de vie dans la dom fonctionne comme dans la vie : 
- **Initialisation** : L'élément DOM est créé et inséré dans la page (`init()`).
- **Mise à jour** : Le contenu de l'élément est modifié (`update()`).
- **Destruction** : L'élément est supprimé du DOM et les ressources sont libérées (`destroy()`).

En Svelte, les runes comme `$effect()` gèrent automatiquement les aspects réactifs, mais vous pouvez intervenir dans des moments spécifiques :

| **Montage**     | `onMount()`   | Code exécuté lorsque le composant est monté dans le DOM.      |
| --------------- | ------------- | ------------------------------------------------------------- |
| **Mise à jour** | `$effect()`   | Réagit automatiquement aux changements des données réactives. |
| **Démontage**   | `onDestroy()` | Nettoyage du composant avant qu’il ne soit retiré du DOM.     |
nous allons continuer notre trivial pursuit en suivant ce cycle de vie : 

- nous allons cree un nouveau composant game.svelte
- nous allons cree deux nouvelles variables
- ensuite nous allons créer un onMount
- nous allons ensuite cree le contenu
  
```svelte
game.svelte

<script>
	import { onMount } from "svelte";
	
	let quizzes = $state()
	let questionNumber = $state(1);
	let answers = $state([]);

	const shuffleQuizz = ()=>{
		quizzes = undefined
		seeResponse = false;
		setTimeout(async () => {

			const res = await fetch("https://quizzapi.jomoreschi.fr/api/v1/quiz?limit=1&difficulty=facile");
			let response = await res.json();
			quizzes = response.quizzes[0];
			answers = [...quizzes.badAnswers, quizzes.answer]
			answers = answers.sort(() => Math.random() - 0.5)
		}, 1000);
	}
	
	onMount(() => {
		shuffleQuizz()
	});	
</script>

<div class="game">
	{#if quizzes}
		<p class="my-4 ml-2">Question {questionNumber}</p>
		<p class="my-4 ml-2 italic font-bold">Q: {quizzes.question}</p>
		<ul class="flex justify-around w-full">
			{#each answers as answer, index}
				<li class="my-1">{index+1} - {answer}</li>
			{/each}
		</ul>
		<p class="my-4 ml-2">A: {quizzes.answer}</p>
	{:else}
		<p class="text-4xl">Loading ...</p>
	{/if}
</div>

<style>
	.game {
	@apply bg-orange-200 shadow-md shadow-orange-300 rounded-lg p-4 border border-orange-300 mt-4 w-full;
	}
</style>
```

- pour finir nous allons appeler notre nouveau composant dans le app.svelte

```svelte
app.svelte
...
{/each}
	</div>
	<Game />
{:else}
```

Lorsqu'on click sur lancer le jeu, la DOM va monter le composant. le onMount va permettre de lancer des actions réactive en meme temps que celle-ci. pour l'exemple ici nous avons placer un setTimeOut qui nous montre la réactivité dans notre contenu.

poursuivons en utilisant une nouvelle rune du nom de $effect. cette rune écoute les modifications et réagis a chaque changement à l'interieur du composant.

- on construit une fonction $effect() qui va réagir avant que l'update se passe
- on va aussi construire une fonction $effect.pre() qui elle va réagir après l'update
- ensuite nous allons créer une petit fonction qui nous permettra de lancer une nouvelle question
- et dans notre contenu nous allons ajouter un bouton

```svelte
game.svelte

<script>
	import { onMount } from "svelte";
	
	...
//after update : exécuté après chaque mise à jour
	$effect(() => {
		console.log("After update", questionNumber);
	});

//before update : exécuté avant chaque mise à jour
	$effect.pre(() => {
		console.log("Before update", questionNumber);	
	});

	const newQuestion = () => {
		shuffleQuizz()
	};
</script>

<div class="game">
	{#if quizzes}
		...
		<p class="my-4 ml-2">A: {quizzes.reponse_correcte}</p>
		<button onclick="{newQuestion}" class="px-4 py-2 text-sm font-bold text-white bg-orange-600 duration-200 rounded-md hover:bg-orange-800">
			Nouvelle question
		</button>
	{:else}
...
```

Ici nos effects va agir a chaque fois qu'une modification va se faire.

pour finir, nous pouvons créé une fonction onDestroy qui lorsque notre composant est détruit, ici pour l'exemple lorsqu'on quite le jeu va automatiquement se lancer.

```svelte
game.svelte

<script>
	import { onDestroy, onMount } from "svelte";

	onDestroy(() => {
		console.log("Le composant est détruit !");
	});
	...
</script>

```