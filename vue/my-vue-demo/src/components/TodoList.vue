<template>
<ul>
    <!-- <todo-item v-for="item in list" :title="item.title" :del="item.del"></todo-item> -->
    <slot></slot>
</ul>
    
</template>

<script>
export default{
    data: function(){
        return {

        }
    }
    
}
</script>