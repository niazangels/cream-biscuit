<script>
    export let text;
    export let href;
    export let kind = "primary";
</script>


<div class="single-row">
    <a href={href} class={kind}>{text}</a>
</div>

<style lang="scss">
    .single-row{
        display: flex;
        justify-content: center;
        margin-block: 1rem;
    }

    a{
        text-decoration: none;
        width: 100%;
        padding: .5rem 0;
        text-align: center;
        border-radius: 8px;
    }
    .primary{
        background-color: #0b8fe2;
        border: 2px solid #0b8fe2;
        color: #fff;

    }
    .secondary{
        background-color: transparent;
        border: 2px solid #0b8fe2;
        color: #0b8fe2;
    }
</style>