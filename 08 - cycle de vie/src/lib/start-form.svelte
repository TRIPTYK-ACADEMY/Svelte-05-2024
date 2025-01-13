<script>
let { newGamer = $bindable(), addGamer } = $props();
</script>

<div class="w-full">
  <form class="flex flex-col items-center">
    <p class="py-4">Nouveau joueur</p>
    <div class="flex flex-col items-cente">
      <label class="w-full" for="name">Nom joueur</label>
      <input  class="w-full" type="text" id="name" name="name" bind:value={newGamer.name} required>
      <label class="w-full" for="image">Avatar</label>
      <input  class="w-full" type="text" id="image" name="image" bind:value={newGamer.img} required>
    </div> 
    <button class="bg-emerald-500 text-emerald-900 hover:text-emerald-500 hover:bg-emerald-900 rounded p-2 mt-8 w-1/5"type="button" onclick={addGamer}>Ajouter</button> 
  </form>
  
</div>