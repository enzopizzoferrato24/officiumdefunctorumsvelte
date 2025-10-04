<script>
  import PageImage from '$lib/PageImage.svelte';
  import TwoColumnLayout from '$lib/TwoColumnLayout.svelte';
</script>

<svelte:head>
  <title>Office of the Dead Documents</title>
</svelte:head>

<section>
  <PageImage src="/visuals/souls.jpeg" alt="Souls" />

  <div class="paracol">
    <div class="latin-column">
      <h2>Restoring an Ancient Tradition</h2>
      <p>It is easier for a camel to pass through the eye of a needle than for a rich man to enter the kingdom of heaven. For most of Christian history, wealthy Christians were acutely aware of Christ's words, especially those in the business class, whose daily dealings inevitably involved encounters with venial sins of dishonesty, pride, and greed. Not all could follow His command to "sell everything and give it to the poor," so they felt an urgent imperative to work out their salvation with fear and trembling and find remission of temporal punishment by commissioning others to pray for them now and after their death.</p>

      <p>Hence, the creation of foundations, monasteries, and chantries—endowments to fund the praying of Masses and the Office of the Dead, for the forgiveness of both known and unknown sins. In an age where the consequences of sin were taken with the utmost seriousness, this practice offered the affluent a way to seek mercy, not just for themselves, but for their families and others trapped in purgatory.</p>

      <p>This purgatorial economy gave rise to our hospitals, schools, and orphanages, originally tasked with praying for the souls of their founders. Modern revolutions and secularism wiped out most of this work, leaving us only with vestigial structures, but the urgency of prayer for the dead remains and in fact has grown. This initiative revives that tradition in a bold and novel way—by establishing again stipends for literate laymen to recite the office.</p>
    </div>

    <div class="english-column">
      <img src="/visuals/crucifixion.png" alt="Crucifixion" class="crucifixion-image">
    </div>
  </div>
</section>

<style>
  section {
    margin-bottom: 30px;
  }

  .paracol {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin: 1em 0;
    align-items: start;
  }

  .latin-column, .english-column {
    padding: 0;
  }

  .paracol p {
    margin: 0.5em 0;
  }

  .crucifixion-image {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
  }

  h2 {
    font-weight: normal;
    text-align: center;
  }

  @media (max-width: 768px) {
    .paracol {
      grid-template-columns: 1fr;
      gap: 15px;
    }
  }
</style>
