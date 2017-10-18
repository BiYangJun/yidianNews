<template>
    <li class="newsList__item" >
   <div class="newsList__imgBox" :style="item.image_urls.length>1?{display:'flex'}:{float:'left'}">
        <div :class="'newsList__imgBox--item newsList__imgBox--item_'+ind" v-for="(imgItem,ind) in item.image_urls" :key="ind" >
            <img :src="imgItem.length>11?imgItem:'http://i1.go2yd.com/image.php?type=thumbnail_336x216&url='+imgItem"/>
        </div>
    </div>
    <div class="newsList__content">
        <div class="newsList__content--inline">
            <h3 v-text="item.title"></h3>
            <div class="newsList__content--info">
                <img v-if="item.tag_name" :src="'http://s.go2yd.com/c/'+item.tag_icon"/>
                <span v-text="item.source"></span>
                <span v-text="item.comment_count+'评'"></span>
                <span v-text="item.date"></span>
                <div class="remove-info" @click="removeItem(ind)">
                    不感兴趣
                    <i>X</i>
                </div>
            </div>
        </div>
    </div>
    </li>
</template>
<script>
    import angle from '../../event_bus'
    export default {
        name:"aitemcomponent",
        props:["item","ind"],
        methods:{
            removeItem(id){
                angle.$emit("removeItem",id)
            }
        }
    }
</script>
<style scope lang="scss">
    .newsList__item{
         position: relative;
        overflow: hidden;
        border-bottom: 1px solid #f2f2f2;
        cursor: pointer;
        &:hover{
            background-color: #fafafa;
        }
    }
    .newsList__imgBox{
        margin-right: 27px;
        padding: 12px 0;
        height:auto;
        
        .newsList__imgBox--item{
            width: 159px;
            height: 100px;
            float:left;
            overflow: hidden;
            margin-left:6px;
            img{
                width:100%;
                height:100%;
                transition:all .7s;
                transform-origin: center;
                &:hover{
                    transform: scale(1.05);
                }
            }
        }
        .newsList__imgBox--item_4{
            display:none;
        }
        .newsList__imgBox--item_0{
            margin-left:0px;
        }
    }
    .newsList__content{
        height: 100px;
        overflow: hidden;
        display: flex;
        align-items: center;
    }
    .newsList__content--inline{
            width: 100%;
            display: inline-block;
            vertical-align: middle;
            >h3{
                color:#222;
                line-height: 1.34;
                font-size:18px;
                font-weight:normal;
                max-height: 52px;
                transition: color .5s;
                &:hover{
                    color: #129aee;
                }
            }
        .newsList__content--info{
                margin-top: 15px;
                >*{
                    float: left;
                    font-size: 12px;
                    line-height: 20px;
                    margin-right: 11px;
                    display: inline-block;
                    white-space: nowrap;
                    color: #777;
                }
                >img{
                    height: 20px;
                }
                span{

                }
                .remove-info{
                    font-size: 12px;
                    float: right;
                    color: transparent;
                    margin-right: 0;
                    padding-right: 5px;
                    i{
                        font-size: 14px;
                        vertical-align: -3px;
                        color: #999;
                        margin-left: 3px;
                        font-style:initial;
                    }
                    &:hover{
                        color: #fff;
                        background: #7bbcff;
                        padding-left: 10px;
                        border-radius: 10px;
                        i{
                            color:#fff;
                        }
                    }
                    
                }
        }
    }
</style>

