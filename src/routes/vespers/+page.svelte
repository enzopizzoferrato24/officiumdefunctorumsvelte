<script>
  import PageImage from '$lib/PageImage.svelte';
  import TwoColumnLayout from '$lib/TwoColumnLayout.svelte';
  import Lettrine from '$lib/Lettrine.svelte';
  import Rubric from '$lib/Rubric.svelte';
</script>

<svelte:head>
  <title>Vespers - Office of the Dead</title>
</svelte:head>

<PageImage src="/visuals/animeinpurgatorio.jpeg" alt="Anime in Purgatorio" />

<h1>Vespers</h1>

<p class="rubric">¶ The Office begins at once with the first Antiphon, as follows.</p>

<TwoColumnLayout 
  leftContent='<span class="rubric">Ant.</span> Placébo <span class="rubric asterisk">*</span> Dómino in regióne vivórum.'
  rightContent='<span class="rubric">Ant.</span> I will please the Lord in the land of the living.'
/>

<h2 class="psalm-title">Psalm 114</h2>

<TwoColumnLayout 
  leftContent='<span class="lettrine">D</span>iléxi, quóniam exáudiet Dóminus <span class="rubric asterisk">*</span> vocem oratiónis meæ.'
  rightContent='<span class="lettrine">I</span> have loved, because the Lord will hear the voice of my prayer.'
/>

<TwoColumnLayout 
  leftContent='Quia inclinávit aurem suam mihi: <span class="rubric asterisk">*</span> et in diébus meis invocábo.'
  rightContent='Because he hath inclined his ear unto me: and in my days I will call upon him.'
/>

<TwoColumnLayout 
  leftContent='Circumdedérunt me dolóres mortis: <span class="rubric asterisk">*</span> et perícula inférni invenérunt me.'
  rightContent='The sorrows of death have compassed me: and the perils of hell have found me.'
/>

<TwoColumnLayout 
  leftContent='Tribulatiónem et dolórem invéni: <span class="rubric asterisk">*</span> et nomen Dómini invocávi.'
  rightContent='I met with trouble and sorrow: and I called upon the name of the Lord.'
/>

<TwoColumnLayout 
  leftContent='O Dómine, líbera ánimam meam:<span class="rubric dagger">†</span>miséricors Dóminus, et justus, <span class="rubric asterisk">*</span> et Deus noster miserétur.'
  rightContent='O Lord, deliver my soul: the Lord is merciful and just, and our God sheweth mercy.'
/>

<TwoColumnLayout 
  leftContent='Custódiens párvulos Dóminus: <span class="rubric asterisk">*</span> humiliátus sum, et liberávit me.'
  rightContent='The Lord is the keeper of little ones: I was little and he delivered me.'
/>

<TwoColumnLayout 
  leftContent='Convértere ánima mea in réquiem tuam: <span class="rubric asterisk">*</span> quia Dóminus benefécit tibi.'
  rightContent='Turn, O my soul, into thy rest: for the Lord hath been bountiful to thee.'
/>

<TwoColumnLayout 
  leftContent='Quia erípuit ánimam meam de morte:<span class="rubric dagger">†</span>óculos meos a lácrimis, <span class="rubric asterisk">*</span> pedes meos a lapsu.'
  rightContent='For he hath delivered my soul from death: my eyes from tears, my feet from falling.'
/>

<TwoColumnLayout 
  leftContent='Placébo Dómino <span class="rubric asterisk">*</span> in regióne vivórum.'
  rightContent='I will please the Lord in the land of the living.'
/>

<TwoColumnLayout 
  leftContent='Réquiem ætérnam.'
  rightContent='Eternal rest.'
/>

<TwoColumnLayout 
  leftContent='<span class="rubric">Ant.</span> Placébo Dómino in regióne vivórum.'
  rightContent='<span class="rubric">Ant.</span> I will please the Lord in the land of the living.'
/>

<div class="section-break"></div>

<TwoColumnLayout 
  leftContent='<span class="rubric">Ant.</span> Hei mihi <span class="rubric asterisk">*</span> quia incolátus meus prolongátus est.'
  rightContent='<span class="rubric">Ant.</span> Woe is me that my sojourning is prolonged.'
/>

<h2 class="psalm-title">Psalm 119</h2>

<TwoColumnLayout 
  leftContent='<span class="lettrine">A</span>d Dóminum cum tribulárer clamávi: <span class="rubric asterisk">*</span> et exaudívit me.'
  rightContent='<span class="lettrine">I</span>n my trouble I cried to the Lord: and he heard me.'
/>

<TwoColumnLayout 
  leftContent='Dómine, líbera ánimam meam a lábiis iníquis, <span class="rubric asterisk">*</span> et a lingua dolósa.'
  rightContent='O Lord, deliver my soul from wicked lips, and from a deceitful tongue.'
/>

<p class="note"><em>This is a simplified version showing the structure. The complete vespers would include all psalms, canticles, and prayers from the original.</em></p>

<style>
  h1, h2 {
    font-weight: normal;
    text-align: center;
  }

  .psalm-title {
    color: #DC143C;
    margin: 1.5em 0 1em 0;
  }

  .rubric {
    color: #DC143C;
  }

  :global(.rubric.asterisk) {
    color: #DC143C;
  }

  :global(.rubric.dagger) {
    color: #DC143C;
  }

  :global(.lettrine) {
    font-family: 'Lasance Initials', serif;
    float: left;
    font-size: 3.5em;
    line-height: 0.8em;
    margin-right: 0.08em;
    margin-top: 0.1em;
    margin-bottom: -0.1em;
    font-weight: bold;
    color: #DC143C;
  }

  .section-break {
    margin: 40px 0;
    border-bottom: 1px solid #ddd;
  }

  .note {
    text-align: center;
    font-style: italic;
    margin: 2em 0;
    padding: 1em;
    background-color: #f9f9f9;
    border-left: 4px solid #DC143C;
  }
</style>
