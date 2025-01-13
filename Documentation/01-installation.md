### 0 - Introduction

A l'instar de react svelte est une librairie offrant des outils pour créé des composants réutilisable tel que barre de navigation, de recherche, formulaire, cards...
cette librairie offre des fonctions facilitant la réactivité au sain de notre projet

### 1 - aller sur le site de svelte et dans doc choisir svelte
https://svelte.dev/
https://svelte.dev/docs/svelte/getting-started

### 2 - Suivre les instructions

Sur la racine de nos projects

Dans le terminal
```bash
npx sv create myapp
cd myapp
npm install
npm run dev
```
 
 Ou pour nous nous allons prendre l'alternative vite

```bash
pnpm create vite@latest
```

- Nommer son projet
- Choisir svelte
- Choisir javascript

```bash
pnpm i
```
 - on installe les packages

```bash
pnpm dev
```

On test si notre projet est bien fonctionnel

Et voila, nous avons créé notre nouveau projet  a partir de vite avec la librairie svelte en technologie javascript

### 3 - Les fichiers

vite installera les dépendances de base pour un bon fonctionnement de l'application. 
nous auront un fichier .gitignore qui nous permettra d'ignoré les fichier et dossier non nécéssaire pour push notre projet sur git
packages.json qui défini les librairies et frameworks utilisé dans notre projet et script qui nous permettra de créé des alias de commande pour nous facilité le travail

### 4 - Le petit plus pour la suite 

nous allons installer tailwind

rendons nous sur tailwind
nous passerons directement au second point vu que nous avons deja fait le premier.

```bash
pnpm install -D tailwindcss postcss autoprefixer
pnpm tailwindcss init -p
```

ensuite dans le fichier tailwind.config nous allons coller ces lignes

```json
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {}
  },
  plugins: []
};
```

et dans le fichier app.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 5 - Préparation final

si tailwind fonctionne nous allons modifier certain fichier : 

dans app.svelte on supprime tout et on ajoute : 

```html
<p class="text-xl font-bold text-blue-500 uppercase">welcome to new project vite + svelte 5 + tailwind</p>
```

dans app.css on supprime tout ce qui n'est pas tailwind

Et voila, notre projet est prêt a être réutilisable

### 6 - Tour d'horizon

maintenant que notre projet est créé, nous en allons faire le tour. 

#### A - le fichier svelte.config.js : 

celui-ci permet de configurer notre librairie svelte, nous le laisserons comme cela mais je vous invite a consulté la doc : 
https://svelte.dev/docs/kit/configuration

#### B - Les fichiers .svelte

Ceux-ci seront nos composants. il seront toujours fait de cette façon : 

```Svelte
<script module>
	//facultatif un attribut de module s'exécute une fois lors de la première évaluation du module
	//dans celui-ci toute declaration ou fonction sera lier au fichier et donc a toute les instances du componsant. 
	// 
</script>

<script>
 //partie logique du composant c'est ici ou nous creeront nos fonctions déclareront nos variable etc...
</script>

  
<main>
//partie ou nous auront notre html
<p class="text-xl font-bold text-blue-500 uppercase">welcome to new project vite + svelte 5 + tailwind</p>

</main>

  
<style>
//partie du css
</style>
```

#### script module 

##### **Caractéristiques principales** :

1. **Portée globale au fichier** :
    - Les variables et fonctions déclarées dans `<script module>` sont **partagées** entre toutes les instances du composant.
    
2. **Pas de cycle de vie d'instance** :
    - Le code du module est exécuté **une seule fois**, au moment de l'importation du fichier.
    - Il ne dépend pas de l'état ou du cycle de vie d’une instance spécifique.
    
3. **Utilisations typiques** :
    - Définir des **fonctions utilitaires** ou des **constantes**.
    - Exporter des valeurs ou des hooks pour les utiliser dans d’autres fichiers.
    - Créer des ressources partagées entre toutes les instances d'un composant.
    
1. **Ne gère pas directement le DOM** :
    - Le module est purement logique et ne manipule pas directement les éléments HTML ou CSS.


#### script

##### **Caractéristiques principales** :

1. **Portée locale** : Les variables et fonctions définies dans le `<script>` sont propres à chaque instance du composant.
    
2.  **Réactivité automatique** : Toute variable réactive (`let`) déclenche une mise à jour du DOM en cas de changement de valeur.
    
3. **Cycle de vie du composant** : Gestion des hooks de cycle de vie (`onMount`, `onDestroy`, `beforeUpdate`, `afterUpdate`).
    
4. **Props** : Possibilité d’exporter des variables avec `export let` pour recevoir des données du parent.
    
5. **Événements** : Utilisation de `createEventDispatcher` pour émettre et communiquer via des événements personnalisés avec les composants parents.
    
6. **Intégration avec les stores** : Accès direct aux stores réactifs via la syntaxe `$store` pour partager et réagir aux données globales.
    
7. **Imports et réutilisation de ressources** : Importation de modules, fonctions, utilitaires ou composants externes pour une meilleure organisation.
    
8.  **Fonctions asynchrones** : Gestion intégrée d’opérations asynchrones, comme l’appel d’API, mises à jour quand les données arrivent.

### **Quand utiliser quoi ?**

- **Composant** : Pour encapsuler l'interface utilisateur et gérer son état.
- **Module** : Pour partager des **fonctions utilitaires**, des **valeurs constantes**, ou des ressources entre instances, ou dans d’autres fichiers.


  
