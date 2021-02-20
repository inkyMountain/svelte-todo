<script lang="ts">
  import Child from './Child.svelte';
  export let name: string;
</script>

<main>
  <h1>Hello {name}!</h1>
	<Child />
</main>

<style>
</style>
