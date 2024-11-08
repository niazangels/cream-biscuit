<script>

</script>

<div class="card">
    <div class="content">
        <div class="image">
            <img src="https://picsum.photos/seed/dof/80" alt="Event Image" />
        </div>
        <div class="info">
            <h5>
                Now Happening
            </h5>
            <h3>Event Name</h3>
            <p>Event Description</p>
            <p>Event Date</p>
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


