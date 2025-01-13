Comme dans toute librairie ou framework, il sera très souvent nécéssaire de faire passé des valeurs Entre les composantes. En général, la règle dit de faire descendre la valeur du parent a l'enfant, le data down. il arrive souvent que l'on remonte une action, l'action up.

Pour ce faire nous allons rencontré les runes $props()
### Que sont les runes?
https://svelte.dev/docs/svelte/what-are-runes

Les runes sont des symboles pour le contrôle du  compilateurs de svelte. se sont un style de mots clé du "language" svelte.

Ils diffèrent du JavaScript normales de manière importante, cependant :

- Nous n'avons pas besoin de les importer — elles font partie du langage
- Ce ne sont pas des valeurs — nous ne pouvons pas les assigner à une variable ou les passer comme arguments à une fonction
- Tout comme les mots-clés JavaScript, elles ne sont valides qu'à certaines positions 

Les runes offrent une approche plus explicite et flexible pour gérer la réactivité dans Svelte 5, permettant une meilleure organisation du code et une performance accrue.

1 - Data down

Reprenons notre projet : 
- Dans le app, nous allons garder la booléen en true afin de voir nos cards
-  Ensuite, nous allons couper les lignes en rapport avec les joueurs et nous allons les coller dans notre cards.svelte
- toujours dans card.svelte, nous allons cree une nouvelle variable gamer qui aura comme valeur la rune $props()
Le props joue avec le proxy et donc pour pouvoir afficher nos gamers correctement nous allons devoir déstructuré d'ou le fait de passer entre crochet

- on retourne dans  dans l'app.svelte et on passe gamer dans la balise <Card/>

```svelte
//card.svelte

<script>
	let score = 0;
	let { gamer } = $props()
</script>

<div class="card">
	<div class="flex justify-start">
		<img src={gamer.img} alt="avatar" class="rounded-full w-6 h-6 mr-4 mb-2"/>
		<h2 class="w-full">{gamer.name}</h2>
	</div>
	Score: {score}
</div>

```

```svelte
//app.svelte
<Card gamer={gamer} />
```

comme dit plus haut, si nous ne déstructurons pas, nous constatons que ce qui est passé automatiquement est un proxy

Le Proxy : 

Un proxy en JavaScript est un objet qui intercepte et personnalise les opérations effectuées sur un autre objet (appelé **cible**) via des **handlers**, comme l'accès aux propriétés, leur modification, ou leur suppression. Il permet de contrôler et de modifier le comportement par défaut des objets.

Toutes les variantes JS connues fonctionnent avec on peut cree des alias, donné une valeur par défaut, utilisé le rest opérateur...  

2 - Action up

nous allons cree une fonction dans le parent qui sera appelée et actionnée dans l'enfant.

- dans le fichier start-form.svelte nous allons créer une variable props()
- nous allons cree un bouton et nous allons la passer dans un onclick

```svelte
//start-form.svelte
<script>
let { addGamer } = $props();
</script>

...
		<button class="bg-emerald-500 text-emerald-900 hover:text-emerald-500 hover:bg-emerald-900 rounded p-2 mt-8 w-1/5"type="button" onclick={addGamer}>Ajouter</button>
	</form>
</div>

```
- Dans l'app.svelte, nous allons créer une fonction 
- nous allons la passer dans le composante StartForm

```svelte
//app.svelte
<script>
...
const addGamer = () => {
	console.log("addGamer", gamers)
	};
</script>

...
<StartForm addGamer={addGamer}/>
```

nous constatons bien que lorsqu'on actionne le bouton, un message apparait dans la console.
Nous reviendrons dans le chapitre 7 sur cette fonction, pour la finir.

