import Vue from 'vue'
import App from './App.vue'
import Welcome from './Welcome.vue'

Vue.component('welcome', Welcome);
new Vue({
  
  el: '#app',
  render: h => h(App)
})
