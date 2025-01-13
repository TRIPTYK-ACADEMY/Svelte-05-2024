<script>
  import Kid from "./lib/kid.svelte";
  import Header from "./lib/header.svelte";
</script>

<div class="bg-slate-50 flex flex-col min-h-screen">
  <Header />
  <main class="container mx-auto m-8 border-2 border-dashed rounded p-8">
    <p>This is parent file (the app.svelte)</p>
    <Kid/>
  </main>
</div>

<style>
  p {
    font-size: 3rem;
    text-align: center;
  }
</style>
