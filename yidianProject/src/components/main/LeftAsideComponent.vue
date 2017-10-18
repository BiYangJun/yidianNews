<template>
    <div class="leftAside_box">
            <div class="lunbo_box swiper-wrapper">
                <div class="lunbo_list swiper-slide" v-for="(item,ind) in aside" :key="ind">
                    <img :src="item.image"/>
                    <h3 v-text="item.title"></h3>
                </div>
                <div class="flag_group swiper-pagination">
                </div>
            </div>
            <news-list></news-list>   
    </div>
</template>
<script>
    import axios from 'axios'
    import newsList from './LeftAsideNewsComponent.vue'
    export default {
        name:"leftAside",
        data:function(){
            return {
                aside:[]
            }
        },
        components:{
            newsList
        },
        methods:{
            getLunboAside(){
                axios.get("yidianzixun/home/q/get_pc_slides?appid=web_yidian",{
                    params:{'_':Date.now()}
                }).then(res=>{
                    // console.log(res.data.slides)
                    this.aside=res.data.slides
                })
            }
        },
        mounted(){
            this.getLunboAside()
        },
        updated(){
            var mySwiper = new Swiper ('.leftAside_box', {
            // direction: 'vertical',
            loop:true,
            effect : 'fade',
            autoplay:3000,
            fade: {
                crossFade: false,
                },
            loop: true,
            paginationClickable:true,
            // 如果需要分页器
            pagination: '.swiper-pagination',
                })  
                mySwiper.update()
            }
        }
</script>
<style scope lang='scss'>
    .leftAside_box{
        width:664px;
        height: auto;
        float:left;
    }
    .lunbo_box{
        width: 664px;
        height: 284px;
        overflow: hidden;
        position: relative;
    }
    .lunbo_list{
        cursor: pointer;
        img{
            width:100%;
        }
        h3{
            font-size: 20px;
            color: #fff;
            text-align: left;
            width: 100%;
            height: 50px;
            line-height: 50px;
            position: absolute;
            left: 0;
            bottom:0;
            font-weight:normal;
            margin-left: 27px;
            box-sizing: border-box;
            background: -webkit-gradient(linear,0 0,0 bottom,from(transparent),to(rgba(0,0,0,.7)));
        }
    }
    .flag_group{
        position: absolute;
        bottom: 19px;
        right: 19px;
        text-align: center;
        line-height: 11px;
        span{
            &.swiper-pagination-bullet-active{
                background-color:#129aee;
            }
            width: 8px;
            height: 8px;
            margin: 0 5px;
            border-radius: 100%;
            background-color: #fff;
            opacity: 1 !important;
            display: inline-block;
            cursor: pointer;
        }
    }
</style>