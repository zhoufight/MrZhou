<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{margin:0;padding:0;}
body{background:rgb(238,238,238)}
li{list-style: none;}
img{border: 0;}
a{text-decoration: none;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-bottom: 60px;
}
.navbar-default{border:none;background-color: #ffffff;}
.bx{box-shadow: 0 1px 5px rgba(0,0,0,.08);}

</style>
