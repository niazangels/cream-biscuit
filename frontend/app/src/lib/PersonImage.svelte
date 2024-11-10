<script>
	export let person;  
</script>

<img
	src={`https://api.dicebear.com/9.x/avataaars-neutral/png?seed=${person.name}&scale=70&backgroundColor=F8D25C,FB6376,4ECDC4,9085D5&mouth=default,disbelief,eating,smile,tongue,twinkle`}
	alt={person.name}
/>

<style lang="scss">
	img {
		border-radius: 50%;
	}
</style>
