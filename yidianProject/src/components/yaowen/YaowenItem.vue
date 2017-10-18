<template>
	<div class="newsitem">
		<div class="yaowen_pic">
		 	<img :src="'http://i1.go2yd.com/image.php?type=thumbnail_336x216&url='+image" v-for="(image,i) in newss.image_urls"/>
		</div>
		 <div class="news_wenzi">
			 <p>{{newss.title}}</p>
			 <div><span>{{newss.source}}</span><i>{{newss.comment_count}}评</i><u>{{newss.date}}</u><div class="doc-remove">不感兴趣<b>x</b></div></div>
		 </div>
		
	</div>
</template>

<script>
	import router from '../../router'
export default {
  name: 'YaowenItem',
  props:['newss'],
  data () {
    return {
      
    }
  },
  methods:{
  	// toDetail(){
  	// 	router.push({ name: 'detail', params: { id: this.film.id }})
  	// }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.newsitem{
	cursor:pointer;
	border-bottom: 1px solid #f2f2f2;
	.yaowen_pic{
		display:inline-block;
		margin: 12px 0;
		margin-right: 27px;
		vertical-align:middle;
		overflow:hidden;
		width:159px;
		height:100px;
		img{
			width:159px;
			height:100px;
			transition:all 0.5s linear;
		}
		img:hover{
			transform:scale(1.1);
		
		}
	}
	
	.news_wenzi{
		display:inline-block;
		vertical-align: middle;
		padding:10px 0;
		width:470px;
		p{
			color:#222;
			font-size:18px;
			transition: color .5s;
			margin-bottom:15px;
		}
		p:hover{
			 color: #129aee;
		}
		>div{
			font-size:12px;
				color:#777;
			i{
				font-style:normal;
				padding:0 12px;
			}
			u{
				text-decoration:none;
			}
			.doc-remove{
				font-size: 12px;
				float: right;
				color: transparent;
				margin-right: 0;
				padding-right: 8px;
				b{
					font-weight:normal;
					float:right;
					color:#999;	
					padding-left:4px;
					font-size:14px;	
				}
			}
			.doc-remove:hover{
				color: #fff;
				background: #7bbcff;
				padding-left: 10px;
				border-radius: 10px;
				b{
					color:#fff;
				}
			}
			
		}
	}
}
.newsitem:hover{
	background:#fafafa;
}
</style>
