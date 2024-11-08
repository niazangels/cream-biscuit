<script>
	import NowHappening from "$lib/NowHappening.svelte";
	import EssentialsButtons from "$lib/EssentialsButtons.svelte";
	import IconizedButton from "$lib/IconizedButton.svelte";
	import HugeBtn from "$lib/HugeBtn.svelte";
	import QRCodeIcon from "$lib/icons/qrcode.svg";

	import IconRightArrow from "$lib/icons/gradient/right-arrow.png";
    import SingleRowButton from "$lib/SingleRowButton.svelte";
    import UserIcon from "$lib/icons/user.svg";

</script>

<NowHappening />

<h2 class="section-header">Essentials</h2>

<EssentialsButtons />

<IconizedButton img={IconRightArrow} text="Startups @ Huddle" label="Check out" href="/startups" />

<h2 class="section-header">People</h2>
<div class="two-col-grid">
    <HugeBtn href="/huddle" text="Investors" icon={UserIcon} />
    <HugeBtn href="/huddle" text="Mentors" icon={UserIcon} />
    <HugeBtn href="/huddle" text="Founders" icon={UserIcon} />
    <HugeBtn href="/huddle" text="Organizers" icon={UserIcon} />
</div>

<SingleRowButton text="See all attendees" href="/huddle" kind="secondary" />

<h2 class="section-header">Things to do today</h2>
<div class="two-col-grid">
    <HugeBtn href="/huddle" text="Dinner @ Sunset" icon={QRCodeIcon} />
    <HugeBtn href="/huddle" text="Explore the Expo" icon={QRCodeIcon} />
    <HugeBtn href="/huddle" text="Investor Meetup" icon={QRCodeIcon} />
    <HugeBtn href="/huddle" text="DJ Night" icon={QRCodeIcon} />
</div>

<style lang="scss">
	


</style>