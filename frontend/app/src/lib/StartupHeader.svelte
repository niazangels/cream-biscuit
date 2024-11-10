<script>
    import Pill from '$lib/Pill.svelte';
    import StartupImage from './StartupImage.svelte';
    const {ticket_num, organization, technology, sector} = $props()
    const image_size = 80;
    </script>
    

<div class="card">

    <div class="content">
        <div class="image">
            <img src={`https://api.dicebear.com/9.x/initials/png?seed=${organization}&backgroundColor=F8D25C,FB6376,4ECDC4,9085D5`} alt={organization} />
        </div>
        <div class="info">
            <h2>{organization}</h2>
        </div>
        <div class="pills">
            {#if sector}
            <Pill text={sector} />
            {/if}
            {#if technology}
            <Pill text={technology} />
            {/if}
        </div>
    </div>

</div>

<style lang="scss">
	.card {
        min-height: 250px;

        .content{
            display: flex;
            flex-direction: column;
            align-items: center;
            .image{
                margin-top: 20%;
                max-width: 300px;

                img{
                    border-radius: 8px;
                    border: 4px solid #fbfbfb;
                    width: var(--image-size);
                    height: var(--image-size);
                }
            }
            .info{
                text-align: center;
            }
            .pills{
                margin-top: 1rem;
            }
        }
    }
</style>
