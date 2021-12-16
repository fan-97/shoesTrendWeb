<template>
    <div class="container">
        <h3>【具名插槽】</h3>
        <son>
            <h3 slot="header">这是来自父组件的【头部】</h3>
            <h3 slot="footer">这是来自父组件的【底部】</h3>
        </son>
    </div>
</template>
<script>
import son from '@/components/slot-name-demo/son.vue';
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
    background: lightgreen;
}
</style>