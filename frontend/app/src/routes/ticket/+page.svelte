<script>
    // import Ticket1 from "$lib/Ticket1.svelte";
</script>

<!-- <Ticket1 /> -->

<div class="ticket">
    <div class="image">
        <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example" alt="qr" />
    </div>
    <div class="info">
        <h3>Niyas Mohammed</h3>
        <p>Diamond Pass</p>
    </div>
</div>

<style lang="scss">
    .ticket{
        display: flex;
        align-items: center;
        gap: 16px;
        border: 1px solid #e1e1e1;
        border-radius: 1rem;
        padding: 16px;
        margin-block: 100px;

        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        // box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

        .image{
            img{
                width: 90px;
            }
        }
    }
</style>