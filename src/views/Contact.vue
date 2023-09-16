<template>

<div class="container-lg ps-3 pe-3 pt-3 pt-md-3 pt-lg-4 pb-2 pb-md-5           ps-md-5   pe-md-5 contactTemp">


  <div class="row justify-content-center rounded shadow gx-0 pt-5 px-0 pb-4 p-sm-5" style="background-color: rgba(255, 255, 255, 0.5); margin-bottom: 20px; margin-top: 50px;">

<div class="container-lg gx-0 pt-3 px-4 pb-4 p-sm-5 contact">
    <h2 class="mt-0 mx-2 pt-0 pt-md-0 pt-lg-0">Questions or Comments?</h2>
    <p class="ms-1 mt-3 me-1 mb-4 pt-2 pb-2     mx-sm-0            ms-lg-4 mt-lg-4 me-lg-4 mb-lg-5 pt-lg-2  pb-lg-0      ms-xl-5 mt-xl-4 me-xl-5 mb-xl-5 pt-xl-2">Use this contact form to connect, share comments, or ask questions. All messages are welcomed and appreciated.</p>




   <SignUpForm/>














</div>


</div>

</div>
</template>



<script>
import SignUpForm from '../components/SignUpForm.vue'

export default {
  components: { SignUpForm }
}
</script>

<style>
.contactTemp {
  margin-bottom: 2em;
  
}


</style>