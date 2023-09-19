<template>











  <div id="app" class="row grid-container justify-content-center rounded shadow gx-0 ps-4 pe-4 pt-4 pt-md-5 pt-lg-5 pb-5           ps-md-5   pe-md-5" style="background-color: rgba(255, 255, 255, 0.5); margin-bottom: 20px; margin-top: 60px;">

  <div class="card text-center col-lg-4 col-12">
    <div class="card-body">
      <div class="grid-item-cards">
        <div class="card-container">
          <div class="card1" :class="{ flipped: cardOne.flipped }">
            <div class="front">
              <img :src="cardOne.image" :alt="cardOne.code" v-if="cardOne.code" />
            </div>
            <div class="back"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-footer text-body-secondary" style="font-family: 'Brush Script MT', cursive !important; font-size: 22px;">
      Your Cards
    </div>
  </div>

  <div class="col-lg-4 col-12">
    <div class="grid-item my-5" style="background-color: rgb(255,255,255,0.8);">
      <div class="gameResults">
        


        <h1 class="mb-3" style="font-family: 'Brush Script MT', cursive !important; font-size: 2.6rem;">War Card Game</h1>

        <p class="m-3">{{ gameText }}</p>
        <p class="m-3"><b> {{ remainingCards }} </b> cards left</p>
        <div v-if="gameOver">
          <table style="margin-left: auto; margin-right: auto;  margin-bottom: 10px;">
            <tr>
              <td>Opponent's score:</td>
              <td><b>{{ playerTwoScore }}</b></td>
            </tr>
            <tr>
              <td style="text-align: right;">Your score:</td>
              <td><b>{{ playerOneScore }}</b></td>
            </tr>
           </table>
          <p v-if="gamePlayed"><b> {{ displayWinner() }} </b></p> <!-- Add v-if directive to displayWinner() element -->
          <button class="btn btn-outline-primary btn-lg shadow-sm px-5 mt-2" @click="restartGameWithSound" v-if="gameOver">Play War</button>
          <video src="../assets/gameOver.mp4" type="video/mp4" autoplay loop muted playsinline v-if="showVideo" style="filter: invert(1);"></video>
        </div>
        <div v-else>
          <div>
           <button class="btn btn-outline-primary btn-lg shadow-sm px-5 mb-4 mt-3" @click="getCardsWithSound" :disabled="isDrawingCards">Draw Cards</button>
           <table style="margin-left: auto; margin-right: auto; margin-top: 7px;">
            <tr>
              <td>Opponent's score:</td>
              <td><b>{{ playerTwoScore }}</b></td>
            </tr>
            <tr>
              <td style="text-align: right;">Your score:</td>
              <td><b>{{ playerOneScore }}</b></td>
            </tr>
           </table>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="card text-center col-lg-4 col-12">
    <div class="card-body">
      <div class="grid-item-cards">
        <div class="card-container">
          <div class="card1" :class="{ flipped: cardTwo.flipped }">
            <div class="front">
              <img :src="cardTwo.image" :alt="cardTwo.code" v-if="cardTwo.code" />
            </div>
            <div class="back"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-footer text-body-secondary" style="font-family: 'Brush Script MT', cursive !important; font-size: 22px;">
      Opponent's Cards
    </div>
  </div>
</div>























































































































































































































































































































































































































































































</template>

<script>
import { ref, computed } from 'vue';
import axios from 'axios';
import pageFlipSound from "@/assets/page-flip.mp3";

function translateCards(value) {
  switch (value) {
    case "JACK":
      value = "11";
      break;
    case "QUEEN":
      value = "12";
      break;
    case "KING":
      value = "13";
      break;
    case "ACE":
      value = "14";
      break;
    default:
      break;
  }
  return value;
}

