<script setup>
// import TheWelcome from '../components/TheWelcome.vue'

</script>

<template>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

    <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vuetify@3.1.11/dist/vuetify.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vuetify@3.1.11/dist/vuetify.min.js">
    <div class="d-flex align-center justify-center" style="height: 100vh">
        <v-sheet width="400" class="mx-auto">
            <v-form fast-fail @submit.prevent="login">
                <v-text-field v-model="username" label="User Name"></v-text-field>

                <v-text-field v-model="password" label="password"></v-text-field>
                <a href="#" class="text-body-2 font-weight-regular">Forgot Password?</a>

                <v-btn type="submit" color="primary" block class="mt-2">Sign in</v-btn>

            </v-form>
            <div class="mt-2">
                <p class="text-body-2">Don't have an account? <a href="#">Sign Up</a></p>
            </div>
        </v-sheet>
    </div> -->

    <div class="wrapper">
        <img src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png" style="width: 200px; height: 200px;margin: auto;">
      <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Username</label>
            <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
          <p>Forgot <a href="#">Password?</a></p>
    </form>
          


    </div>
</template>
<style scoped>
  .wrapper{
    height: auto;
    padding: 20px;
    border:  2px solid black;
  }
  img{
    display: flex;
    justify-content: center;
  }


</style>
