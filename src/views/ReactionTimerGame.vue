<template>
   <div class="container-lg           ps-3 pe-3 pt-0 pt-md-3 pt-lg-4 pb-5           ps-md-5   pe-md-5">
     <div class="container-lg pb-2 pb-md-4 pb-lg-5 gx-0">






   



   









    





    







  
  
  
  





<h2 class="mt-4 mx-2 pt-4 pt-md-5 pt-lg-5">Challenge Your Reflexes</h2>


    <p class="ms-1 mt-3 me-1 mb-0 pt-2      mx-sm-0            ms-lg-4 mt-lg-4 me-lg-4 mb-lg-1 pt-lg-2  pb-lg-0      ms-xl-5 mt-xl-4 me-xl-5 mb-xl-1 pt-xl-2">Sharpen your reflexes, compete for the best time, and see how you stack up against others in this exciting test of speed and agility. Can you beat the clock and achieve lightning-fast reactions? Play the Reaction Timer game now and find out!</p>


  


  





















<div class="row justify-content-center rounded shadow gx-0 pt-5 px-4 pb-4 p-sm-5" style="background-color: rgba(255, 255, 255, 0.5); margin-bottom: 20px; margin-top: 50px;">
  <div class="col-md-6">
    <div class="columnGameAnswer me-md-5 mb-5 mb-md-0">
      <div>

        <p class="h2 rectTime" style="font-family: Courier New, monospace; font-weight: 100; font-style: italic; padding-top:3rem;">Reaction Timer</p><br>

         <!--   Previuos "Reaction Time" Version

        <p class="h2 rectTime" style="font-family: Rockwell, serif; font-style: italic; padding-top:3rem; text-shadow: -3px 0 0 lightgray;">Reaction Timer</p><br>

        -->



        <p style="margin-top: -1.4rem; margin-bottom: 3rem;">Check your speed</p>


        

        


        <button class="btn btn-outline-primary btn-lg shadow-sm px-5" @click="start" :disabled="isPlaying">
          <i class="bi bi-caret-right-fill me-1"></i>
          {{ buttonText }}
        </button>

        <p class="previousScore" :style="{ color: numGamesPlayed > 1 ? 'black' : 'white' }">Your Best Score: <b>{{ previousScore }} </b> ms</p>
      
      </div>
    </div>
  </div>
  <div class="col-md-6 ">
    <div class="columnGameAnswer1 p-5 rounded">
      <div>
        <p v-if="showMessage" class="message pulsate">Get ready...</p>
        <Block v-if="isPlaying" :delay="delay" @end="endGame" />
        <Results v-if="showResults" :score="score" />
      </div>
      <video class="video-background" autoplay loop muted>
        <source src="../assets/tunnel.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</div>


















































































<audio controls class="mt-5 mb-4 audioControl" id="myAudio" loop>
    <source src="../assets/area12.mp3" type="audio/mp3">
    Your browser does not support the audio element.
  </audio>

  <p class="mb-5  pt-1" style="text-align:center; font-style: italic;">In this setting, you have the ability to control the Reaction Timer background music.</p>











<h2 class="mt-5 mx-2 mb-4 mb-md-5 pb-2 pb-md-0 pt-4 pt-md-5 ">Your Go-To Guide for This Game</h2>

   <div class="accordion mb-5" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Q: How does the reaction timer work?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>A: To start, the player presses the "Play" button</strong> to begin the game. After pressing play, the player then waits for the reaction button to appear on the screen. The reaction button will pop up between 2 to 7 seconds after pressing play, so the player cannot anticipate exactly when it will appear. Once the reaction button pops up, the player has to click on it as fast as possible. The game measures the player's reaction time from the moment the button appears to the moment the player clicks it, recorded in milliseconds. The faster the player can react and click the button after it pops up, the better their score will be.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Q: How many games can I play?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>A: You can play an unlimited number of games</strong>, but the best score will be stored in memory for 20 games - which should be enough to find out how quick you are. After 20 games, the memory resets and a new 20 game cycle begins, so only your best score across the most recent 20 games is retained. This allows you to keep playing endlessly but compares your current reaction time against your best in a recent set of 20 games.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Q: Are there ways to cheat the reaction timer?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>A: Yes, there is a way some players try to cheat</strong> the reaction timer. By continuously and rapidly clicking while waiting for the button to appear, a player can attempt to match one of their clicks with the exact moment the button pops up. This can allow them to achieve a very fast reaction time result on paper. However, this is not truly measuring the player's actual reaction, as they are just clicking randomly rather than waiting and reacting to the button appearance. So while clicking rapidly could give the appearance of a fast reaction time score, it defeats the purpose of the game, which is supposed to measure true reaction speed.
      </div>
    </div>
  </div>
