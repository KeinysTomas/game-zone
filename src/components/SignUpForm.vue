<template>
  <form @submit.prevent="submitForm">


    

<div class="Cform px-0 px-lg-5">
    <div class="input-group mb-4">
  <label class="visually-hidden " for="autoSizingInput">Name</label>
    <input id="name" v-model="name" type="text" required class="form-control py-2" placeholder="Username">
</div>


    

    



    <div class="input-group mb-4">
        <span class="input-group-text py-2" id="basic-addon1">@</span>
        <input id="email" v-model="email" type="email" required class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1">
    </div>


    






    

    <div class="input-group mb-2">
        <span class="input-group-text text-start py-4">Your<br>Message</span>
        <textarea id="message" v-model="message" required class="form-control" aria-label="With textarea"></textarea>
    </div>


</div>


    <button class="btn btn-primary btn-lg shadow-sm px-5 mt-5" type="submit"><i class="bi bi-send me-2 pe-1"></i>Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
    };
  },
  methods: {
    submitForm() {
      // You might want to do form validation or form submission here
      console.log(this.name, this.email, this.message);
    },
  },
};
</script>

