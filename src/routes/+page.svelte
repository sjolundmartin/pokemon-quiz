<script lang="ts">
  export let data;
  import { capitalizeFirstLetter } from '$lib/utils';

  // The data is passed from the server-side
  const pokemonData = data;
  const pokemonNames = data.pokemon.map((p) => p.name);

  // The input is bound to the value of the input field
  let input = '';
  // The list of correct answers is stored in a variable
  let correctAnswers: Array<{ id: number; name: string; sprite: string }> = [];

  // Check if the input is a valid pokémon name and add it to the list of correct answers
  const checkAnswer = () => {
    const pokemonInput = input.toLowerCase();
    if (pokemonInput === '') return;
    if (
      pokemonNames.includes(pokemonInput) &&
      !correctAnswers.find((p) => p.name === pokemonInput)
    ) {
      const pokemon = pokemonData.pokemon.find((p) => p.name === pokemonInput);
      if (pokemon)
        // Add the pokémon to the list of correct answers and sort the list by id (pokédex number)
        correctAnswers = [...correctAnswers, pokemon].sort((a, b) => {
          if (a.id < b.id) return -1;
          if (a.id > b.id) return 1;
          return 0;
        });

      input = '';
    }
  };
</script>

<div class="vstack gap-3">
  <h2>Type the name of a pokémon</h2>
  <input type="text" bind:value={input} on:keyup={checkAnswer} />

  <div class="vstack gap-3">
    <h3>Correct answers</h3>
    <!-- {#each correctAnswers as { id, name, sprite }}
      <div class="hstack gap-1">
        <img src={sprite} alt={name} width="70" />
        <h5 class="text-body-secondary">{`#${id}`}</h5>
        <h5>{capitalizeFirstLetter(name)}</h5>
      </div>
    {/each} -->
  </div>
  <div class="container d-flex flex-wrap">
    {#each pokemonData.pokemon as pokemon}
      <div>
        {#if correctAnswers.find((p) => p.id === pokemon.id)}
          <img src={pokemon.sprite} alt={pokemon.name} />
        {:else}
          <img src={pokemonData.items.pokeBall.sprite} alt={pokemonData.items.pokeBall.name} />
        {/if}
      </div>
    {/each}
  </div>
</div>
