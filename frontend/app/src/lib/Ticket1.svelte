<div class="ticketContainer">
    <div class="ticket">
      <div class="ticketTitle">Your Ticket</div>
      <hr>
      <div class="ticketDetail">
          <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example" alt="qr" />
          <div>Niyas Mohammed</div>
        <!-- <div>Studio:&nbsp16 5</div>
        <div>Time:&emsp; 19:20</div> -->
      </div>
      <div class="ticketRip">
        <div class="circleLeft"></div>
        <div class="ripLine"></div>
        <div class="circleRight"></div>
      </div>
      <div class="ticketSubDetail">
        <div class="code">Diamond Pass</div>
        <div class="date"> Jan 14<sup>th</sup> 2023</div>
      </div>
    </div>
  </div>

  <style lang="scss">

    :root {
        --bg-color: #B7B5E4;
        background-color: var(--bg-color);
    }

    /* Main Ticket Style */
.ticketContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.ticket{
    animation: bouncingCard 3s ease-out infinite alternate;
    background-color: white;
    color: darkslategray;
    width: 120px;
}


/* Ticket Content */
.ticketTitle{
    font-size: 1.5rem;
    font-weight: 700;
    padding: 12px 16px 4px;
    text-align: center;
}
hr{
    // width: 90%;
    border: 1px solid #cecece;
}
.ticketDetail{
    font-size: 1.1rem;
    font-weight: 500;
    padding: 16px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img{
        width: 100px;
    }
}
.ticketSubDetail{
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    padding: 12px 16px;
}
.ticketSubDetail .code{
    margin-right: 24px;
}

/* Ticket Ripper */
.ticketRip{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.circleLeft{
    width: 12px;
    height: 24px;
    background-color: var(--bg-color);
    border-radius: 0 12px 12px 0;
}
.ripLine{
    width: 100%;
    border-top: 3px solid var(--bg-color);
    border-top-style: dashed ;
}
.circleRight{
    width: 12px;
    height: 24px;
    background-color: var(--bg-color);
    border-radius: 12px 0 0 12px;
}

  </style>