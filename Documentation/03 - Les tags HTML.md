Reprenons notre projet. Nous avons, pour l'instant, utilisé notre HTML avec du texte brut.  
Dans cet exemple rapide, nous allons voir comment interagir avec celui-ci à partir de nos scripts.

### Dans le fichier `main` :

- Nous allons créer une variable `name`.
- Dans le HTML, nous passerons cette variable en la plaçant entre des accolades `{}`.

```svelte
//main
<script>
...

let name = "Patibulaire";
</script>

...
<p>Je m'appelle {name}. J'aime le chorizo et le cheval à vapeur</p>
...

```

Nous pouvons également l'utiliser comme argument à l'intérieur même des balises.

- Créons une variable `classe` que nous passerons dans une `div` avec une petite ternaire.
- Créons aussi une variable `src`, qui aura pour but de définir la source d'une image.

Nous constatons que cela fonctionne très bien !  

<span style="color:red">Remarque : ce que nous faisons avec `src` n'est pas possible avec `class`, car ce dernier est un mot réservé.</span>
		  
```svelte
//main
<script>
...

let name = "Patibulaire";
let classe = `${ name === "Patibulaire" ? " m-4 border-8 border-yellow-600" : "w-4" }`;
let src = "https://p4.storage.canalblog.com/41/13/993786/99601694.jpg";
</script>

...
	<div class={classe}>
		<p >Je m'appelle {name}. J'aime le chorizo et le cheval à vapeur</p>
		<Kid />
		<img {src} alt="logo" class=" w-28 animation-image " />
	</div>
...
```
