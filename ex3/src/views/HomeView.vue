
<template>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

    <div class="wrapper">
        <img src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png" style="width: 200px; height: 200px;margin: auto;">
      
          <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input id="email" ref="email" type="text" class="form-control"  placeholder="Enter email">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input id="password" ref="password" type="password" class="form-control"  placeholder="Password">
          </div>
          <button id="login" v-on:click="login" type="submit" class="btn btn-primary">Login</button>
          <!-- <p>Forgot <a href="#">Password?</a></p> -->
          <div class="forget-password">
              <a href="">Forget Password?</a>
          </div>

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
<script>
export default {
  name: "Login",
  data(){
    return{
      email: '',
      password: ''
    }
  },
  methods:{
    login(){
      fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "email":this.$refs.email.value, 
          "password":this.$refs.password.value
        })
      }).then(res => {
        return res.json();
      }).then((data) => {
        console.log(data);
        if(data.success == true){
          this.$router.push('/home1')
        }
      })
    }
  }
}
</script>
