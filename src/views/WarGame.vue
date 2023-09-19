<template>
<div class="container-lg           ps-3 pe-3 pt-0 pt-md-3 pt-lg-4 pb-5           ps-md-5   pe-md-5">
  <div class="container-lg pb-2 pb-md-4 pb-lg-5 gx-0">
  <War />








<h2 class="mt-5 mx-2 mb-4 mb-md-5 pb-2 pb-md-0 pt-4 pt-md-5 ">FAQ About This Game</h2>

   <div class="accordion mb-5" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Q: How does someone win War card game?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>A: The objective of War is to win more points</strong> than your opponent when all the cards have been played. The player who flips the higher ranking card wins and scores 1 point. Since the shuffle and deal is random, getting more winning flips ultimately comes down to the luck of the draw. The player with the most points at the end once all cards have been played wins the War game. For more detailed rules and variations, check out the <a class="text-danger" href="https://en.wikipedia.org/wiki/War_(card_game)" rel="noopener noreferrer nofollow" target="_blank">War card game page on Wikipedia</a>, which has additional information.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Q: What happens when the flipped cards are equal rank? Or both players have equal points at the end?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>A: If the cards have the same rank</strong>, it's a tie and neither player gets a point.<br><br>

        <strong>A: If both players finish the game with an equal number of points</strong>, the result is a tie. Neither player wins outright, as no one scored more points than their opponent. The game ends locked even with both having the same points.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Q: Does the computer cheat in any way?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>A: No, the computer deals the cards fairly and randomly.</strong> It does not manipulate or cheat the dealing or flip sequencing to favor one player. The winner is based solely on the luck of the card deals.
      </div>
    </div>
  </div>
</div>









<h2 class="mt-5 mx-2 pt-3 pt-md-4 pt-lg-5">Check Out Other Games</h2>


    <p class="ms-1 mt-3 me-1 mb-1 pt-2      mx-sm-0            ms-lg-4 mt-lg-4 me-lg-4 mb-lg-1 pt-lg-2  pb-lg-2      ms-xl-5 mt-xl-4 me-xl-5 mb-xl-1 pt-xl-2">You played one game. Don't stop at just cards! Try more games that challenge your abilities in different ways, from reflexes to critical thinking. The possibilities for fun and skill-testing are endless here,  so check out what's next!</p>





<div class="row g-0 mt-5">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card col2gamesW p-1 p-md-2 p-lg-3 p-xl-4 border-light rounded-0" style="border-color: rgba(206, 212, 218, 0.8)!important">
      <h4 class="card-title mb-2 mt-4 pt-3 fw-bold">Reaction Timer</h4>
      <div class="card-body m-2">
        <video class="w-100 h-100 top-0 start-0 rounded" style="position: relative;" autoplay loop muted playsinline>
              <source src="../assets/number.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>

        <p class="card-text ms-1 mt-3 me-1 mb-1 pt-2      mx-sm-0            ms-lg-4 mt-lg-4 me-lg-4 mb-lg-1 pt-lg-2        ms-xl-5 mt-xl-4 me-xl-5 mb-xl-1 pt-xl-2">Test your reaction time. Challenge friends and peers to beat your best score!</p>
        


        <router-link 
                class="btn btn-outline-primary m-4 px-5 shadow-sm"
                to="/ReactionTimerGame">

                <i class="bi bi-caret-right-fill me-1"></i>
                Play
              </router-link>








      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card col2games1W bg-light p-1 p-md-2 p-lg-3 p-xl-4 border-light rounded-0">
      <h4 class="card-title mb-2 mt-4 pt-3 fw-bold">Tic Tac Toe</h4>
      <div class="card-body m-2">
        <video class="w-100 h-100 top-0 start-0 rounded" style="position: relative;" autoplay loop muted playsinline>
              <source src="../assets/TicTacToe.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>

        <p class="card-text ms-1 mt-3 me-1 mb-1 pt-2      mx-sm-0            ms-lg-4 mt-lg-4 me-lg-4 mb-lg-1 pt-lg-2        ms-xl-5 mt-xl-4 me-xl-5 mb-xl-1 pt-xl-2">Play the timeless game of Tic Tac Toe. Outsmart your opponents and claim victory.</p>



        <router-link 
                class="btn btn-outline-primary m-4 px-5 shadow-sm"
                to="/TicTacToeGame">

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
import War from '@/components/War.vue';

export default {
  name: 'WarGame',
  components: {
    War,
  },
};
</script>



<style>
.outerCLMN {
    border-radius: 0.4rem 0 0 0.4rem;
  }


  @media (max-width: 768px) {
  .outerCLMN {
    border-radius:  0.4rem 0.4rem 0rem 0rem;
  }
}





.outerCLMN1 {
    border-radius: 0 0.4rem 0.4rem 0;
  }


  @media (max-width: 768px) {
  .outerCLMN1 {
    border-radius: 0rem 0rem 0.4rem 0.4rem;
  }
}


.col2gamesW {
    border-radius: 0.4rem 0 0 0.4rem !important;
  }


  @media (max-width: 576px) {
  .col2gamesW {
    border-radius: 0.4rem 0.4rem 0.4rem 0.4rem !important;
  }
}



.col2games1W {
    border-radius: 0 0.4rem 0.4rem 0 !important;
  }


  @media (max-width: 576px) {
  .col2games1W {
    border-radius: 0.4rem 0.4rem 0.4rem 0.4rem !important;
  }
}


</style>