export default {
  name: 'App',
  setup() {
    let gameOver = ref(true),
      cardOne = ref({ flipped: false }),
      cardTwo = ref({ flipped: false }),
      deckID = ref(null),
      playerOneScore = ref(0),
      playerTwoScore = ref(0),
      isDrawingCards = ref(false),
      remainingCards = ref(0),
      showVideo = ref(false),
      gamePlayed = ref(false); // Add gamePlayed property and set initial value to false

    const flipSound = new Audio(pageFlipSound);

    async function getDeck() {
      deckID.value = null;
      gameOver.value = true;
      isDrawingCards.value = false;
      const { data } = await axios.get(
        "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
      );
      deckID.value = data.deck_id;
      gameOver.value = false;
      await getCards();
    }

    async function getCards() {
      if (deckID.value == null) {
        return;
      }
      isDrawingCards.value = true;

      // Flip over the old cards
      cardOne.value.flipped = true;
      cardTwo.value.flipped = true;
      await new Promise((resolve) => setTimeout(resolve, 300));

      const { data } = await axios.get(
        "https://deckofcardsapi.com/api/deck/" + deckID.value + "/draw/?count=2"
      );
      remainingCards.value = data.remaining;
      const { cards } = data;

      // Display the new cards
      
        cardOne.value = {
        ...cards[0],  
        flipped: false,
        image: cards[0].image 
        }

        cardTwo.value = {
        ...cards[1],   
        flipped: false,
        image: cards[1].image
        }

      const valueOne = parseInt(translateCards(cardOne.value.value));
      const valueTwo = parseInt(translateCards(cardTwo.value.value));
      if (valueOne > valueTwo) {
        playerOneScore.value += 1;
      } else if (valueOne < valueTwo) {
        playerTwoScore.value += 1;
      }

      isDrawingCards.value = false;

      if (remainingCards.value === 0) {
        gameOver.value = true;
        showVideo.value = true;
        gamePlayed.value = true; // Set gamePlayed to true when there are no remaining cards
      }
    }

    async function getCardsWithSound() {
      getCards();
      flipSound.play();
    }

    function restartGameWithSound() {
      restartGame();
      flipSound.play();
    }

    function restartGame() {
      gameOver.value = true;
      playerOneScore.value = 0;
      playerTwoScore.value = 0;
      deckID.value = null;
      remainingCards.value = 50;
      showVideo.value = false;
      gamePlayed.value = false; // Reset gamePlayed to false when restarting the game
      getDeck();
    }

    const gameText = computed(() => {
      if (gameOver.value && deckID.value !== null) {
        return "The game is over!";
      } else {
        return "Game Results";
      }
    });

    function displayWinner() {
      if (playerOneScore.value > playerTwoScore.value) {
        return "You Win!";
      } else if (playerOneScore.value < playerTwoScore.value) {
        return "You Lose!";
      } else {
        return "It's a tie!";
      }
    }

    return{
      gameOver,
      cardOne,
      cardTwo,
      deckID,
      playerOneScore,
      playerTwoScore,
      isDrawingCards,
      remainingCards,
      showVideo,
      gamePlayed, // Add gamePlayed to return object
      getDeck,
      getCardsWithSound,
      restartGameWithSound,
      gameText,
      displayWinner, // Add displayWinner to return object
    };
  },
};

</script>  

<style>


.grid-item {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}


.grid-item video {
  position: absolute;
  height: 100%; 
  top: 0;
  left: 0;
  width: 100%; 
  object-fit: cover;
  z-index: -1;
}

.grid-item {
  text-align: center;
}

.card1 {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform .7s;
  border: none; 
}

.card1.flipped {
  transform: rotateY(180deg);
}

.card1 .front,
.card1 .back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden; 
}

.card1 .front {
  transform: rotateY(0deg);
}

.card1 .back {
  transform: rotateY(180deg);
  background-image: url("../assets/cardRESISED314.png");
  background-size: contain;
  background-repeat: no-repeat;
  filter: hue-rotate(190deg);
}

img {
  max-width: 100%;
  max-height: 100%;
}

button:disabled {
  opacity: 0.5;
  cursor: default;
}

.grid-item-cards {
  padding-top: 10px;
  
  height: 334px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-container {
  width: 100%;
  height: 100%;
  perspective: 220px;
  border: none;
}

.war .btn {
  font-size: 18px!important;
  padding-right: 1.75rem!important;
  padding-left: 1.75rem!important;
}


td {
 padding: 4px;
}










.war1 {
  position: relative;
  background-size: cover;
}

.war1::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: -1;
}

.content {
  position: relative;
  z-index: 1;
}
</style>