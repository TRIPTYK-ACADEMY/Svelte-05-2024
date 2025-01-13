### Qu'est ce que la réactivité avec Svelte

La réactivité dans Svelte est directe, intuitive et hautement optimisée grâce à la compilation. Elle repose sur :

- La mise à jour automatique des variables.
- Des expressions déclaratives avec `$:`.
- Une gestion fluide des stores pour les données partagées. Avec chaque nouvelle version, Svelte affine cette approche pour la rendre encore plus performante et maintenable.

Nous allons voir qu'avec svelte 5 nous utiliserons la réactivité a partir de runes ;

avant cela, pour l'instant svelte 5 est toujours une transition et donc il se pourrait que celui-ci n'est pas en stricte runes et donc cer qui ne devrai pas fonctionner, le fait. nous allons forcer le compilateur a etre en mode rune :

- dnas le fichier vite.config.js, nous allons renplacer le code par :

```js

import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
	plugins: [
		svelte({
			preprocess: {
				markup({ content }) {
					return { code: content };
				},
			},
			compilerOptions: {
				runes: true, // Forcer le mode runes
			},
		}),
	],
});
```


#### **A - L'état d'une variable (State)**

- **$state** : Permet de déclarer une variable réactive. Lorsqu'une variable est créée avec $state, toute modification de sa valeur entraîne automatiquement la mise à jour des parties du composant qui en dépendent.

Reprenons notre projet et modifions-le en y ajoutant des états réactifs :

Lors de la création de notre projet, nous avions remarqué une fonction qui permettait d'incrémenter un nombre. Reproduisons cette fonctionnalité pour mieux comprendre le concept de réactivité.

1. Retournons dans le app.svelte et donnons comme valeur a notre booléen : true
```svelte
//app.svelte
<script>
...
let isNotHidden = true;
...
</script>
```

2. Maintenant que nous revoyons nos joueurs nous allons encore un peu les modifier, retournons dans card.svelte
3. ajoutons deux boutons a nos card un pour ajouter un point et l'autre pour supprimer un point

```svelte
//card.svelte
<script>
	let score = 0;
</script>

<div class="card flex flex-col">
	<span>Score: {score}</span>
	<div class="flex justify-around">
		<button class="py-2 px-4 mb-4 rounded bg-gray-300 hover:bg-gray-700 hover:text-white" onclick={() => score--}>-1</button>
		<button class="py-2 px-4 mb-4 rounded bg-gray-300 hover:bg-gray-700 hover:text-white" onclick={() => score++}>+1</button>
	</div>
</div>

<style>

.card {
	@apply bg-white shadow-md rounded-lg p-4 border border-gray-200;
}
</style>
```

Nous constatons que l'état de la variable ne réagit pas dans le HTML. Cela est dû au fait que nous modifions une variable dans une fonction et l'utilisons ensuite dans notre HTML. Pour Svelte, cela n'est pas suffisant, car il ne détecte pas automatiquement cette modification.

C'est ici qu'intervient le concept de réactivité :  
Pour que notre variable réagisse correctement dans le HTML, nous devons la déclarer comme réactive avec `$state`. Par exemple : `$state(0)` pour initialiser notre variable `score` à zéro.

- ajoutons $state(0) a la place de la valeur de notre score 

```svelte
//card.svelte
<script>
...
let score = $state(0);
</script>
```

Et la magie notre valeur est modifier dans notre contenu

Petit exercice : dans le app.svelte, nous allons rendre notre booléen réactive mais nous allons aussi changer le nom de notre bouton selon si nous sommes dans le jeu ou pas. pour ce faire vous ferez une fonction dans un tag du bouton

Correction : 
 ```svelte
 //app.svelte
<script>
	...
	let isNotHidden = $state(false);
</script>

...
{/if}
	<div class="w-full">
	<button class="bg-blue-400 text-blue-900 hover:bg-blue-900 hover:text-blue-400 rounded p-2 mt-8 w-1/5" type="button" onclick={() => isNotHidden = !isNotHidden}>
		{#if isNotHidden}
			Arreter le jeu
		{:else}
			Lancer le jeu
		{/if}
	</button>
</div>
...
```

