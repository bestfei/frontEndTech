<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div>v-modle简写形式实现双向绑定</div>
    <input v-model="message"> {{message}}
    <!-- <br/><br/>
    <div>非简写形式实现双向绑定</div>
    <input :value="message" @input="handleChange" > {{message}} -->

    <br/><br/>

    <div>插槽传值</div>
    <todo-list>
      <todo-item @delete="handleDelete" v-for="item in list" :key="item.title" :title="item.title" :del="item.del">
        <template v-slot:pre-icon="{value}">
            <span>前置插槽 {{value}} </span>
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
            <span>前置插槽 {{value}} </span>
        </template>
        <template v-slot:suf-icon>
            <span>后置插槽</span>
        </template>
      </todo-item>
    </global-todo-list>

    <div>触发组件</div>
    <p>
      <button @click="handleNameChange">change this.name</button>
      <button @click="handleInfoChange">change this.info</button>
      <button @click="handleListChange">change this.list</button>
    </p>
    <p>name1 : {{ resName1 }} , name2 : {{ resName2 }}</p>
    <p>info : {{ resInfo }} , info.number : {{ resInfo.number }}</p>
    <p>list : {{ resList }}</p>


  </div>

</template>

<script>
import TodoList from './components/TodoList.vue'
import TodoItem from './components/TodoItem.vue'

let resName1 = "[this is name1]";
let resName2 = "[this is name2]";

export default {
  name: 'app',
  
  //注册组件
  components: {
    TodoList,
    TodoItem
  },
  //data是个方法，返回一个对象
  data(){
    this.resName2 = resName2;
    //return 对对象做响应式
    return {
      message : 'default message',
      list : [{
        title: 'app.vue PH',
        del : true
        },{
        title: 'app.vue ID',
        del : false 
      }],
      resName1 : resName1,
      resInfo: {
        number: undefined
      },
      resList: []
    }
  },
  methods:{
    // handleChange(e){
    //   console.log("eee");
    //   this.message = e.target.value
    // },

    handleDelete(val){
      console.log("app.vue click handleDelete:",val)
    },

    handleNameChange() {
      this.resName1 = "vue" + Date.now();
      this.resName2 = "vue" + Date.now();
      console.log("this.resName1 发生了变化,触发子组件更新", this.resName1);
      console.log("this.resName2 发生了变化，但是并没有触发子组件更新", this.resName2);
    },
    handleInfoChange() {
      this.resInfo.number = Math.random();
      console.log("this.resInfo 发生了变化", this.resInfo);
    },
    handleListChange() {
      this.resList.push(1, 2, 3);
      console.log("this.list 并没有发生变化", this.resList);
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
