Nous allons terminer le tour de svelte avec un peu d'animation !

Dans notre fichier game.svelte : 
- nous allons importer fade et fly
- nous allons ajouter une booléen seeResponse et la passer en false dans la fonction shuffleQuizz()
- dans le contenu, nous allons ajouter un bouton et un onclick qui modifie la booléen qui nous permettra de dévoiler ou cacher la réponse
- nous allons rajouter une petite condition pour voir ou pas la réponse et nous lui donnerons comme transition le fly
- a chaque fois que nous allons appeler une nouvelle question nous allons faire une transition: fade pour cela on va les placer  dans la première div des question et du loading

```svelte
game.svelte
<script>
	import { onDestroy, onMount } from "svelte";
	import { fade, fly } from "svelte/transition";
...
let seeResponse = $state(false);

const shuffleQuizz = ()=>{
	quizzes = undefined
	seeResponse = false;
...

</script>

{#if quizzes}
	<div class="game" transition:fade={{duration: 100, delay: 300}} >
...
	<p>R: </p>
	{#if seeResponse}
		<p class="ml-2" transition:fly={{ x: 500, duration: 2000 }}>{quizzes.answer} </p>
	{/if}
</div>
<button onclick="{()=> seeResponse=!seeResponse}"
class="px-4 py-2 text-sm font-bold text-white bg-orange-600 duration-200 rounded-md hover:bg-orange-800">Reponse</button>
...
{:else}
<div class="game absolute w-full left-0 top-0 flex justify-center items-center" transition:fade={{duration: 100, delay: 300}}>

```

nous voici au terme de ce cours de svelte version 5. celui-ci n'est pas exhaustif mais vous donnera l'envie d'aller plus loin dans cette librairie.