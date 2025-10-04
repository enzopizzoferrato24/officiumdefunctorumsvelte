<script>
  export let leftContent = '';
  export let rightContent = '';
  export let leftClass = 'column-left';
  export let rightClass = 'column-right';
</script>

<div class="paracol">
  <div class={leftClass}>
    {@html leftContent}
  </div>
  <div class={rightClass}>
    {@html rightContent}
  </div>
</div>

<style>
  .paracol {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin: 1em 0;
    align-items: start;
  }

  .paracol :global(p) {
    margin: 0.5em 0;
  }

  @media (max-width: 768px) {
    .paracol {
      grid-template-columns: 1fr;
      gap: 15px;
    }
    
    .paracol :global(p:nth-child(odd)) {
      border-bottom: 1px solid #ddd;
      padding-bottom: 0.5em;
      margin-bottom: 0.5em;
    }
  }
</style>
