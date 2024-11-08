<script>
    import Pill from '$lib/Pill.svelte';
    const {ticket_num, company_name, technology, sector} = $props()
    const image_size = 80;
    </script>
    

<div class="card">

    <div class="content">
        <div class="image">
            <img src={`https://picsum.photos/seed/${ticket_num}/${image_size}`} alt={company_name} style="--image-size: {image_size}px;" />
        </div>
        <div class="info">
            <h2>{company_name}</h2>
        </div>
        <div class="pills">
            <Pill text={sector} />
            <Pill text={technology} />
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
