




<template>



  








































<nav class="navbar sticky-top navbar-expand-lg bg-body-tertiary px-lg-5 px-lg-0 shadow-sm">
  <div class="container-fluid">

    <router-link to="/" >

    <img alt="controler" class="me-5" style="width:160px;" src="./assets/logo5.png">
    </router-link>


    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul class="navbar-nav mx-5 mb-2 mb-lg-0 d-flex justify-content-center align-items-center">



        
        <li class="bgrLinks nav-item">
          <router-link :to="{ name: 'about' }" class="bgrLinks btn btn-link text-dark mx-1">About</router-link>
        </li>
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Games 
          </a>
          <ul class="dropdown-menu px-1">
              <router-link :to="{ name: 'WarGame' }" class="dropdown-item rounded">War Game</router-link>
              <li><hr class="dropdown-divider"></li>


              <router-link :to="{ name: 'ReactionTimerGame' }" class="dropdown-item rounded">Reaction Timer</router-link>




              <li><hr class="dropdown-divider"></li>
              <router-link :to="{ name: 'TicTacToeGame' }" class="dropdown-item rounded">Tic Tac Toe</router-link>          
          </ul>
        </li>
        <li class="bgrLinks nav-item">
          <router-link :to="{ name: 'contact' }" class="bgrLinks btn btn-link text-dark mx-1">Contact</router-link>
        </li>








       
      </ul>
      <div class="d-flex justify-content-center ms-auto mb-2 mb-lg-0 order-2">
        <div class="text-center">
          <a
            class="btn btn-link btn-floating btn-sm text-dark m-1" style="padding-right:0.5rem!important;padding-left:0.5rem!important;"
            href="https://en-gb.facebook.com/" rel="noopener noreferrer nofollow" target="_blank"
            role="button"
            data-mdb-ripple-color="dark"
            ><i class="bi bi-facebook" style="color: #3b5998; font-size: 1.1rem;"></i></a>

          <!-- Twitter -->
          <a
            class="btn btn-link btn-floating btn-sm text-dark m-1" style="padding-right:0.5rem!important;padding-left:0.5rem!important;"
            href="https://twitter.com/?lang=en-gb/" rel="noopener noreferrer nofollow" target="_blank"
            role="button"
            data-mdb-ripple-color="dark"
            ><i class="bi bi-twitter" style="color: #1DA1F2; font-size: 1.1rem;"></i></a>


          <!-- Instagram -->
          <a
            class="btn btn-link btn-floating btn-sm text-dark m-1" style="padding-right:0.5rem!important;padding-left:0.5rem!important;"
            href="https://www.instagram.com/" rel="noopener noreferrer nofollow" target="_blank"
            role="button"
            data-mdb-ripple-color="dark"
            ><i class="bi bi-instagram" style="color: #FD1D1D; font-size: 1.1rem;"></i></a>

          <a
            class="btn btn-link btn-floating btn-sm text-dark m-1" style="padding-right:0.5rem!important;padding-left:0.5rem!important;"
            href="https://gb.linkedin.com/" rel="noopener noreferrer nofollow" target="_blank"
            role="button"
            data-mdb-ripple-color="dark"
            ><i class="bi bi-linkedin" style="color: #0082ca; font-size: 1.1rem;"></i
          ></a>
          
        </div>
      </div>
    </div>
  </div>
</nav>






























<router-link

button class="bg-primary border-primary" to="/contact" id="hp-ctn-howItWorks" style="display: block;">
  <p style="display:flex; align-items: center;"><i class="bi bi-caret-down-square me-3 fs-3 " style="margin-left: 5px;"></i>Get in Touch</p>



</router-link>










  
  <router-view/>


  














































