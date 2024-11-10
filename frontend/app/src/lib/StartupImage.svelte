<script>
	export let name;
	export let image = `https://api.dicebear.com/9.x/initials/png?seed=${name}&backgroundColor=F8D25C,FB6376,4ECDC4,9085D5`;
</script>

<img src={image} alt={name} />

<style lang="scss">
    img{
        border-radius: 8px;
    }
</style>    