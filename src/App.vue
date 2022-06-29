<template>
    <Navbar />
    <div class="container">
      <div class="search card card-body">
        <h1>Pesquisar Usuários do GitHub</h1>
        <p class="lead">
          Digite um nome para encontrar usuários e repositórios
        </p>
        <input @keyup="getUser" class="form-control" placeholder="Digite o nome de um usuário..." required/>
       <div class="row mt-3" v-if="user.length !== 0">
        <div class="col-md-4">
          <Profile :user="user" />
        </div>
        <div class="col-md-8">
          <Repos v-for="repo in repos" :repo="repo" :key="repo"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue"; 
import axios from "axios";
import Profile from "./components/Profile.vue";
import Repos from "./components/Repo.vue"


export default {
  components: { Navbar },

   name: "app",
  data() {
    return {
      github: {
        url: "https://api.github.com/users",
        full_name: "sam-pazouki/Angular1",
        avatar_url: "https://avatars.githubusercontent.com/u/68926038?v=4",
        watchers_count: 0,
        stargazers_count: 0,
        updated_at: "2022-06-16T18:48:46Z"
      },
      user: [],
      repos: []
    };
  },
  components: {
    Navbar,
    Profile,
    Repos
  },
  methods: {
    getUser(e) {
      const user = e.target.value;
      const { url,  full_name, avatar_url, watchers_count,stargazers_count, updated_at } = this.github;
      axios
        .get(
          `${url}/${user}?full_name=${full_name}&avatar_url=${avatar_url}`
        )
        .then(({ data }) => (this.user = data));
      axios
        .get(
          `${url}/${user}/repos?per_page=${watchers_count}&sort=${sort}&full_name=${full_name}&full_name=${full_name}`
        )
        .then(({ data }) => (this.repos = data));
    }
  }
};

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

#app {
  text-align: center;
  color: white;
  }

body {
  background-color: black;
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

.form-control{
  border: none;
  height: 40px;
  width: 50px;
  background: none;
  border-radius: 3px;
  margin-top: 10px;
  transition: 0.3s ease;
}

.btn{
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  border: none;
  height: 32px;
  border-radius: 3px;
  margin-right: 40px;
  margin-top: 125px;
  background-color:black;
  color: white;
}
</style>
