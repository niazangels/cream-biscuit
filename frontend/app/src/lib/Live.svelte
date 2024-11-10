<script>
    import '$lib/styles/animate.min.css'
</script>

<div class="live ">
   Live
</div>

<style lang="scss">
    .live {
        background-color: #f6f6f6d8;
        // color: #343434;
        // background-color: #0b8fe2;
        color: #222;
        // border: 1px solid #fff;
        border-radius: 999px;
    display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.25rem 0.75rem;
        font-size: 1.2rem;

        animation: pulse; /* referring directly to the animation's @keyframe declaration */
        animation-duration: 3s; /* don't forget to set a duration! */
        // animation-delay: .8s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-out;

        
        &::before {
            content: '';
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: hsl(344, 84%, 55%);
            // animation: pulse 2s infinite;
        }
    }

    @keyframes pulse {
        0% {
            opacity: 1;
            transform: scale(1);
        }
        50% {
            opacity: 0.5;
            transform: scale(1.1);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }
</style>