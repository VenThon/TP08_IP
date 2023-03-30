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
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">username</label>
            <input type="text" class="form-control" id="exampleInputEmail1" placeholder="username">
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">first name</label>
            <input type="text" class="form-control" id="exampleInputEmail1" placeholder="first name">
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Last name</label>
            <input type="text" class="form-control" id="exampleInputEmail1" placeholder="last name">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
          </div>
          <p>By creating an account you agree to our <a href="#">Term & Privacy</a></p>
          <button type="submit" class="btn btn-primary">Sing Up</button>
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