<footer class="bg-light text-center text-lg-start">
  <!-- Grid container -->
  <div class="container ps-4 pt-5 pb-4 pe-4">
    <!--Grid row-->
    <div class="row g-0">
      <!--Grid column-->
      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase" style="margin-bottom: 15px;">Pages</h5>
        <!--
        <ul class="bgrLinks list-unstyled mb-0">
          <li>
            <router-link to="/" class="text-dark">Home</router-link>
          
          </li>
          <li>
            <router-link :to="{ name: 'about' }" class="text-dark">About</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'contact' }" class="text-dark">Contact</router-link>
          </li>
        </ul>
        -->




        <ul class="bgrLinks list-unstyled mb-0">
          <li style="margin-bottom: 15px;">
            <router-link to="/" class="text-dark">Home</router-link>
          </li>
          <li style="margin-bottom: 15px;">
            <router-link :to="{ name: 'about' }" class="text-dark">About</router-link>
          </li>
          <li style="margin-bottom: 15px;">
            <router-link :to="{ name: 'contact' }" class="text-dark">Contact</router-link>
          </li>
        </ul>




      </div>
      <!--Grid column-->

      <!--Grid column-->
      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase" style="margin-bottom: 15px;">Games</h5>

        <ul class="bgrLinks list-unstyled">
          <li style="margin-bottom: 15px;">
            <router-link :to="{ name: 'WarGame' }" class="text-dark">War Game</router-link>
          </li>
          <li style="margin-bottom: 15px;">
            <router-link :to="{ name: 'ReactionTimerGame' }" class="text-dark">Reaction Timer</router-link>
          </li>
          <li style="margin-bottom: 15px;">

            <router-link :to="{ name: 'TicTacToeGame' }" class="text-dark">Tic Tac Toe</router-link>
          </li>
        </ul>
      </div>
      <!--Grid column-->

      <!--Grid column-->
      <!--Grid column-->
      <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 class="text-uppercase" style="margin-bottom: 15px;">GAME ZONE</h5>

        <p class="footerText">
          Check out the selection of games here that challenge different mental abilities, from classics like Tic Tac Toe that sharpen your strategy to tests of reflexes like Reaction Timer. Or try your fortune on luck-based card games like War.
        </p>
      </div>
      <!--Grid column-->
    </div>
    <!--Grid row-->
  </div>
  <!-- Grid container -->

  <!-- Copyright -->
  
  <!-- Copyright -->
</footer>


<footer class="bg-light text-center text-white" style="border-top: 1px solid var(--bs-border-color-translucent)">
  <!-- Grid container -->
  <div class="container p-0 pb-0">
    <!-- Section: Social media -->
    <section class="mb-1">
      
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://en-gb.facebook.com/" rel="noopener noreferrer nofollow" target="_blank"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="bi bi-facebook" style="color: #3b5998; font-size: 1.3rem;"></i></a>

      <!-- Twitter -->
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://twitter.com/?lang=en-gb/" rel="noopener noreferrer nofollow" target="_blank"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="bi bi-twitter" style="color: #55acee; font-size: 1.3rem;"></i
      ></a>


      <a class="btn btn-link btn-floating btn-lg text-dark m-1" href="https://www.instagram.com/" rel="noopener noreferrer nofollow" target="_blank" role="button" data-mdb-ripple-color="dark">
        <i class="bi bi-instagram" style="color: #FD1D1D; font-size: 1.3rem;"></i>
      </a>

      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://gb.linkedin.com/" rel="noopener noreferrer nofollow" target="_blank"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="bi bi-linkedin" style="color: #0082ca; font-size: 1.3rem;"></i
      ></a>
      
    </section>
    <!-- Section: Social media -->
  </div>

  <!-- Grid container -->

  <!-- Copyright -->
  

    <div class="text-center text-dark p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    © 2023 Game Zone:
    <a class="text-primary" href="https://keinystomas.github.io/Portfolio/" rel="noopener noreferrer nofollow" target="_blank">Portfolio</a>
  </div>
  
  <!-- Copyright -->
</footer>
















</template>
















<script>
import ReactionTimerGame from './views/ReactionTimerGame.vue';
import WarGame from './views/WarGame.vue';

