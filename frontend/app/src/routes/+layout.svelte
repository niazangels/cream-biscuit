<script>    
  import "$lib/styles/reset.css";
  import "$lib/styles/bootstrap-grid.min.css";
  import "$lib/styles/main.scss";
  
  import Header from "$lib/Header.svelte";
  import Footer from "$lib/Footer.svelte";
</script>

<Header />
<div class="container">
  <slot/>
</div>

<Footer />
<style lang="scss">
  .container{
		padding-inline: 1rem;
		overflow-x: hidden;
    background-color: #f5f6f7;
	}
</style>