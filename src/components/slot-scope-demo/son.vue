<template>
    <div class="container">
        <slot :content="content"></slot>
    </div>
</template>
<script>
export default{
    data(){
        return {
            content:"子组件原本的内容, 需要父组件每次调用可以以不同的样式来展示"
        }
    }
}
</script>
<style scoped>
</style>