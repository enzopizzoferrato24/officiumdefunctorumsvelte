<script>
  import Header from '$lib/Header.svelte';
  import Footer from '$lib/Footer.svelte';
  import '../app.css';
  
  export let data;
</script>

<svelte:head>
  <title>Office of the Dead Documents</title>
</svelte:head>

<Header currentPage={data?.currentPage || ''} />

<main>
  <slot />
</main>

<Footer />

<style>
  main {
    margin-top: 20px;
    width: 100%;
    max-width: 100%;
  }
</style>
