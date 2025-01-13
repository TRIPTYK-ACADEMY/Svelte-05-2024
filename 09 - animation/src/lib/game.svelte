<script>
import { onDestroy, onMount } from "svelte";
import { fade, fly } from "svelte/transition";
let quizzes = $state()
let questionNumber = $state(1);
let seeResponse = $state(false);
let answers = $state([]);

const shuffleQuizz = ()=>{
		quizzes = undefined
		seeResponse = false;
		setTimeout(async () => {
			const res = await fetch("https://quizzapi.jomoreschi.fr/api/v1/quiz?limit=1&difficulty=facile");
			let response = await res.json();
			quizzes = response.quizzes[0];
			answers = [...quizzes.badAnswers, quizzes.answer]
			answers = answers.sort(() => Math.random() - 0.5)
		}, 1000);
	}

onMount(() => {
  console.log("Le composant est monté !");
    shuffleQuizz()  
});

//after update : exécuté après chaque mise à jour
$effect(() => {
    console.log("After update", questionNumber);
});

//before update : exécuté avant chaque mise à jour
$effect.pre(() => {
    console.log("Before update", questionNumber);
});

onDestroy(() => {
  console.log(`Le composant est détruit, il y a eu au total : ${questionNumber} questions !`);
});

const newQuestion = () => {
  shuffleQuizz()
};
</script>

<div class="relative w-full ">
  {#if quizzes}
    <div class="game" transition:fade={{duration: 100, delay: 300}} >
      <p class="my-4 ml-2">Question {questionNumber}</p>
      <p class="my-4 ml-2 italic font-bold">Q: {quizzes.question}</p>
      <ul class="flex justify-around w-full">
        {#each answers as answer, index}
          <li class="my-1">{index+1} - {answer}</li>
        {/each}
      </ul>
      <div class="flex my-4 ml-2">
        <p>R: </p>
        {#if seeResponse} 
      <p class="ml-2" transition:fly={{ x: 500, duration: 2000 }}>{quizzes.answer} </p>
      {/if}
    </div>
      <button
      onclick="{()=> seeResponse=!seeResponse}"
      class="px-4 py-2 text-sm font-bold text-white bg-orange-600 duration-200 rounded-md hover:bg-orange-800"
      >Reponse</button
    >
      <button
        onclick="{newQuestion}"
        class="px-4 py-2 text-sm font-bold text-white bg-orange-600 duration-200 rounded-md hover:bg-orange-800"
        >Nouvelle question</button
      >
    </div>
  {:else}
  <div class="game absolute w-full left-0 top-0  flex justify-center items-center" transition:fade={{duration: 100, delay: 300}}>
    <p class="text-4xl" >Loading ...</p>
</div>
  {/if}
</div>

<style>
  .game  {
    @apply bg-orange-200 shadow-md shadow-orange-300 rounded-lg p-4 border border-orange-300 mt-4 w-full;
  } 
</style>