<script>
    import TicketIcon from "$lib/icons/Ticket.svg";
    import QRCodeIcon from "$lib/icons/qrcode.svg";
</script>

<div class="essentials-buttons">
    <a href="/ticket" class="btn"> <img src={TicketIcon} alt="Ticket Icon" /> My Ticket</a>
    <a href="/" class="btn"> <img src={QRCodeIcon} alt="QR Scanner Icon" /> QR Scanner</a>
</div>

<style lang="scss">
    .essentials-buttons{
        display: flex;
        gap: 1rem;
        justify-content: space-between;

        .btn{
            flex: 1;
            text-align: center;
            padding-block: 1.4rem;
            border-radius: 8px;
            background-color: #eee;
            color: #343434;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: .5rem;

            &:hover{
                background-color: #ccc;
            }

            img{
                width: 2rem;
            }
            
        }
    }
</style>