<script>

</script>

<div class="essentials-buttons">
    <div class="esb ticket">
        <div class="image">
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example" alt="qr" />
        </div>
        <div class="info">
            <h3>Niyas Mohammed</h3>
            <p>Diamond pass</p>
        </div>
    </div>


</div>

<style lang="scss">
    .essentials-buttons{
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
        // justify-content: space-between;

        .esb{
            border: 1px solid #e1e1e1;
            border-radius: 1rem;
            padding: 16px;
        }

        .ticket{
            display: grid;
            grid-template-columns: 80px 1fr;
            gap: 1rem;

            .info{
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }
            .image{
                img{
                    height: 80px;
                    width: 80px;
                }
            }
        }
    }


</style>