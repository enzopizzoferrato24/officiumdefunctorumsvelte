<script>
  export let src = '';
  export let alt = '';
  export let position = 'top'; // 'top' or 'bottom'
</script>

<div class="page-image-{position}">
  <img src={src} alt={alt} class="decorative-image">
</div>

<style>
  .page-image-top, .page-image-bottom {
    text-align: center;
    margin: 20px 0 30px 0;
  }

  .decorative-image {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 10px auto;
  }
</style>
