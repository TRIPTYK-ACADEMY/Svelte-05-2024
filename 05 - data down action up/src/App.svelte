<script>
  import Card from "./lib/card.svelte";
  import Header from "./lib/header.svelte";
  import StartForm from "./lib/start-form.svelte";
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
  let isNotHidden = false;
  const addGamer = () => {
    console.log("addGamer", gamers)
  };
</script>

<main class="bg-slate-50 flex flex-col min-h-screen">
  <Header />
  <div class="container mx-auto m-8 border-2 border-dashed rounded  p-8">
    <h1 class="text-center pb-4 rounded text-xl font-semibold text-blue-800">Trivial Poursuite</h1>
    {#if isNotHidden}
    <div class="grid grid-cols-3 gap-4 w-full">
      {#each gamers as gamer}
        <Card gamer={gamer} />
      {/each}
    </div>
    {:else}
     <StartForm addGamer={addGamer}/>  
    {/if}
    <div class="w-full">
      <button class="bg-blue-400 text-blue-900 hover:bg-blue-900 hover:text-blue-400 rounded p-2 mt-8 w-1/5" type="button">
        Lancer le jeu / arreter le jeu
      </button>
    </div>
  </div> 

</main>
