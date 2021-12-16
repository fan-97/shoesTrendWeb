<template>
    <div>
        <router-link class="nav-link" to="/slot/anonymous">匿名插槽</router-link>
        <router-link class="nav-link" to="/slot/name">具名插槽</router-link>
        <router-link class="nav-link" to="/slot/scope">作用域插槽</router-link>
        <br><br><hr color="lightseagreen"><br> 
        <!-- 二级路由占位符 -->
        <router-view></router-view>
    </div>
</template>
<script>
export default{
    data(){
        return {
            
        }
    }
}
</script>
<style scoped>
/* 路由高亮样式 */
.nav-link{
    padding:6px;
    font-size:14px;
}
.router-link-active{
  background:linear-gradient(to right bottom,lightseagreen,lightskyblue);
}
</style>