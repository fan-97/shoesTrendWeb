<template>
    <div class="container">
        
        <slot name="header">default header</slot>
        <h3>子组件的主体内容</h3>
        <slot name="footer">default footer</slot>

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
</style>