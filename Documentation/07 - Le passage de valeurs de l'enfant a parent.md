
Aussi nommé binding en svelte nous allons voir comme cela se passe avec la rune bindage()

Pour ce faire nous allons utilisé cette fois ci notre formulaire afin de pouvoir cree des joueurs : 
- Dans star-form nous allons cree une variable que l'on va passer dans l'app elle pourra être modifiable
- Ensuite dans son contenu nous allons récupérer les valeurs avec la clé bind:value (lié:la_value_de_linput) dans chaque input

```svelte
start-form.svelte
<script>
	let { newGamer = $bindable() } = $props();
</script>

...
			<input class="w-full" type="text" id="name" name="name" bind:value={newGamer.name} required>
			<label class="w-full" for="image">Avatar</label>
			<input class="w-full" type="text" id="image" name="image" bind:value={newGamer.img} required>
		</div>
	</form>
</div>
```

- dans le app.svelte, nous allons cree une variable qui va récupérer les nouvelle valeur
- ensuite, n afin qu'elle suive les modification nous allons aussi la bind afin de la lié a notre composant enfant
- Dans notre fonction addGamer, on va ajouter notre nouvel objet dans le tableau de joueurs
- Pour finir afin que notre tableau soit réactif nous allons lui donner aussi la rune $state()

```svelte
//app.svelte

...
	let newGamer = $state({name: "", img: ""});
	
	const addGamer = () => {
		gamers = [...gamers, newGamer];
		newGamer = {name: "", img: ""};
		console.log(gamers);
	};
	
	let isNotHidden = $state(false);
</script>

...
	<StartForm addGamer={addGamer} bind:newGamer={newGamer}/>

```
 