<template>
  <div class="favoritos">
      <router-view />
  </div>
</template>

<script>
import { useRouter } from 'vue-router'


export default {
}

const router = useRouter()




</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

#app {
  text-align: center;
  color: white;
}

body{
  background: black;
}

nav {
  font-family: 'Roboto', sans-serif;
  padding: 30px;
  background-color:#49454F;
  border-radius: 5px;
  border-color: white;
}

nav a {
  color: white;
  margin: 20px;
}

nav a.router-link-exact-active {
  color: white;
}

</style>