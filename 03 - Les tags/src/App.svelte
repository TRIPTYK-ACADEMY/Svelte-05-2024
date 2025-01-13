<script>
  import Kid from "./lib/kid.svelte";
  import Header from "./lib/header.svelte";
  let name = "Patrick";
  let classe = `flex flex-col items-center m-4 ${
    name === "Patrick" ? "border-8 border-yellow-600" : "border-4 border-blue-600"
  }`;
  let src = "https://p4.storage.canalblog.com/41/13/993786/99601694.jpg";
</script>

<div class="bg-slate-50 flex flex-col min-h-screen">
  <Header />
 
  <main class="container mx-auto m-8 border-2 border-dashed rounded p-8">
    <div class={classe}>
      <p >I'm {name} and this is the parent file (app.svelte)</p>
      <Kid />
      <img {src} alt="logo" class=" w-28 animation-image " />
    </div>
  </main>
</div>

<style>
  p {
    font-size: 3rem;
    text-align: center;
  }
</style>
