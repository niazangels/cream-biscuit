<script>
	import NowHappening from "$lib/NowHappening.svelte";
	import EssentialsButtons from "$lib/EssentialsButtons.svelte";
	import IconizedButton from "$lib/IconizedButton.svelte";
	import HugeBtn from "$lib/HugeBtn.svelte";
	import QRCodeIcon from "$lib/icons/qrcode.svg";
    import Essentials2 from "$lib/Essentials2.svelte";

	import IconRightArrow from "$lib/icons/gradient/right-arrow.png";
    import SingleRowButton from "$lib/SingleRowButton.svelte";
    import UserIcon from "$lib/icons/user.svg";
    import IconBell from "$lib/icons/bell.svg";

</script>


<NowHappening />

<h2 class="section-header">Essentials</h2>

<EssentialsButtons />
<!-- <Essentials2 /> -->

<IconizedButton img='/images/icons/camp-b.png' text="Startups @ Huddle" label="Check out" href="/startups" />

<h2 class="section-header">People</h2>
<div class="two-col-grid">
    <HugeBtn href="/person?filter=Investors" text="Investors" icon="/images/icons/investors.png" />
    <HugeBtn href="/person?filter=Mentors" text="Mentors" icon="/images/icons/mentors.png" />
    <HugeBtn href="/person?filter=Founders" text="Founders" icon="/images/icons/founders.png" />
    <HugeBtn href="/person?filter=Organizers" text="Organizers" icon="/images/icons/organizers.png" />
</div>

<SingleRowButton text="See everyone" href="/person" kind="secondary" />

<h2 class="section-header">Things to do today</h2>
<div class="two-col-grid">
    <HugeBtn href="/huddle" text="Dinner @ Sunset" icon={QRCodeIcon} />
    <HugeBtn href="/huddle" text="Explore the Expo" icon={QRCodeIcon} />
    <HugeBtn href="/huddle" text="Investor Meetup" icon={QRCodeIcon} />
    <HugeBtn href="/huddle" text="DJ Night" icon={QRCodeIcon} />
</div>

<style lang="scss">
	


</style>