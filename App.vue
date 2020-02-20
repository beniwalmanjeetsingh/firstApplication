<template>
  <div id="app">
   <button><router-link to="/home">Home</router-link></button>
   <button><router-link to="/about">About</router-link></button>
   <button><router-link to="/register">Register</router-link></button>
   <button><router-link to="/login">Login</router-link></button>
   <div>
   <router-view></router-view>
  </div>
   <img alt="Vue logo" src="./assets/logo.png">
  </div>
</template>
<script>

export default {
  name: 'App',
  components: {  
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
#app img{
  margin-left:125px;
}
#app button{
  height:30p x;
  width:100px;
  display: block;
  float: left;
  margin-left: 10px;
}
#app div{
  height:50px;
  width:200px;
  text-align:center;
}

</style>
