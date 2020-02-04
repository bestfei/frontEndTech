<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <div>插槽传值</div>
    <todo-list>
      <todo-item @delete="handleDelete" v-for="item in list" :key="item.title" :title="item.title" :del="item.del">
        <template v-slot:pre-icon="{value}">
            <span>前置插槽 {{value}}</span>
        </template>
        <template v-slot:suf-icon>
            <span>后置插槽</span>
        </template>
      </todo-item>
    </todo-list>

    <div>插槽传值-全局组件</div>
    <global-todo-list>
      <todo-item @delete="handleDelete" v-for="item in list" :key="item.title" :title="item.title" :del="item.del">
        <template v-slot:pre-icon="{value}">
            <span>前置插槽 {{value}}</span>
        </template>
        <template v-slot:suf-icon>
            <span>后置插槽</span>
        </template>
      </todo-item>
    </global-todo-list>


  </div>

</template>

<script>
import TodoList from './components/TodoList.vue'
import TodoItem from './components/TodoItem.vue'

export default {
  name: 'app',
  //注册组件
  components: {
    TodoList,
    TodoItem
  },
  //data是个方法，返回一个对象
  data(){
    return {
      message : 'default message',
      list : [{
        title: 'app.vue PH',
        del : true
        },{
        title: 'app.vue ID',
        del : false 
      }]
    }
  },
  method:{
    handleDelete(val){
      console.log("vue click handleDelete:",val)
    }
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
