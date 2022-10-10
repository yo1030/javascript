import Vue from 'vue'
import Index from './IndexComponent.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Index),
}).$mount('#app')