export default {
  name: 'App',
  components: {
    ReactionTimerGame,
    WarGame,
  },
};
</script>









<!--


<script>
import Block from './components/Block.vue'
import Results from './components/Results.vue'

export default {
  name: 'App',
  components: { Block, Results },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResults: false,
      showMessage: false
    }
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
      this.showResults = false;
      this.showMessage = true;
      setTimeout(() => {
        this.showMessage = false;
      }, this.delay);
    },
    endGame(reactionTime) {
      this.score = reactionTime;
      this.isPlaying = false;
      this.showResults = true;
    }
  }
}
</script>




-->













<style>
#app {
  
  font-family: Avenir, Helvetica, Arial, sans-serif;
  letter-spacing: 0.02rem;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


.bgrLinks a {
  letter-spacing: 0.02rem;
  position: relative;
  text-decoration: none;
}

.bgrLinks a::before {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: blue;
  transition: width 0.5s ease-out;
}

.bgrLinks a:hover::before {
  width: 100%;
}




@media (max-width: 768px) {
  p {
   font-size: 14px;
 }
}



@media (max-width: 768px) {
  .bgrLinks .btn {
   font-size: 16px!important;
   margin-top: 5px;
   margin-bottom: 5px;
 }
}


@media (max-width: 667px) {
  .bgrLinks .btn {
   font-size: 16px!important;
 }
}



.accordion-button {  
   letter-spacing: 0.02rem;
   line-height: 1.6;
 }


@media (max-width: 768px) {
  .accordion-button {
   font-size: 14px;
 }
}


@media (max-width: 768px) {
  .accordion-item {
   font-size: 14px;
 }
}











* {
    margin:0;
    padding:0;
}
#hp-ctn-howItWorks img {
    vertical-align:middle;
}
#hp-ctn-howItWorks {
    top: 222px;
    padding:0px 0px 0px 0px;
    text-align: center;
    margin:0px;
    width: 160px;
    height:40px;
    z-index:15;
    border-radius: 5px 5px 0px 0px;
    -moz-transform:rotate(-90deg);
    -ms-transform:rotate(-90deg);
    -o-transform:rotate(-90deg);
    -webkit-transform:rotate(-90deg);
    transform: rotate(-90deg); 
    transform-origin: bottom right;
    position: fixed;
    right: 0px;
}
#hp-ctn-howItWorks p {
    color:#fff;
    display:inline-block;
    line-height:40px;
}


@media (max-width: 768px) {
  #hp-ctn-howItWorks {
    display: none !important;
  }
}




































.btn.btn-link.btn-floating.btn-lg.text-dark.m-1 i {
  
  transition: all 0.3s ease-in-out;
}

.btn.btn-link.btn-floating.btn-lg.text-dark.m-1:hover i {
  opacity: 0.65;
  
}




.btn.btn-link.btn-floating.btn-sm.text-dark.m-1 i {
  
  transition: all 0.3s ease-in-out;
}

.btn.btn-link.btn-floating.btn-sm.text-dark.m-1:hover i {
  opacity: 0.65;
  
}





.navbar-toggler-icon {
    
    width: 1.2em;
    height: 1.2em;
    
}



.icn {
  transform: skew(-10deg);
  margin-right: -5px;
}


.dropdown-item {
  background-color: white;
}

.dropdown-item:hover {
  background-color: rgba(var(--bs-tertiary-bg-rgb),var(--bs-bg-opacity))!important;
  
}





.gesn {
  padding: 0px;
  margin: 0px;
  font-weight: bold;
  color: var(--bs-body-color);
  font-style: italic;
}

nav a {
  
  font-weight: bold;
  color: #2c3e50;
  padding: 10px;
  border-radius: 5px;
  text-decoration: none;
}





button:hover {
  background-color: #ddd;
}


@media (max-width: 768px) {
.text-uppercase {
    margin-top: 1.75em;
}
}


@media (max-width: 576px) {
.footerText{
   margin-left: 1em;
   margin-right: 1em;
}
}
</style>
