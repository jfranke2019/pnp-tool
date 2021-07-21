import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { DropdownPlugin, TablePlugin } from 'bootstrap-vue'
import VuePapaParse from 'vue-papa-parse'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(DropdownPlugin)
Vue.use(TablePlugin)
Vue.use(VuePapaParse)

new Vue({
  render: h => h(App),
}).$mount('#app')