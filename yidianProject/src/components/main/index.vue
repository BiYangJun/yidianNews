<template>
    <div class="main-content width-1080">
        <left-aside></left-aside>
        <right-aside></right-aside>
    </div>
</template>
<script>
    import rightAside from './RightAsideComponent.vue'
    import leftAside from './LeftAsideComponent.vue'
    export default{
        name:"main",
        components:{
            rightAside,
            leftAside
        }
    }
</script>
<style scope>
    .main-content{
        overflow: hidden;
    }
</style>
