<script>
import Live from './Live.svelte';
    import '$lib/styles/animate.min.css';
    const image_size = 80;
</script>


<div class="wrapper animate__animated animate__flipInX">
<div class="card">
	<div class="content">
		<div class="image">
			<img src="https://storage.startupmission.in/events/speakers/huddle-global-2024/EkKrTlZB26JMpMRr1L2nndEqJUBh2jJ7OfDIb9Li.jpg" width={image_size} height={image_size} alt="Event Image" />
		</div>
		<div class="info">
            <h3>Innovation in Healthcare Ecosystem</h3>
			<p>Harish Manian</p>
		</div>
	</div>
	<div class="top-right">
		<Live />
	</div>
</div>

<div class="buttons">
    <div class="btnx btn-text"> 
        <img src='/images/icons/agenda/list.png' alt="All Events Icon" />
        All events
    </div>
    <div class="btnx btn-text">
        <img src='/images/icons/agenda/check.png' alt="My Events Icon" />
        My events
    </div>
</div>
</div>

<style lang="scss">
	.card {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem;
		// margin-block: 1rem;
		// background-color: #eee;
		// background-color: ;
		background:
			linear-gradient(to right top, rgba(11, 11, 11, 0.9), rgba(74, 74, 70, 0.6)),
			url('/images/bg/beach.jpg') no-repeat center center;
        background-size: cover;
		color: #f6f6f6;
		border-radius: 8px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;

		.content {
			display: flex;
			// grid-template-columns: 1fr 2fr;
			gap: 2rem;
			align-items: center;
			margin-top: 1rem;

            .info{
                h3{
                    font-size: 1.4rem;
                    line-height: 1.2;
                    margin-bottom: .8rem;
                }
                p{
                    font-size: 1.2rem;
                }
            }

			.image img {
				border-radius: 99999px;
                // box-shadow: 0 0 3px 2px #98989869;
			}
		}

		.top-right{
			position: absolute;
			top: 1rem;
			right: 1rem;
		}

		
	}
    .buttons {
			display: flex;
			gap: 1rem;
			justify-content: space-between;
            border: 1px solid #f6f6f6;
            background-color: #f4f4f4;
            border-radius: 8px;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            padding: 1rem;
            

			.btnx {
				flex: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: .5rem; 
				padding-block: 0.5rem;
				// border-radius: 8px;

                &:not(:last-child){
                    border-right: 1px solid #c4c4c4;
                }

                img{
                    width: 16px;
                    height: 16px;
                    margin-right: 1rem;
                }
			}
		}
</style>
