comme dans beaucoup de librairies, il est possible de passer des condition directement dans le contenu. nous allons voir ici les deux principales; le each et le if.

nous allons d'abord nous débarrasser de tout ce qui est inutile

Le each : permet de boucler sur un contenu a partir d'un tableau

- Nous allons d'abord renommer kid.svelte par card.svelte
- a l'interieur de celui-ci nous allons, écrire ceci : 
  
```svelte
//card.svelte
<script>
	let score = 0:
</script>

<div class="card">
	Score: {score}
</div>

<style>
	.card {
		@apply bg-white shadow-md rounded-lg p-4 border border-gray-200;
	}
</style>
```

- dans le app.svelte nous allons cree un nouveau tableau et copier ceci dans le html :

```svelte
//app.svelte

<script>
	import Card from "./lib/card.svelte";
	import Header from "./lib/header.svelte";
	let gamers = [
		{name: "Jean",
		img: "https://picsum.photos/id/237/200/300"
		},
		{name: "Paul",
		img: "https://picsum.photos/id/23/200/300"
		},
		{name: "Jacques",
		img: "https://picsum.photos/id/100/200/300"
		},
		{name: "Bruno",
		img: "https://picsum.photos/id/142/200/300"
		}];
</script>

<div class="bg-slate-50 flex flex-col min-h-screen">
	<Header />
	<main class="container mx-auto m-8 border-2 border-dashed rounded p-8">
		<h1 class="text-center p-4 m-4 rounded text-xl font-semibold text-blue-800">Trivial Poursuite</h1>
		<div class="grid grid-cols-3 gap-4 w-full">
		
		{#each gamers as gamer}
			<div>
				<div class="flex justify-start">
					<img src={gamer.img} alt="avatar" class="rounded-full w-6 h-6 mr-4 mb-2"/>
					<h2 class="w-full">{gamer.name}</h2>
				</div>
				<Card/>
			</div>
		{/each}	
		</div>
	</main>
</div>
```

En lançant notre projet ,nous constatons que nous avons bien nos cards au nombre d'élément du tableau créé, ce qui va nous facilité pour créé des composants rapidement sans devoir les réécrire

La condition if...else

maintenant voyons comment intégrer une condition if dans notre contenu :

- toujours dans le app.svelte nous allons rajouter une booléen isHidden et nous allons la passer a false dans un premier temps
- et dans le contenu de celle-ci nous allons englober nos cards d'un if
```svelte
app.svelte
<script>
...
lert isNotHidden = false;
</script>

...
{#if isNotHidden}
<div class="grid grid-cols-3 gap-4 w-full">
	{#each gamers as gamer}
	...
	{/each}
</div>
{/if}
...
```

Nous constatons évidemment que nos cards sont maintenant cachée sans devoir passer par la casse CSS. passons donc notre variable a true pour voir réapparaître nos cards

- créons un nouveau composante du nom de start-form.svelte et plaçons dans notre contenu avec un else

```svelte
//start-form.svelte

<script>
</script>

<div class="w-1/2">
	<form class="flex flex-col items-center">
		<div class="flex flex-col items-cente">
			<label class="w-full" for="name">Nouveau joueur</label>
			<input class="w-full" type="text" id="name" name="name" required>
			<label class="w-full" for="image">Avatar</label>
			<input class="w-full" type="text" id="image" name="image" required>
		</div>
	</form>
</div>
```

Pour l'instant nous n'y ajouterons rien, nous le complèterons au fur et a mesure des leçons

- dans le app.svelte nous allons placer un else qui si notre booléen est en false ca sera cette composante que nous verrons
- nous allons finir par ajouter un bouton que nous utiliserons plus tard

```svelte
//app.svelte
...
{#if isNotHidden}
<div class="grid grid-cols-3 gap-4 w-full">
	{#each gamers as gamer}
	...
	{/each}
</div>
{:else}
	<StartForm/>
{/if}
<div class="w-full">
	<button class="bg-blue-400 text-blue-900 hover:bg-blue-900 hover:text-blue-400 rounded p-2 mt-8 w-1/5" type="button">
		Lancer le jeu / arreter le jeu
	</button>
</div>
...
```
 
