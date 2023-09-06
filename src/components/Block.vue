<template>
  <div class="block" v-if="showBlock" @click="stopTimer">
    <div class="stripes">
      <p class="warning-text m-1">CLICK<br> ME</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['delay'],
  data() {
    return {
      showBlock: false,
      timer: null,
      reactionTime: 0
    }
  },
  mounted() {
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer();
    }, this.delay);
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTime += 10;
      }, 10);
    },
    stopTimer() {
      clearInterval(this.timer);
      this.$emit('end', this.reactionTime);
    }
  }
}
</script>

<style>
.block {
  position: relative;
  padding: 1em;
  height: 160px;
  width: 240px;
  border-radius: 10px;
  margin: auto;
}

.stripes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: yellow;
  background-image: repeating-linear-gradient(135deg, yellow, yellow 158px, black 158px, black 316px);
  display: flex;
  opacity: 0.8;
  justify-content: center;
  align-items: center;
}

.warning-text {
  position: relative;
  z-index: 1;
  letter-spacing: 0.2rem;
  line-height: 1.05;
  font-size: 32px;
  font-weight: bolder;
  color: black;
  text-align: center;
}

.stripes .warning-text {
  mix-blend-mode: difference;
  color: yellow;
}
</style>