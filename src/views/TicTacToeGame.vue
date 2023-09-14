<template>

<div class="container-lg           ps-3 pe-3 pt-0 pt-md-3 pt-lg-4 pb-5           ps-md-5   pe-md-5">
<div class="container-lg pb-2 pb-md-4 pb-lg-5 gx-0"> 


  <div>
    <div>
      <TicTacToe />
    </div>
  </div>




  


<h2 class="mt-5 mx-2 mb-4 mb-md-5 pb-2 pb-md-0 pt-4 pt-md-5 ">Q and A About This Game</h2>

   <div class="accordion mb-5" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Q: What is the goal of Tic Tac Toe?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>A: The main goal of Tic Tac Toe</strong>  is to get 3 of your symbols (either X's or O's) in a row - horizontally, vertically, or diagonally across the 3x3 grid. To win, you need to form a full line with your symbol before your opponent can make their own line. The first player to complete a full row of 3 X's or 3 O's wins the game. <code>.accordion-body</code>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Q: How many players can play Tic Tac Toe at once?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>A: Tic Tac Toe is specifically designed as a two-player game.</strong> The 3x3 grid board and alternating turn mechanics are optimized for just two opponents competing head-to-head. This one-on-one setup is integral to Tic Tac Toe's game flow and strategy.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Q: Can Tic Tac Toe end in a draw?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>A: Yes, it is possible</strong> for a game of Tic Tac Toe to end in a draw or tie. This occurs any time neither player successfully gets 3 X's or O's in a row by the time the entire 3x3 grid is filled up with played moves.
        <br><br>
        For a draw to happen, both players have to play defensively enough to block each other from making a winning line of 3 symbols. When all 9 squares contain either an X or O without a winner, then there are no more possible moves left to change the outcome.
      </div>
    </div>
  </div>
</div>









<h2 class="mt-5 mx-2 pt-4 pt-md-4 pt-lg-5">Continue Your Gaming Experience</h2>


    <p class="ms-1 mt-3 me-1 mb-1 pt-2      mx-sm-0            ms-lg-4 mt-lg-4 me-lg-4 mb-lg-1 pt-lg-2  pb-lg-2      ms-xl-5 mt-xl-4 me-xl-5 mb-xl-1 pt-xl-2">You just sharpened your strategic thinking here. Now take on games that test new abilities, from split-second reflexes in Reaction Timer to depending on fortune in the classic War card game. The fun never stops, so challenge your mind with these next.
    </p>






<div class="row g-0 mt-5">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card col2games bg-light p-1 p-md-2 p-lg-3 p-xl-4 border-light rounded-0">
      <h4 class="card-title mb-2 mt-4 pt-3 fw-bold">War Card Game</h4>
      <div class="card-body m-2">
        <video class="w-100 h-100 top-0 start-0 rounded" style="position: relative;" autoplay loop muted>
              <source src="../assets/cards.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>

        <p class="card-text ms-1 mt-3 me-1 mb-1 pt-2      mx-sm-0            ms-lg-4 mt-lg-4 me-lg-4 mb-lg-1 pt-lg-2        ms-xl-5 mt-xl-4 me-xl-5 mb-xl-1 pt-xl-2">Experience the excitement of the classic card game War. Test your luck and strategy.</p>



        <router-link 
                class="btn btn-outline-primary m-4 px-5 shadow-sm"
                to="/WarGame">

                <i class="bi bi-caret-right-fill me-1"></i>
                Play
              </router-link>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card col2games1 p-1 p-md-2 p-lg-3 p-xl-4 border-light rounded-0">
      <h4 class="card-title mb-2 mt-4 pt-3 fw-bold">Reaction Timer</h4>
      <div class="card-body m-2">
        <video class="w-100 h-100 top-0 start-0 rounded" style="position: relative;" autoplay loop muted>
              <source src="../assets/number.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>

        <p class="card-text ms-1 mt-3 me-1 mb-1 pt-2      mx-sm-0            ms-lg-4 mt-lg-4 me-lg-4 mb-lg-1 pt-lg-2        ms-xl-5 mt-xl-4 me-xl-5 mb-xl-1 pt-xl-2">Test your reaction time. Challenge friends and colleagues to beat your score!</p>

        
        <router-link 
                class="btn btn-outline-primary m-4 px-5 shadow-sm"
                to="/ReactionTimerGame">

                <i class="bi bi-caret-right-fill me-1"></i>
                Play
              </router-link>
      </div>
    </div>
  </div>
</div>












</div>
</div>
</template>







<script>
import TicTacToe from '@/components/TicTacToe.vue'

export default {
  name: 'App',
  components: {
    TicTacToe
  }
}
</script>



<style>
html,
body {
  height: 100%;
}
.container-fluid {
  height: 50%;
}
.col-sm-12,
.fullheight {
  height: 100%;
}
.sideBarBG {
  
  height: 100%;
}





.accordion-button {
    color: blue !important;
  }





  .col2games {
    border-radius: 0.4rem 0 0 0.4rem !important;
  }


  @media (max-width: 576px) {
  .col2games {
    border-radius:  0.4rem 0.4rem 0.4rem 0.4rem !important;
  }
}





.col2games1 {
    border-radius: 0 0.4rem 0.4rem 0 !important;
  }


  @media (max-width: 576px) {
  .col2games1 {
    border-radius: 0.4rem 0.4rem 0.4rem 0.4rem !important;
  }
}



</style>