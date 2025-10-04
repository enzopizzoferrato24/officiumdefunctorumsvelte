<script>
  import { processLiturgicalText, formatAntiphon, formatVersicleResponse } from './utils.js';
  
  export let text = '';
  export let type = 'normal'; // 'normal', 'antiphon', 'versicle', 'response'
  export let processMarkup = true;
  
  $: processedText = processMarkup ? processLiturgicalText(text) : text;
  $: formattedText = type === 'antiphon' ? formatAntiphon(processedText) : processedText;
</script>

<span class="liturgical-text {type}">
  {@html formattedText}
</span>

<style>
  .liturgical-text {
    display: inline;
  }
  
  .liturgical-text.antiphon {
    display: block;
    margin: 0.5em 0;
  }
  
  .liturgical-text.versicle,
  .liturgical-text.response {
    display: block;
    margin: 0.25em 0;
  }
</style>
