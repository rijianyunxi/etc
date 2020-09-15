import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//mint ui
import {
  Button,
  Field,
  Header
} from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.component(Button.name, Button)
Vue.component(Field.name, Field);
Vue.component(Header.name, Header);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
