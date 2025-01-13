
Nous allons cree un nouveau projet a partir de celui que nous avons créé

A - le composant

* dans main nous allons écrire
```Svelte
//app.svelte
<script>
</script>


<div class="bg-slate-50 flex flex-col min-h-screen">
	<header class="mt-6 mx-8 shadow-md rounded-md flex justify-center bg-white overflow-hidden">
	<img src="/logo.png" alt="logo" class="w-16 animation-image" />
	</header>

	<main class="container mx-auto m-8 border-2 border-dashed rounded p-8">
	<p>this is parent file (app.svelte)</p>

</main>
</div>

<style>
	.animation-image { @apply cursor-pointer duration-200 }
	.animation-image:hover { @apply scale-75}
	p {
		font-size: 3rem;
		text-align: center;
	}
</style>
```

* allons dans le navigateur pour constater notre nouvelle phrase
* ensuite, dans lib nous allons créer un fichier du nom de kid.svelte
* dans celui-ci nous écrirons :
```svelte
//kid.svelte
<p>this is kid file (kid.svelte)</p>

<style>
</style>
```

* nous retournons dans le main et dans le script nous importons notre nouvelle composante

```Svelte
//app.svelte
<script>
import Kid from "./lib/kid.svelte";
</script>
//dans la balise main après le <p>
...
<Kid />
...
```

* nous constatons que la phrase est venu s'insérer dans le main
* si nous ajoutons dans le style de kid :
```svelte
// a l'interieur de la balise <style>
:global(p) {
color: red;
}
```

nous découvrirons que celui-ci s'exportera de kid et suivra l'import dans main

B - Faisons pareil avec le header comme exercice.

Correction
```svelte
//app.svelte
<script>
	import Kid from "./lib/kid.svelte";
	import Header from "./lib/header.svelte";
</script>

<div class="bg-slate-50 flex flex-col min-h-screen">
	<Header />
	<main class="container mx-auto m-8 border-2 border-dashed rounded p-8">
	<p>this is parent file (app.svelte)</p>
	<Kid />
</main>

</div>

<style>

	p {
		font-size: 3rem;
		text-align: center;
	}
</style>
```

```svelte
//header.svelte
<header
class="mt-6 mx-8 shadow-md rounded-md flex justify-center bg-white overflow-hidden"
>
	<img src="/logo.png" alt="logo" class="w-16 animation-image" />
</header>

<style>

	.animation-image {
		@apply cursor-pointer duration-200;
	}

	.animation-image:hover {
		@apply scale-75;
	}
</style>
```
