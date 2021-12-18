<template>
  <div id="app">
    <router-link class="nav-link" to="/shoesTrend">球鞋价格趋势</router-link>
   <!-- <router-link class="nav-link" to="/echarts">echarts示例</router-link>
    <router-link class="nav-link" to="/slot">slot插槽</router-link>-->
    <br> <br>
    <hr color="lightgreen">
    <br>
    <!-- 路由占位符 -->
    <router-view></router-view>

    <!-- vue-echarts使用实例 -->
    <!-- <VueEchartsDemo/> -->
    <!-- echarts使用示例 -->
  </div>
</template>

<script>
// vue-echarts
import ShoesPriceTrend from './components/shoes-price-trend'

export default {
  name: 'App',
  components: {
    ShoesPriceTrend
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.nav-link{
 text-decoration: none;
  border:1px solid transparent;
  background: #DDD;
  color:#666;
  padding:10px;
  border-radius:6px;
}
/* 路由高亮样式 */
.router-link-active{
  color:#FFF;
  background:linear-gradient(to right bottom,green,yellowgreen);
}
</style>
