<template>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
  <div class="about">
    <!-- <h1>This is an about page</h1> -->
    <div class="content">
      <h1>Sign Up</h1>
      <p>Please fill in this form to create an account.</p>
      <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input id="email" ref="email" type="email" class="form-control"  aria-describedby="emailHelp" placeholder="Enter email">
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">username</label>
            <input id="username" ref="username" type="text" class="form-control"  placeholder="username">
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">first name</label>
            <input id="firstname" ref="firstname" type="text" class="form-control"  placeholder="first name">
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Last name</label>
            <input id="lastname" ref="lastname" type="text" class="form-control"  placeholder="last name">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input id="password" ref="password" type="password" class="form-control"  placeholder="Password">
          </div>
          <p>By creating an account you agree to our <a href="#">Term & Privacy</a></p>
          <button v-on:click="register();" type="submit" class="btn btn-primary">Sing Up</button>
      </form>
    </div>

  </div>
</template>

<style>
  .content{
    border: 2px solid black;
    padding: 20px;
  }

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script>
export default {
  name: "Register",
  data(){
    return{
      email: '',
      username: '',
      firstname: '',
      lastname: '',
      password: ''
    }
  },
  methods:{
    register(){
      fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "email": this.$refs.email.value,
          "username": this.$refs.username.value,
          "firstname": this.$refs.firstname.value,
          "lastname": this.$refs.lastname.value,
          "password": this.$refs.password.value
        })
      }).then(res => {
        return res.json();
      }).then((data) => {
        console.log(data);
        if(data.success == true){
          this.$router.push({name: 'login'})
        }
      })
    }
  }
}
</script>
