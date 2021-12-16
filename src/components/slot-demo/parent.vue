<template>
    <div class="container">
        <h3>【匿名插槽】</h3>
        <son>
            <h3>这是父组件传递过来的标签内容</h3>
        </son>
    </div>
</template>
<script>
import son from '@/components/slot-demo/son.vue';
export default{
    components:{
        son
    },
    data(){
        return {
            
        }
    }
}
</script>
<style scoped>
.container{
    background: lightseagreen;
}
</style>