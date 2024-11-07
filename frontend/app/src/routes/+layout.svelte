<script>    
  import "$lib/styles/reset.css";
  import "$lib/styles/bootstrap-grid.min.css";
  import "$lib/styles/main.scss";
  
  import Header from "$lib/Header.svelte";
</script>

<Header />
<div class="container">
  <slot/>
</div>