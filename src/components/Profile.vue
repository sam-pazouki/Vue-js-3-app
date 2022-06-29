<template>
  <div>
    <div class="row">
      <div class="col-md-4">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" :src="user.avatar_url" alt="Card image cap">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">url:<span class="badge badge-info float-right">{{ user.url }}</span></li>
            <li class="list-group-item">full_name: <span class="badge badge-success float-right">{{ user.full_name }}</span></li>
            <li class="list-group-item">avatar_url: <span class="badge badge-primary float-right">{{ user.avatar_url }}</span></li>
            <li class="list-group-item">watchers_count:<span class="badge badge-info float-right">{{ user.watchers_count }}</span></li>
             <li class="list-group-item">stargazers_count:<span class="badge badge-info float-right">{{ user.stargazers_count }}</span></li>
             <li class="list-group-item">updated_at:<span class="badge badge-info float-right">{{ user.updated_at }}</span></li>
             
          </ul>
          <div class="card-body">
            <a :href="user.html_url" target="_blank" class="btn btn-success btn-block">Ver Perfil</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user"]
};
</script>
<style>

</style>