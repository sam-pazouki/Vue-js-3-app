import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.css"
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

createApp(App).component('fa', FontAwesomeIcon).use(router).mount('#app');
app.config.globalProperties.$axios = axios
import "bootstrap/dist/js/bootstrap.js";import { app } from '@storybook/vue3'

