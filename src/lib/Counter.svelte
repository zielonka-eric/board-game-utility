<script lang="ts">
  let count: number = 0;
  const increment = () => {
    count += 1;
  };
</script>

<button class="bg-blue-400 text-3xl font-bold underline" on:click={increment}>
  count is {count}
</button>
