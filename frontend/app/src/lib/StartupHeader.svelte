<script>
const {ticket_num, company_name, technology, sector} = $props()
const image_size = 80;
</script>

<!-- {JSON.stringify({organization})} -->

<div class="card">
    <div class="content">
        <div class="image">
            <img src={`https://picsum.photos/seed/${ticket_num}/${image_size}`} alt="Event Image" width={image_size} height={image_size}/>
        </div>
        <div class="info">
            
            <h3>{company_name}</h3>
            <span class="pill">{sector}</span>
            <span class="pill">{technology}</span>
        </div>
    </div>

    <div class="buttons">
        <div class="btn">All events</div>
        <div class="btn">My events</div>
    </div>
</div>

<style lang="scss">

.card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    margin-block: 1rem;
    background-color: #343434;
    color: #fff;
    border-radius: 8px;
   
    .content{
        display: flex;
        // grid-template-columns: 1fr 2fr;
        gap: 2rem;
        align-items: center;
        margin-top: 1rem;
    
        .image img{    
        border-radius: 8px;
        height: 100%;
        width: 100%;
    
    }
        .info{
            .pill{
                color: #ececec;
                font-size: 1.2rem;;
                padding: .4rem .8rem;;
                border: 1px solid #ececec;
                background-color: transparent;
            }
        }
    }

    .buttons{
        display: flex;
        gap: 1rem;
        justify-content: space-between;

        .btn{
            flex: 1;
            text-align: center;
            padding-block: .5rem;
            border-radius: 8px;
        }
    }


    
}
</style>


