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
        <div class="Header-search width-1080">
            <a href="#" class="logo-font">一点咨讯</a>
            <form @submit.prevent>
                <input type="text" :placeholder="showPlaceholder?'大家都在搜:'+hotSearch:''" @focus="showPlaceholder=false" @blur="showPlaceholder=true"/>
                <button type="submit">搜&nbsp;&nbsp;索</button>
                <div class="Header-search__list" v-show="!showPlaceholder">
                    <li v-for="(item,ind) in showSearchList" :key="ind">
                        <span v-text="ind+1" :class="'icon-'+ind"></span><a v-text="item.name"></a>
                    </li>
                </div>
            </form>
            <div class="Header-search__login">
                <a href="#">下载app</a>
                <span></span>
                <a href="#">一点号</a>
                <span></span>
                <button>登录</button>
            </div>
        </div>
        <header-nav></header-nav>
    </div>
</template>
<script>
import HeaderNav from "./HeaderNavComponent"
import axios from "axios"
    export default{
        name:"HeaderComponent",
        data:function(){
            return{
                showPlaceholder:true,
                showSearchList:[],
                hotSearch:""
            }
        },
        components:{
            HeaderNav
        },
        mounted(){
            axios.get("yidianzixun/home/q/hot_search_keywords?appid=web_yidian&_=1508211026968").then(res=>{
                this.showSearchList=res.data.keywords
                this.hotSearch=res.data.keywords[0].name
            })
        },
        methods:{
            searchList(e){
                this.showPlaceholder=!this.showPlaceholder
                console.log(e.target.placeholder)
            }
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
        .Header-top--mid{
            overflow:hidden;
        }
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
                top:6px;
            }
        }
    }
    .Header-search{
        margin-top:40px;
        a.logo-font{
            display:inline-block;
            line-height: 26px;
            margin-right: 17px;
            max-height: 35px;
            overflow: hidden;
            width: 119px;
            font-family:'cyjianxkdcdbcf0c11a7ff';
            font-size: 29px;
            position: relative;
            top:5px;
        }
        form{
            margin-right: 17px;
            height: 36px;
            position: relative;
            display:inline-block;
            input{
                width:400px;
                height: 34px;
                padding: 0 10px;
                color: #3f484f;
            }
            button{
                background-color: #e24d26;
                width: 90px;
                height: 36px;
                color:#fff;
                font-size: 16px;
            }
            .Header-search__list{
                width: 422px;
                position: absolute;
                left: 1px;
                top: 38px;
                z-index: 2;
                box-sizing: border-box;
                background: #fdfdfd;
                padding: 12px 0;
                border: 1px solid #e0e0e0;
                border-top: none;
                li{
                    padding:0 20px;
                    line-height:33px;
                    transition:all .3s;
                    &:hover{
                        background-color: #ececec;
                    }
                    a{
                        color:#000;
                    }
                    span{
                        display:inline-block;
                        width: 8px;
                        height: 32px;
                        margin-right: 20px;
                        font-size: 16px;
                        line-height: 40px;
                        color: #999;
                        font-style:italic;
                    }
                    span.icon-0{
                        color: #d70000;
                    }
                    span.icon-1{
                        color: #ff6000;
                    }
                    span.icon-2{
                        color:#ff9a22;
                    }
                }
            }
        }
        .Header-search__login{
            float:right;
            span{
                height: 10px;
                width:0;
                border-left: 1px solid #e0e0e0;
            }
            a{
                line-height: 36px;
                padding: 0 17px;
                &:hover{
                    opacity: .8;
                }
            }
            button{
                color:#fff;
                width: 60px;
                height: 25px;
                background-color: transparent;
                border: 1px solid #fff;
                border-radius: 2px;
                margin-left: 17px;
                line-height: 25px;
                &:hover{
                    color: #fff;
                    background-color: #129aee;
                }
            }
        }
    }
</style>
