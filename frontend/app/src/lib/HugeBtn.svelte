<script>
    export let href = "/";
    export let text = "Huddle";
    export let icon;
</script>

<a href={href}>
    <div class="huge-btn">
        <img src={icon} alt="QR Code Icon" />
        {text}
    </div>
</a>


<style lang="scss">
    .huge-btn{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        background-color: #eee;
        // background: #FAF6ED;i
        border-radius: 8px;
        height: 100px;  
        width: 100%;

        img{
            width: 24px;
            height: 24px;
        }
    }
    a{
        text-decoration: none;
        color: #343434;
    }
</style>