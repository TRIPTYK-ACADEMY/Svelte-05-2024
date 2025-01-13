<script>

  let score = $state(0);
  let { gamer } = $props()
</script>

<div class="card flex flex-col">
  <div class="flex justify-start">
    <img src={gamer.img} alt="avatar" class="rounded-full w-6 h-6 mr-4 mb-2"/>
    <h2 class="w-full">{gamer.name}</h2>
  </div>
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