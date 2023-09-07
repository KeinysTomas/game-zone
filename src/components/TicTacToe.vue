<template>
<div class="row justify-content-center rounded shadow gx-0 p-4 p-sm-5" style="background-color: rgba(255, 255, 255, 0.5); margin-bottom: 20px; margin-top: 60px;">
  <div class="col-md-4 outerCLMN" style="background-image: linear-gradient( 140deg,  rgba(228,247,255,1) 21.9%, rgba(255,216,194,1) 92.2% );">
    <div class="TicTacToecolumn ">

          <div>
           <p style="margin-bottom: 0.5rem;">Welcome to</p>
           
           <p class="h2 TicTacToeh2" style="font-family: 'Bangers', cursive;">Tic Tac Toe</p>
           <p style="font-style: italic;">{{ handleMessage() }}</p>
           <p class="instructionsGo">{{ originalText }}</p>

           
           <button class="btn btn-outline-primary btn-md shadow-sm mt-2" 
                style="padding-left: 2.2em; padding-right: 2.2em; opacity: 0.3; pointer-events: none;" 
                v-show="true"
                :style="{opacity: gameOver !== '' ? '1' : '0.3', pointerEvents: gameOver !== '' ? 'auto' : 'none'}"
                @click="handleReset()">
          Reset?
        </button>
          </div>
      
    </div>
  </div>


  <div class="col-md-8 bg-light outerCLMN1">
    <div class="TicTacToecolumn1 p-5 rounded">


          <div class="tile-container">
           <div v-for="(value, key) in tics" :key="key" @click="handleClick(key)" class="tiles">
            <img v-if="value === 'One'" src="../assets/X.png" alt="X" class="fade-in shine" style="width: 5.5vw; height: 5.5vw; transform: skew(-5deg);" />
            <img v-else-if="value === 'Two'" src="../assets/O.png" alt="O"  class="fade-in shine" style="width: 5.5vw; height: 5.5vw; transform: skew(-5deg);" />
           </div>
          </div>
       


    </div>
  </div>
</div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const tics = ref({
      aA: '',
      aB: '',
      aC: '',
      bA: '',
      bB: '',
      bC: '',
      cA: '',
      cB: '',
      cC: '',
    })

    const player = ref('One')
    const gameOver = ref('')
    const originalText = ref('Click on empty square')

    const handleReset = () => {
      tics.value = {
        aA: '',
        aB: '',
        aC: '',
        bA: '',
        bB: '',
        bC: '',
        cA: '',
        cB: '',
        cC: '',
      }
      player.value = 'One'
      gameOver.value = ''
      originalText.value = 'Click on empty square'
    }

    const checkStatus = () => {
      const checkAllEmpties = Object.values(tics.value).filter(entry => entry === '')
      if (checkAllEmpties.length === 0) gameOver.value = 'No Winner'

      if (tics.value.aA && tics.value.aA === tics.value.aB && tics.value.aA === tics.value.aC) gameOver.value = player.value
      if (tics.value.bA && tics.value.bA === tics.value.bB && tics.value.bA === tics.value.bC) gameOver.value = player.value
      if (tics.value.cA && tics.value.cA === tics.value.cB && tics.value.cA === tics.value.cC) gameOver.value = player.value
      if (tics.value.aA && tics.value.aA === tics.value.bA && tics.value.aA === tics.value.cA) gameOver.value = player.value
      if (tics.value.aB && tics.value.aB === tics.value.bB && tics.value.aB === tics.value.cB) gameOver.value = player.value
      if (tics.value.aC && tics.value.aC === tics.value.bC && tics.value.aC === tics.value.cC) gameOver.value = player.value
      if (tics.value.aA && tics.value.aA === tics.value.bB && tics.value.aA === tics.value.cC) gameOver.value = player.value
      if (tics.value.cA && tics.value.cA === tics.value.bB && tics.value.cA === tics.value.aC) gameOver.value = player.value
      if (gameOver.value) {
    originalText.value = 'Game over'
      }
    }

    const handleClick = (key) => {
      if (gameOver.value) return
      if (tics.value[key] !== '') return
      tics.value[key] = player.value
      checkStatus()
      if (gameOver.value) return
      player.value = player.value === 'One' ? 'Two' : 'One'
    }

    const handleMessage = () => {
      if (gameOver.value === 'No Winner') return "All tics are tacked, but no winner!"
      if (gameOver.value === 'One' || gameOver.value === 'Two') return `Player ${player.value} wins!`
      return `It is player ${player.value === 'One' ? 'X' : 'O'}'s turn.'`
    }

    return {
      tics,
      player,
      gameOver,
      handleReset,
      handleClick,
      handleMessage,
      originalText
    }
  },
}
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


























.TicTacToeh2 {
    margin-top: 0.25em;
    margin-bottom: 1em;
    margin-left: 1em;
    margin-right: 1em;
}

@media (max-width: 768px) {
  .TicTacToeh2 {
    margin-top: 0em;
    margin-bottom: 0.5em;
}
}




.TicTacToecolumn {
  height: 40vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.TicTacToecolumn1 {
  height: 40vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}


@media (max-width: 1024px) {
  .TicTacToecolumn {
   height: 50vw;
 }
}

@media (max-width: 1024px) {
  .TicTacToecolumn1 {
   height: 50vw;
 }
}


@media (max-width: 768px) {
  .TicTacToecolumn {
   height: 45vw;
 }
}

@media (max-width: 768px) {
  .TicTacToecolumn1 {
   height: 50vw;
 }
}



@media (max-width: 600px) {
  .TicTacToecolumn {
   height: 65vw;
 }
}

@media (max-width: 600px) {
  .TicTacToecolumn1 {
   height: 55vw;
 }
}



.instructionsGo {
  margin: 1em;
}



.tile-container{
  margin: auto;
  display: grid;
  grid-template-columns: auto auto auto;
  padding-top: 2px;
  padding-right: 2px;
  margin: 2em;
  border-right: 0.8vw solid lightgray;
  border-top: 0.8vw solid lightgray;
  border-radius: 0.8vw;
}
.tiles{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10vw;
  height: 10vw;
  background-color: #fff;
  color: #242424;
  border-left: 0.8vw solid lightgray;
  border-bottom: 0.8vw solid lightgray;
  border-radius: 0.8vw;
  margin: 2px;
}




.fade-in {
  opacity: 0.6;
  transform: scale(0.8);
  animation: fade-in-animation 0.5s ease-in-out forwards;
}

@keyframes fade-in-animation {
  0% {
    opacity: 0.6;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>