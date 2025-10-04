<script>
  export let text = '';
  export let type = 'normal'; // 'normal', 'asterisk', 'dagger'
</script>

{#if type === 'asterisk'}
  <span class="rubric asterisk">{text}</span>
{:else if type === 'dagger'}
  <span class="rubric dagger">{text}</span>
{:else}
  <span class="rubric">{text}</span>
{/if}

<style>
  .rubric {
    color: #DC143C;
  }

  .rubric.asterisk {
    color: #DC143C;
  }

  .rubric.dagger {
    color: #DC143C;
  }
</style>
