<script lang="ts">
  import { players } from '$lib/store/players';
  import type { Player } from '$lib/types/Player';
  import { tick } from 'svelte';

  let playerNameInputValue: string = '';
  let playerNameInput: HTMLElement | undefined = undefined;
  let chosenPlayer: Player | undefined = undefined;

  // FIXME
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function handleAddPlayer(event: any): Promise<void> {
    event.preventDefault();

    players.addPlayer({ name: playerNameInputValue });
    playerNameInputValue = '';

    if (playerNameInput) {
      await tick();
      playerNameInput.focus();
    }
  }

  function handlePickPlayer() {
    const index = Math.floor(Math.random() * $players.length);
    // TODO: maybe add a fancy animation
    chosenPlayer = $players[index];
  }
</script>

<div class="container mx-auto flex h-full items-center justify-center">
  <div class="my-8 h-full space-y-4">
    <h1 class="h1">Player Picker</h1>
    <p>Add players, and randomly pick one</p>

    <div class="flex w-96 flex-col space-y-2 overflow-y-auto">
      {#each $players as player (player.name)}
        {@const isChosen = player.name === chosenPlayer?.name}
        {@const colorClasses = isChosen
          ? 'border-yellow-600 bg-amber-500'
          : 'border-slate-200 bg-slate-100'}
        <div class="w-full rounded-md border-2 {colorClasses} px-8 py-4">
          {player.name}
        </div>
      {/each}
      <form>
        <div class="flex flex-row space-x-2">
          <input
            type="text"
            class="box-border h-12 flex-auto basis-3/4 rounded-md border-slate-500 px-3 py-2 shadow-2xl focus:border-2 focus:border-blue-500 focus:ring-0"
            bind:this={playerNameInput}
            bind:value={playerNameInputValue}
          />
          <button
            type="submit"
            class="btn flex-auto basis-1/4 bg-blue-500 text-slate-50"
            on:submit={handleAddPlayer}
            on:click={handleAddPlayer}
          >
            add
          </button>
        </div>
      </form>

      <button
        type="button"
        class="btn bg-amber-500 text-slate-900"
        on:click={handlePickPlayer}
      >
        Randomize
      </button>

      {#if chosenPlayer !== undefined}
        <p class="text-2xl">The chosen player is:</p>
        <p class="text-2xl text-amber-500">{chosenPlayer.name}</p>
      {/if}
    </div>
  </div>
</div>
