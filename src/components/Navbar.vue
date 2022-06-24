<template>
  <header>
    <nav>
        <router-link :to="{ name: 'Pesquisa'}">Pesquisa</router-link>
        <router-link :to="{name: 'Favoritos'}">Favoritos</router-link>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>


<style>

nav{
    font-weight: bold;
}

</style>