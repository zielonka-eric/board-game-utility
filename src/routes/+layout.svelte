<script lang="ts">
  import '../app.postcss';

  // Floating UI for Popups
  import {
    computePosition,
    autoUpdate,
    flip,
    shift,
    offset,
    arrow
  } from '@floating-ui/dom';

  import { AppBar, storePopup } from '@skeletonlabs/skeleton';
  import { ArrowLeft, Menu } from 'lucide-svelte';

  storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

  function handleBack() {
    console.log('back');
  }

  function handleMenu() {
    console.log('menu');
  }
</script>

<AppBar>
  <svelte:fragment slot="lead">
    <button
      type="button"
      class="variant-filled-surface btn-icon rounded-2xl bg-slate-600 text-stone-100"
      on:click={handleBack}
    >
      <ArrowLeft />
    </button>
  </svelte:fragment>
  <svelte:fragment>
    <a
      href="/"
      class="inline-block w-full text-center text-xl font-bold tracking-wide text-blue-600 hover:text-blue-400"
    >
      Board Game Utilities
    </a>
  </svelte:fragment>
  <svelte:fragment slot="trail">
    <button
      type="button"
      class="variant-filled-surface btn-icon rounded-2xl bg-slate-600 text-stone-100"
      on:click={handleMenu}
    >
      <Menu />
    </button>
  </svelte:fragment>
</AppBar>

<slot />
