<script>
  import PageImage from '$lib/PageImage.svelte';
</script>

<svelte:head>
  <title>Lauds - Office of the Dead</title>
</svelte:head>

<section>
  <PageImage src="/visuals/souls.jpeg" alt="Souls" />
  
  <h1>Lauds</h1>
  
  <div class="content">
    <p>This page would contain the Lauds prayers for the Office of the Dead.</p>
    <p><em>Content to be added based on the original lauds.html file.</em></p>
  </div>
</section>

<style>
  section {
    margin-bottom: 30px;
  }

  h1 {
    font-weight: normal;
    text-align: center;
  }

  .content {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    padding: 2em;
  }
</style>
