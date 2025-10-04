<script>
  import TwoColumnLayout from './TwoColumnLayout.svelte';
  import Lettrine from './Lettrine.svelte';
  import Rubric from './Rubric.svelte';
  
  export let latinText = '';
  export let englishText = '';
  export let hasLettrine = false;
  export let lettrine = '';
  export let hasRubric = false;
  export let rubricType = 'asterisk';
</script>

<TwoColumnLayout 
  leftContent={latinText} 
  rightContent={englishText}
  leftClass="column-left"
  rightClass="column-right"
/>

<style>
  :global(.column-left), :global(.column-right) {
    padding: 0;
  }
</style>
