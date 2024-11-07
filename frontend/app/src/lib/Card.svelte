<script>
    let props = $props();
    const image = `https://picsum.photos/seed/${props.name}/300/300`;
    const image2 = `https://api.dicebear.com/9.x/rings/svg?seed=${props.organization}`
</script>

<div class="card">
    <img class="hero" src={image2} alt={props.name} />
    <div class="content">
        <h3>{props.organization}</h3>
        <div class="tags">
            <span class="tag">{props.category}</span>
            <span class="tag">{props.technology}</span>
            <span class="tag">{props.sector}</span>
        </div>
        <p>{props.company_description}</p>
        <a href={`/organizations/${props.ticket_num}`} class="btn">
            View Details
        </a>
    </div>
</div>

<style lang="scss">
    .card {
        display: grid;
        grid-template-rows: 200px 1fr;
        padding: 20px;
        border-radius: 10px;
        background-color: #fff;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
        overflow: hidden;
        // height: 400px;

        .content {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .tags {
            display: flex;
            gap: 10px;
            .tag{
                padding: 0 6px;
                border-radius: 5px;
                font-size: 12px;
                color: #222;
            background-color: #d7d7d7;
            }
        }

        img.hero {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 10px;
        }
        h3{
            padding-block: 10px;
        }
        p{
            font-size: 13px;
            color: #a5a5a5;
            line-clamp: 4;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

    }
</style>