</div>









<h2 class="mt-5 mx-2 pt-4 pt-md-4 pt-lg-5">Continue Testing Your Talents</h2>


    <p class="ms-1 mt-3 me-1 mb-1 pt-2      mx-sm-0            ms-lg-4 mt-lg-4 me-lg-4 mb-lg-1 pt-lg-2  pb-lg-2      ms-xl-5 mt-xl-4 me-xl-5 mb-xl-1 pt-xl-2">Whether your reactions were lightning fast or turtle slow, now try games that challenge different mental abilities. Sharpen your mind in the classic head-to-head challenge of Tic Tac Toe, where you'll strategize to outsmart opponents, or try your luck in the card game War where fortune determines the victors.
</p>



<!--standart col2games

<div class="row g-0 mt-5">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card col2games bg-light p-1 p-md-2 p-lg-3 p-xl-4 border-light rounded-0">
      <h4 class="card-title mb-2 mt-4 pt-3 fw-bold">War Card Game</h4>
      <div class="card-body m-2">
        <video class="w-100 h-100 top-0 start-0 rounded" style="position: relative;" autoplay loop muted>
              <source src="../assets/cards.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>

        <p class="card-text ms-1 mt-3 me-1 mb-1 pt-2      mx-sm-0            ms-lg-4 mt-lg-4 me-lg-4 mb-lg-1 pt-lg-2        ms-xl-5 mt-xl-4 me-xl-5 mb-xl-1 pt-xl-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

        <a href="#" class="btn btn-outline-primary m-4 px-5 shadow-sm"><i class="bi bi-caret-right-fill me-1"></i>Play</a>
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

        <p class="card-text ms-1 mt-3 me-1 mb-1 pt-2      mx-sm-0            ms-lg-4 mt-lg-4 me-lg-4 mb-lg-1 pt-lg-2        ms-xl-5 mt-xl-4 me-xl-5 mb-xl-1 pt-xl-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

        <a href="#" class="btn btn-outline-primary m-4 px-5 shadow-sm"><i class="bi bi-caret-right-fill me-1"></i>Play</a>
      </div>
    </div>
  </div>
</div>


-->



<div class="row gx-4 mt-5">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card bg-light p-1 p-md-2 p-lg-3 p-xl-4 border-0 rounded">
      <h4 class="card-title mb-2 mt-4 pt-3 fw-bold">Tic Tac Toe</h4>
      <div class="card-body m-2">
        <video class="w-100 h-100 top-0 start-0 rounded" style="position: relative;" autoplay loop muted>
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
  <div class="col-sm-6">
    <div class="card bg-light p-1 p-md-2 p-lg-3 p-xl-4 border-0 rounded">
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
</div>














  
  











</div>
  </div>




</template>














<script>
import Block from '../components/Block.vue'
import Results from '../components/Results.vue'

export default {
  name: 'ReactionTimerGame',
  components: {
    Block,
    Results
  },
  data() {
    return {
      isPlaying: false,
      showMessage: false,
      showResults: false,
      score: 0,
      gameFinished: false,
      previousScore: 0,
      myAudio: null,
      numGamesPlayed: 0,
      previousScores: []
    };
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
      this.showResults = false;
      this.showMessage = true;
      this.myAudio.play();
      setTimeout(() => {
        this.showMessage = false;
      }, this.delay);
    },
    endGame(reactionTime) {
      if (this.numGamesPlayed > 0) {
        this.previousScore = this.score;
      }
      this.score = reactionTime;
      this.showResults = true;
      this.isPlaying = false;
      this.gameFinished = true;
      this.numGamesPlayed++;

      this.previousScores.push(this.score);

      if (this.previousScores.length > 20) {
        this.previousScores.shift();
      }

      const bestScore = Math.min(...this.previousScores);

      this.previousScore = bestScore;
    }
  },


  mounted() {
  this.myAudio = document.querySelector('#myAudio');
  this.myAudio.volume = 0.15;

  this.myAudio.addEventListener('volumechange', () => {
    if (this.myAudio.volume > 0.15) {
      this.myAudio.volume = 0.15;
    }
  });
},


  computed: {
    buttonText() {
      return this.gameFinished ? 'Play Again' : 'Play';
    }
  }
}
</script>















