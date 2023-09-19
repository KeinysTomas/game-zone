<template>
<div>
    <div :class="alertClass" role="alert">
      <h5 :class="headingClass">{{ heading }}</h5>
      <p class="rank mb-0"><i :class="iconClass"></i> <br>{{ rank }}</p>
      <hr>
      <p>Reaction time is: <b>{{ score }}</b> ms</p>
      <audio :src="audioFile" autoplay></audio>
    </div>
  </div>
</template>

<script>
export default {
   props: ['score'],
   data () {
    return {
     rank: null,
     iconClass: null,
     alertClass: null,
     heading: null,
     headingClass: null,
     audioFile: null
    }
   },
   mounted() {
  if (this.score < 300) {
    this.rank = 'Ninja Fingers';
    this.iconClass = 'bi bi-emoji-laughing text-success fs-4';
    this.alertClass = 'alert alert-success m-1 pt-4 pb-1';
    this.heading = 'Amazing!';
    this.headingClass = 'alert-heading text-success';
    this.audioFile = require('../assets/did-you-see-that.mp3')
  } else if (this.score < 350) {
    this.rank = 'Faster Reflexes';
    this.iconClass = 'bi bi-emoji-smile text-primary fs-4';
    this.alertClass = 'alert alert-primary m-1 pt-4 pb-1';
    this.heading = 'Well done!';
    this.headingClass = 'alert-heading text-primary';
    this.audioFile = require('../assets/short-crowd-cheer.mp3')
  } else if (this.score < 400) {
    this.rank = 'Quick Reactions';
    this.iconClass = 'bi bi-emoji-smile text-info fs-4';
    this.alertClass = 'alert alert-info m-1 pt-4 pb-1';
    this.heading = 'Good job!';
    this.headingClass = 'alert-heading text-info';
    this.audioFile = require('../assets/yay.mp3')
  } else if (this.score < 450) {
    this.rank = 'Average Reflexes';
    this.iconClass = 'bi bi-emoji-neutral text-warning fs-4';
    this.alertClass = 'alert alert-warning m-1 pt-4 pb-1';
    this.heading = "That's OK!";
    this.headingClass = 'alert-heading text-warning';
    this.audioFile = require('../assets/alright-jingles.mp3')
  } else if (this.score < 500) {
    this.rank = 'Slow Responses';
    this.iconClass = 'bi bi-emoji-frown text-danger fs-4';
    this.alertClass = 'alert alert-danger m-1 pt-4 pb-1';
    this.heading = 'Oops!';
    this.headingClass = 'alert-heading text-danger';
     this.audioFile = require('../assets/ooh.mp3')
    } else if (this.score < 600) {
    this.rank = 'Slow Reactions';
    this.iconClass = 'bi bi-emoji-frown text-dark fs-4';
    this.alertClass = 'alert alert-light m-1 pt-4 pb-1';
    this.heading = 'Oops!';
    this.headingClass = 'alert-heading text-dark';
    this.audioFile = require('../assets/dramatic-moment-voice.mp3')
  } else {
    this.rank = 'Snail Fingers';
    this.iconClass = 'bi bi-emoji-dizzy text-dark fs-4';
    this.alertClass = 'alert alert-dark m-1 pt-4 pb-1';
    this.heading = 'Too slow!';
    this.headingClass = 'alert-heading text-dark';
    this.audioFile = require('../assets/funniest-thing.mp3')
  }
 }
}
</script>

<style>
.rank {
    width: 200px;   
    font-style: italic;  
    border-radius: 10px;
    margin-right: auto;
    margin-left: auto;    
}
</style>