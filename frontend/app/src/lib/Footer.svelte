<script>
    import HomeIcon from "$lib/icons/home.svg";
    import MessagesIcon from "$lib/icons/chat.svg";
    import SaveIcon from "$lib/icons/save.svg";
    import NotificationsIcon from "$lib/icons/bell.svg";
    import UserIcon from "$lib/icons/user.svg";
</script>


<!-- Damage control: So that the footer does not obstruct the last part of each page-->
<div class="powered-by">
	Powered by Neuralcraft
</div>
<!-- End damage conrol -->

<div class="footer">
	<a href="/">
		<img src={HomeIcon} alt="Home" />
	</a>
	<a href="/messages">
		<img src={MessagesIcon} alt="Messages" />
	</a>
	<img src={SaveIcon} alt="Save" />
	<img src={NotificationsIcon} alt="Notifications" />
	<img src={UserIcon} alt="User" />
</div>

<style>
	.powered-by {
		text-align: center;
		font-size: 12px;
		color: #8f8f8f;
		padding-block: 2rem 8rem;
		background-color: #f5f6f7;

	}

	.footer {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 60px;
		background-color: rgba(255, 255, 255);
        border-top: 1px solid #e5e5e5;
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;

        img {
            width: 24px;
            height: 24px;
            opacity: 0.5;
        }
	}
</style>
