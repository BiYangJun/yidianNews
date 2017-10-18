<template>
    <div class="yaowen-content">
        <!-- <div class="yaowen_left" v-scroll="getNews(this.cstart,this.cend)"> -->
        <div class="yaowen_left">           
            <p>全部</p>
            <yaowen-item :newss="newss" v-for="(newss,i) in news" :key="newss.impid"></yaowen-item>
        </div> 
        <div class="yaowen_right">
            <div>
                <h4>热门视频</h4>
                <hot-video :video="video" v-for="(video,i) in videos" :key="video.docid"></hot-video>
            </div>
            <div>
                <h4>热门频道</h4>
                 <hot-pindao :pindao="pindao" v-for="(pindao,i) in pindaos" :key="pindao.id"></hot-pindao> 
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

import YaowenItem from './YaowenItem'
import HotVideo from './HotVideo'
import HotPindao from './HotPindao'
    export default {
        name: 'yaowen',
        data(){
            return{
                cstart:0,
                cend:10,
                news:[],
                videos:[],
                pindaos:[]
            }
        },
        components:{
            YaowenItem,
            HotVideo,
            HotPindao
        },
        methods:{
            getNews(cs,ce){
                let that=this;
                axios.get('http://localhost:3000/yidianzixun/home/q/news_list_for_channel?channel_id=hot&cstart='+cs+'&cend='+ce+'&infinite=true&refresh=1&__from__=pc&multi=5&appid=web_yidian&_='+Date.now()+'').then((res)=>{
                    console.log(2222,res.data);
                    that.news=that.news.concat(res.data.result);
                })
                
            },
             getVideos(){
                let that=this;
                axios.get('http://localhost:3000/yidianzixun/home/q/get_related_video?count=40&appid=web_yidian&_='+Date.now()+'').then((res)=>{
                    // console.log(res.data);
                    that.videos=res.data.documents.slice(0,4);
                    // console.log(that.videos);
                })
                
            },
             getpindao(){
                let that=this;
                axios.get('http://localhost:3000/yidianzixun/home/q/get_recommend_channel?appid=web_yidian&_='+Date.now()+'').then((res)=>{
                    console.log(1213,res.data);
                    var num=[];
                    for( var i=0;i<6;i++){
                         num.push(res.data.channels[parseInt(res.data.channels.length*Math.random())])
                    }
                    that.pindaos=num;
                })
                
            }
        }, 
        // directives: {
        //     scroll: {
        //         bind: function (el, binding){
        //             // var scrollDisable = false;        
        //         window.addEventListener('scroll', ()=> {
        //             if(document.body.scrollTop + window.innerHeight >= el.clientHeight) {
        //                 // if(!scrollDisable) {
        //                 console.log('load data');
        //                 // }
        //             }
        //         })
        //         },
        //         unbind:function(){
        //             window.removeEventListener("scroll")
        //         }
        //     }
        // }

        mounted(){
            let that=this
            this.getNews(that.cstart,that.cend);
            this.getVideos();
            this.getpindao();
            window.addEventListener("scroll",function(){
                 if(document.documentElement.scrollHeight<=document.documentElement.scrollTop+document.body.clientHeight){
                    that.cstart+=10;
                    that.cend+=10;
                    that.getNews(that.cstart,that.cend);
                    console.log(2)
                }
            })
        }
    }
</script>
<style lang='scss' scope>
    .yaowen-content{
      width:1080px;
      margin:0 auto;
      margin-top:20px;
      .yaowen_left{
          float:left;
          width:664px;
          >p{
              background:#fbfbfb;
              height:40px;
              line-height:40px;
              padding-left:20px;
              cursor:pointer;

          }
      }
      .yaowen_right{
          float:right;
          width:350px;
          >div{
              background:#fafafa; 
              margin-bottom:20px;
              padding:15px 10px 0 0;
              h4{
                margin-top:10px;
                margin-bottom:10px;
                color: #222;
                font-size: 18px;
                line-height: 1;
                font-weight: 700;
                border-left:solid 4px #129aee;
                padding-left: 23px;
            }
          }
       
      }
    }
</style>
