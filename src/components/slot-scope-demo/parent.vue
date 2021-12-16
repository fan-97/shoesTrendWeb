<template>
    <div class="container">
        <h3>【作用域插槽】</h3>
        <!-- 第一次调用son组件使用:绿色 -->
        <son>
            <template slot-scope="props">
                <h3 style="color:green">{{props.content}}</h3>
            </template>
        </son>
        <!-- 第二次调用son组件使用:蓝色 -->
        <son>
            <template slot-scope="props">
                <h3 style="color:blue">{{props.content}}[h3]</h3>
            </template>
        </son>
    </div>
</template>
<script>
import son from '@/components/slot-scope-demo/son.vue';
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
    background: lightskyblue;
}
</style>