<style>



@media (max-width: 576px) {
audio {
    width: 270px;
    height: 49px;
}
}




.rectTime {
    background: linear-gradient(90deg, #ff0000 5%, #00B053 15%, #1BAADA 30%);
    -webkit-background-clip: text;
    background-clip: text; 
    -webkit-text-stroke: 2px transparent;
    color: #000; 
 } 












.rectTime {
  font-size: 2.2em;
  
}

@media (max-width: 992px) {
  .rectTime {
    font-size: 1.85em;
    
  }
}

@media (max-width: 769px) {
  .rectTime {
    font-size: 1.75em;
    
  }
}

@media (max-width: 544px) {
  .rectTime {
    font-size: 1.7em;
    
  }
}

/* .rectTime1 is just for visualisation - delete later */

.rectTime1 {
  font-size: 2.1em;
  background-color: green;
}

@media (max-width: 992px) {
  .rectTime1 {
    font-size: 1.85em;
    background-color: yellow;
  }
}

@media (max-width: 769px) {
  .rectTime1 {
    font-size: 1.75em;
    background-color: red;
  }
}

@media (max-width: 544px) {
  .rectTime1 {
    font-size: 1.7em;
    background-color: blue;
  }
}






.previousScore {
  margin-top: 2rem;  /* Add some margin-bottom */
}





.warning-background {
  background-color: yellow;
  background-image: repeating-linear-gradient(45deg, yellow, yellow 25px, black 25px, black 50px);
}

.warning-text {
  color: black;
  mix-blend-mode: difference;
}

















.video-button {
  position: relative;
  overflow: hidden;
  border-radius:20px;
}

.video-button video {
  object-fit: cover;
}

.video-button .btn {
  border: 1px solid black;
  border-radius:20px;
}



.video-filter {
  filter: hue-rotate(90deg);
}





#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 0px;
}





.pulsate {
  color: red;
  font-size: 1.5rem;
  animation: pulsate 1s ease-out;
  animation-iteration-count: infinite;
}

@keyframes pulsate {
  0% {
    transform: scale(0.9);
    opacity: 0.5;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0.9);
    opacity: 0.5;
  }
}

.bgr {
  position: relative;
  background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="WhiteSmoke" class="bi bi-fire" viewBox="0 0 16 16"%3E%3Cpath d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z"/%3E%3C/svg%3E');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 1000px; /* adjust the size as needed */
}



.bgr::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255,255,255, 0.5); /* adjust the opacity as needed */
  z-index: 0;
}

.container-lg, .footr {
  position: relative;
  z-index: 1;
}

.btn[disabled] {
  opacity: 0.3;
  background-image: linear-gradient(40deg, rgb(29,155,178, 0.1), rgb(255,255,255, 0.3));
}

@media (max-width: 1024px) {
  .btn {
    font-size: 15px!important;
    padding-right: 2rem!important;
    padding-left: 2rem!important;
  }
}

@media (max-width: 768px) {
  .btn {
    font-size: 14px!important;
    padding-right: 1.95rem!important;
    padding-left:  1.95rem!important;
  }
}

@media (max-width: 544px) {
  .btn {
    font-size: 12px!important;
    padding-right: 4px!important;
    padding-left: 4px!important;
    padding-right: 1.85rem!important;
    padding-left: 1.85rem!important;
  }
}

.columnGameAnswer {
   height: 400px;
   display: flex;
   justify-content: center;
   
   align-items: center;
}



















.columnGameAnswer1 {
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.video-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: invert(100%) grayscale(100%);
  z-index: -1;
  border-radius: 7px;
}




















@media (max-width: 1024px) {
  .columnGameAnswer {
   height: 280px;
 }
}

@media (max-width: 1024px) {
  .columnGameAnswer1 {
   height: 280px;
 }
}

@media (max-width: 768px) {
  .columnGameAnswer {
   height: 250px;
 }
}

@media (max-width: 768px) {
  .columnGameAnswer1 {
   height: 250px;
 }
}

@media (max-width: 600px) {
  .columnGameAnswer {
   height: 230px;
 }
}

@media (max-width: 600px) {
  .columnGameAnswer1 {
   height: 230px;
 }
}




/* standart col2games css

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

 */

</style>