<template>
    
    <!-- <div> -->
    <div class="All">
        <div class="header">
            <div class="left-header">
                <div class="logo">
                    <img src="../assets/img/logoGIC.png" alt="">
                    <h2>GIC</h2>
                </div>
            </div>
            <div class="mid-header">
                <h4>ABOUT_US</h4>
                <h4>ACEDEMICS</h4>
                <h4>WHY_GIC</h4>
                <h4>LIFTSTYLE</h4>
                <h4>CONTACT</h4>
            </div>
            <div class="right-header">
                <div class="search">
                    <img src="../assets/img/search.png" alt="">                     
                </div>
                <div class="y">
                    |
                </div>
                <div class="logout" style="color: #fc889d; font-size: 20px;">
                    Logout
                </div>
            </div>
        </div>
        <div class="sub-header">
            <div class="left-Subheader">
                <div class="section">
                    <h1>Deep Learning Through Deep Connections.</h1>
                    <h2>Taking a deep dive</h2>
                    
                </div>
                <div class="section">
                    <small>The hero's journey start here. Become a learning legend.</small>
                    <button class="button">GET STARTED</button>
                </div>
                <div class="section">
                    <small>Elevate your experience. Empower the next generation.</small>
                    <div class="team">
                        <h2>JOIN OUR TEAM</h2>
                    </div>

                </div>
            </div>
            <div class="right-Subheader">
                <img src="../assets/img/homepage.jpg" style="width: 350px; height: 450px; margin-top: 70px;">
            </div>
        </div>
            <!-- <h1>You're in Home page</h1>
            <p>well done 🥳</p> -->
            <button id="logout" v-on:click="logout();">back to login</button>
    </div>
  </template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bree+Serif&family=Itim&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Itim&family=Kdam+Thmor+Pro&display=swap');
*{
    box-sizing: border-box;
    margin: 0;
    position: relative;
    /* font-weight: normal; */
    font-family: 'Kdam Thmor Pro', sans-serif;
    
}
.left-header{
    display: flex;
    height: 10vh;
    border: 1px solid balck;
    align-items: center;
}
.logo{
    display: flex;
    width: 25%;
    height: 100%;
    margin: 2px;
    align-items: center;
}
.logo img{
    width: 5rem;
    height: 75%;
    padding-right: 10px;
    object-fit: scale-down;
}
.logo h2{
    padding-top: 15px;
    font-family:Arial, Helvetica, sans-serif;
    font-size: 3rem;
}
.header{
    background-color: white;
    /* border: 2px solid black; */
    height: 10vh;
    display: flex;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
}
.All{
    /* border: 4px solid black; */
    width: 90%;
    background-color: white;
    height: 100vh;
}
.mid-header{
    display: flex;
    gap: 2rem;
    padding: 25px;
    margin-right: 10px;
    font-weight: bold;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.right-header{
    display: flex;
    height: 10vh;
    gap: 10px;
    padding: 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    align-items: center;
}
.right-header .search img{
    width: 1.2rem;
}
.right-header .search {
    display: flex;
    align-items: center;
    justify-content: center;
}
.sub-header{
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
/* .sub-header{
    display: flex;
    align-items: center;
} */
.left-Subheader{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    font-family: 'Kdam Thmor Pro', sans-serif;
}

.left-Subheader .section >h1{
    width: 60%;
    font-family: 'Bree Serif', serif;
}
.left-Subheader .section >h2{
    font-family: 'Itim', cursive;
    font-style: italic; 
}
.left-Subheader .section{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.left-Subheader .section > button{
    width: fit-content;
    background-color: #fc889d;
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
    padding: .7rem .6rem;
    border: none;
    outline: none;
    border-radius: .3rem;
    cursor: pointer;
}
.team > h2{
    font-size: 1rem;
    width: fit-content;
    position: relative;
}
.team > h2::after{
    content: "";
    width: 100%;
    height: 3px;
    background-color: black;
    position: absolute;
    bottom: -.3rem;
    left: 0;
}
</style>
  
<script >
  export default {
    name: 'home',
    methods: {
      logout(){
        this.$router.push({name: 'home'})
      }
    }
  }
</script>