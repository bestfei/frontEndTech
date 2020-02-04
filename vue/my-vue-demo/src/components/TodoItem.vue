<template>
    <li>
        <slot name="pre-icon" :value="todoitem3value"></slot>
        <span class="red" v-if="del">{{title}}</span>
        <span v-else style="text-decoration: line-through;">{{title}}</span>
        <slot name="suf-icon"></slot>
        <button v-show="!del" @click="handleClick">删除</button>
        <slot name="default-icon">this is default slot</slot>
    </li>
</template>
<script>
export default{
    //属性声明
    props:{
        title: String,
        del: {
            type: Boolean,
            default: false
            }
        },
        data : function (){
            return {
                todoitem3value: Math.random()
            }
        },
        methods : {
            //抛出delete事件，并且传递出来this.title
            handleClick(){
                console.log('todo-item handleClick');
                this.$emit('delete','todo-item' + this.title)
            }
        }
    }
</script>

<style scoped>
.red {
    color: red;
}
</style>