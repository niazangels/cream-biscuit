<script>
	import IconBell from '$lib/icons/bell.svg';
</script>
	
<header>
	<a href="/">
		<img src="/images/huddle_black.svg" class="logo" alt="Huddle" />
	</a>
	<img class="top-icon" src={IconBell} alt="Notifications" />
</header>


<style lang="scss">
	header {
		display: flex;
		justify-content: space-between;
		background-color: #fff;
	

		.logo {
			width: 100px;
            padding: 10px
		}

		.top-icon {
			width: 25px;
			opacity: 0.5;
			margin-right: 10px;
		}
	}
</style>
