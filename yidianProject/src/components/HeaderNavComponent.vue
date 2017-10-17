<template>
  <div class="width-1080 HeaderNav">
    <ul>
        <li v-for="(item,index) in navlist" :key="item.id">
            <router-link :to="item.hashTo" v-text="item.word"></router-link>
        </li>
        <div class="jiantou" @click="showList">∨</div>
    </ul>
    <div class="more-navList" v-show="showMoreList">
        <li v-for="(item,index) in morenavlist" :key="item.id">
            <router-link :to="item.hashTo" v-text="item.word"></router-link>
        </li>
    </div>
  </div>
</template>
<script>
    export default{
        name:"HeaderNav",
        data:function(){
            return {
                navlist:[
                    {word:"首页",id:0,hashTo:"/"},{word:"要闻",id:1,hashTo:"/yaowen"},{word:"一点号",id:2,hashTo:"/yidianhao"},{word:"视屏",id:3,hashTo:"/siping"},{word:"段子",id:4,hashTo:"/duanzi"},{word:"汽车",id:5,hashTo:"/car"},{word:"社会",id:6,hashTo:"/shehui"},{word:"娱乐",id:7,hashTo:"/yule"},{word:"军事",id:8,hashTo:"/junshi"},{word:"体育",id:9,hashTo:"/tiyu"},{word:"NBA",id:10,hashTo:"/NBA"},{word:"财经",id:11,hashTo:"/caijing"}
                ],
                morenavlist:[
                    {word:"首页",id:0,hashTo:"/"},{word:"要闻",id:1,hashTo:"/yaowen"},{word:"一点号",id:2,hashTo:"/yidianhao"},{word:"视屏",id:3,hashTo:"/siping"},{word:"段子",id:4,hashTo:"/duanzi"},{word:"汽车",id:5,hashTo:"/car"},{word:"社会",id:6,hashTo:"/shehui"},{word:"娱乐",id:7,hashTo:"/yule"},{word:"军事",id:8,hashTo:"/junshi"},{word:"体育",id:9,hashTo:"/tiyu"},{word:"NBA",id:10,hashTo:"/NBA"},{word:"财经",id:11,hashTo:"/caijing"}
                ],
                showMoreList:false
            }
        },
        methods:{
            showList(e){
                this.showMoreList=!this.showMoreList;
            }
        }
    }
</script>
<style lang='scss' scope>
    .HeaderNav{
        position: relative;
        height:auto;
        ul{
            overflow: hidden;
            li{
                overflow: hidden;
                float:left;
            }
            a.router-link-exact-active{
                border-bottom-color: #129aee;
            }
            a{
                float:left;
                color:#fff;
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
        .jiantou{
            width: 16px;
            height: 50px;
            padding-right: 25px;
            font-size:20px;
            float: right;
            cursor: pointer;
            line-height: 52px;
            color: #fff;
            &:hover{
                color: #129aee;
            }
        }
        .more-navList{
            position: absolute;
            width: 1080px;
            background: #fbfbfb;
            padding: 8px 0;
            z-index: 100;
            max-height: 230px;
            overflow: hidden;
            li{
                float: left;
                padding-left: 9px;
                padding-top: 7px;
                margin-left: 3px;
                margin-bottom: 12px;
                position: relative;
                white-space: nowrap;
                -webkit-transition: width .3s,padding .3s,margin .3s;
                transition: width .3s,padding .3s,margin .3s;
                a{
                    height: 38px;
                    padding: 0 13px;
                    font-size: 16px;
                    color: #222;
                    background: transparent;
                    -webkit-transition: none;
                    transition: none;
                    &:hover{
                    color: #129aee;
                    }
                }
                
            }
        }
    }
</style>     