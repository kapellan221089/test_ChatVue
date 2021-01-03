import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSocketIO from 'vue-socket.io'
import SocketIO from 'socket.io-client'


Vue.use(new VueSocketIO({
  debug: false,
  connection: SocketIO('http://localhost:3001'), //options object is Optional
  vuex: {
    store,
    actionPrefix: "SOCKET_",
    mutationPrefix: "SOCKET_"
  }
})
);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
