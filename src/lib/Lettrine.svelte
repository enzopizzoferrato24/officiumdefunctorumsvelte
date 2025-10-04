<script>
  export let letter = '';
  export let color = '#DC143C';
</script>

<span class="lettrine" style="color: {color}">{letter}</span>

<style>
  .lettrine {
    font-family: 'Lasance Initials', serif;
    float: left;
    font-size: 3.5em;
    line-height: 0.8em;
    margin-right: 0.08em;
    margin-top: 0.1em;
    margin-bottom: -0.1em;
    font-weight: bold;
  }
</style>
