<template>
    <div class="Header-box">
        <div class="Header-top">
            <div class="Header-top--mid  width-1080">
                <ul>
                    <a href="#">品牌介绍</a>
                    <span></span>
                    <a href="#">侵权投诉</a>
                    <span></span>
                    <a href="#">代理合作</a>
                    <span></span>
                    <a href="#">校园大使</a>
                </ul>
            </div>
        </div>
        <header-nav></header-nav>
    </div>
</template>
<script>
import HeaderNav from "./HeaderNavComponent"
    export default{
        name:"HeaderComponent",
        components:{
            HeaderNav
        }
    }
</script>
<style scope lang="scss">
    .Header-box{
        width: 100%;
        height: 159px;
        background: url(http://staticimg.yidianzixun.com/modules/build/images/celebrate_pc-5dfb94f3.png) repeat-x 0 0;
    }
    .Header-top{
        background: rgba(0,0,0,.1);
        height: 30px;
        width:100%;
        line-height:30px;
        ul{
            float: right;
            *{
                float:left;
                color:#fff;
            }
            a{
                font-size: 12px;
                padding: 0 10px;
                display: inline-block;
                vertical-align: middle;
                &:hover{
                    opacity: .7;
                }
            }
            span{
                width: 0;
                height: 14px;
                border-left: 1px solid #e0e0e0;
                position: relative;
                top:8px;
            }
        }
    }
</style>
