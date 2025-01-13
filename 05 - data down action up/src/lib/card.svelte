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

<style>
  .card {
    @apply bg-white shadow-md rounded-lg p-4 border border-gray-200;
  }
</style>