<template>
  <div class="pesquisa">
    <router-view />
     <div>
      <br>
    <p style="font-size:larger" >Como podemos simplificar seu código hoje?</p>
<input class="input" v-model="message" placeholder="  Fique a vontade para pesquisar da forma que preferir..." />
 <button class="btn" type="button" v-on:click="Buscar">Buscar</button>
  </div>
     </div>
</template>

<script>

export default {
  name: 'PesquisaView',
}
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

.input{
  border: none;
  height: 40px;
  width: 700px;
  border-radius: 3px;
  margin-top: 35px;
  border-color: white;
}

.btn{
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  border: none;
  height: 43px;
  border-radius: 3px;
  margin-right: 607px;
  margin-top: 199px;
  background-color:black;
  color: white;
}
</style>
