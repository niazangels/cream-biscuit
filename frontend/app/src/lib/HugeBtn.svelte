<script>
    export let href = "/";
    export let text = "Huddle";
    export let icon;
</script>

<a href={href}>
    <div class="huge-btn">
        <img src={icon} alt="QR Code Icon" />
        <span>{text}</span>
    </div>
</a>


<style lang="scss">
    .huge-btn{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        background-color: #f3f3f3;
        border-radius: 8px;
        height: 100px;  
        width: 100%;

        img{
            width: 56px;
            height: 56px;
        }
        span{
            font-size: 1rem;
            letter-spacing: 0.1rem;
            text-transform: uppercase;
        }
    }
    a{
        text-decoration: none;
        color: #343434;
    }
</style>