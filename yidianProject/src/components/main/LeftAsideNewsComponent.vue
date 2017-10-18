<template>
  <div class="newsList">
      <ul>
                <aitemcomponent :item="item" :ind="ind" v-for="(item,ind) in listnews" :key="item.itemid"></aitemcomponent>
      </ul>
      <div class="loading-icon" v-show="showLoading">
          <nav></nav>
			<nav></nav>
			<nav></nav>
			<nav></nav>
			<nav></nav>
			<nav></nav>
			<nav></nav>
			<nav></nav>
      </div>
  </div>
</template>
<script>
import axios from "axios"
import aitemcomponent from "./NewsListItemA"
import angle from '../../event_bus'
    
    let leftnews={
        name:"leftnews",
        data:function(){
            return{
                listnews:[],
                showLoading:true,
                cstart:0,
                cend:10
            }
        },
        mounted(){
             this.getNews()
             let that=this
            angle.$on('removeItem',function(itemId){
                that.listnews.splice(itemId,1)
            })

            window.addEventListener("scroll",function(){
                var sh=document.documentElement.scrollHeight;
                var st=document.documentElement.scrollTop;
                var ch=document.documentElement.clientHeight;
                // console.log(sh,st,ch)
                if(sh==st+ch){
                    that.getNews(that.cstart+=10,that.cend+=10)
                }
            })
        },
        components:{
            aitemcomponent
        },
        methods:{
            getNews(cs=this.cstart,ce=this.cend){
                this.showLoading=true;
                axios.get("yidianzixun/home/q/news_list_for_channel",{params:{
                    channel_id:"best",
                    cstart:cs,
                    cend:ce,
                    infinite:true,
                    refresh:1,
                    __from__:"pc",
                    multi:5,
                    appid:"web_yidian",
                    _:Date.now()
                }}).then(res=>{
                    // console.log(res.data)
                    if(res.data.result.length){
                        setTimeout(function(){
                            this.listnews=this.listnews.concat(res.data.result.slice(0,13))
                            console.log(this.listnews)
                            this.showLoading=false
                        }.bind(this),1000)
                        
                    }else{
                        return
                    }
                    
                })
            }
        }
    }
    export default leftnews
</script>
<style scope lang='scss'>
    .loading-icon{
        width:100px;height:100px;
        position: relative;
        margin:0 auto;
        nav{width:20px; height:20px; border-radius: 50%; background:skyblue;position: absolute;}
        nav:nth-child(1){top:0;left:40px;animation:bh 0.8s infinite -0.1s;}
        nav:nth-child(2){top:12px;right:10px;animation:bh 0.8s infinite -0.2s;}
        nav:nth-child(3){top:40px;right:0;animation:bh 0.8s infinite -0.3s;}
        nav:nth-child(4){bottom:12px;right:10px;animation:bh 0.8s infinite -0.4s;}
        nav:nth-child(5){bottom:0;right:40px;animation:bh 0.8s infinite -0.5s;}
        nav:nth-child(6){bottom:12px; left:10px;animation:bh 0.8s infinite -0.6s;}
        nav:nth-child(7){left:0;bottom:40px;animation:bh 0.8s infinite -0.7s;}
        nav:nth-child(8){left:10px;top:12px;animation:bh 0.8s infinite -0.8s;} 
    }
    @keyframes bh{
				
				50%{transform: scale(0.5);opacity: 0.5;}
			}
    .newsList{
        position: relative;
        width: 664px;
        overflow: hidden;
        border-top: 1px solid #f2f2f2;
        margin-top:20px;
        min-height:200px;
        ul{
            overflow: hidden;
        }
    }
   
</style>
