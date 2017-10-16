<template>
  <div class="width-1080 HeaderNav">
    <ul>
        <li v-for="(item,index) in navlist" :key="item.id">
            <router-link :to="item.hashTo" v-text="item.word"></router-link>
        </li>
    </ul>
  </div>
</template>
<script>
    export default{
        name:"HeaderNav",
        data:function(){
            return {
                navlist:[{word:"首页",id:0,hashTo:"/"},{word:"要闻",id:1,hashTo:"/yaowen"},{word:"一点号",id:2,hashTo:"/yidianhao"},{word:"视屏",id:3,hashTo:"/siping"},{word:"段子",id:4,hashTo:"/duanzi"},{word:"汽车",id:5,hashTo:"/car"},{word:"社会",id:6,hashTo:"/shehui"},{word:"娱乐",id:7,hashTo:"/yule"},{word:"军事",id:8,hashTo:"/junshi"},{word:"体育",id:9,hashTo:"/tiyu"},{word:"NBA",id:10,hashTo:"/NBA"},{word:"财经",id:11,hashTo:"/caijing"}]
            }
        }
    }
</script>
<style lang='scss' scope>
    .HeaderNav{
        ul{
            a{
                float:left;
                border-bottom-color: #129aee;
                font-size: 16px;
                padding: 0 25px;
                line-height: 50px;
                height: 50px;
                border-bottom: 2px solid transparent;
                display: inline-block;
                vertical-align: middle;
                overflow: hidden;
            }
        }
    }
</style>     