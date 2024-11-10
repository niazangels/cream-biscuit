<script>
    import { onMount } from 'svelte';
    
    export let text;
    
    let marquee;

	function Marquee(selector, speed) {
		const parentSelector = selector;
		const clone = parentSelector.innerHTML;
		const firstElement = parentSelector.children[0];
		let i = 0;
		parentSelector.insertAdjacentHTML('beforeend', clone);
		parentSelector.insertAdjacentHTML('beforeend', clone);

		setInterval(function () {
			firstElement.style.marginLeft = `-${i}px`;
			if (i > firstElement.clientWidth) {
				i = 0;
			}
			i = i + speed;
		}, 0);
	}

    onMount(() => {
        Marquee(marquee, .1);
    });
</script>

<div class="marquee" bind:this={marquee}>
	<span>{text}</span>
</div>


<style>
    .marquee {
  overflow: hidden;
  display: flex;
  background: #222;
  color: #dadada;
  padding-block: 6px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

.marquee span{
    white-space: nowrap;
    text-transform: uppercase;
    font-size: 1.2rem;
}
</style>