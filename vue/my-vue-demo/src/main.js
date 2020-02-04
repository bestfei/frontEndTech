import Vue from 'vue'
import App from './App.vue'
//引入全局组件
import GlobalTodoList from './components/GlobalTodoList.vue' 

Vue.config.productionTip = false

//注册全局组件
Vue.component('global-todo-list',GlobalTodoList)

new Vue({
  render: h => h(App),
}).$mount('#app')
