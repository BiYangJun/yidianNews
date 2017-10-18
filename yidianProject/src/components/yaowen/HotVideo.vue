<template>
	 <div class="hotvideo">
		<div class="yaowen_video">
			<!-- {{video.video_url}} -->
		 	<img :src="video.upload_images[0]"/>
		</div>
		 <div class="video_wenzi">
			 <p>{{video.title}}</p>
			 <div><i>{{video.comment_count}}评</i><u>{{video.date}}</u></div>
		 </div>
		
	</div> 
</template>

<script>
	import router from '../../router'
export default {
  name: 'HotVideo',
  props:['video'],
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
.hotvideo{
	cursor:pointer;
	border-bottom: 1px solid #f2f2f2;
	padding-left:20px;
	.yaowen_video{
		display:inline-block;
		margin-right: 25px;
		padding: 12px 0;
		vertical-align:middle;
		    width: 110px;
    height: 75px;
		img{
			width:100%;
			height:100%;
		}
	}
	
	.video_wenzi{
		display:inline-block;
		vertical-align: middle;
		padding:10px 0;
		p{
			color: #222;
			width:170px;
			font-size:14px;
			transition: color .5s;
			margin-bottom:10px;	
			overflow:hidden;
			text-overflow: ellipsis;
    	-webkit-line-clamp: 2;
    	display: -webkit-box;
    	-webkit-box-orient: vertical;
		}
		p:hover{
			 color: #129aee;
		}
		>div{
			font-size:12px;
				color:#777;
			i{
				font-style:normal;
			}
			u{
				text-decoration:none;
				float:right;
			}
		}
	}
}
</style>
