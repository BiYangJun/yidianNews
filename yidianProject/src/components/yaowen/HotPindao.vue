<template>
	 <div class="hotpindao">
		 	<img :src="'http://i1.go2yd.com/image.php?url='+pindao.image+'&type=thumbnail_150x150'"/>
			 <p>{{pindao.name}}</p>
             <a>订阅</a>
	</div> 
</template>

<script>
	import router from '../../router'
export default {
  name: 'HotPindao',
  props:['pindao'],
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
.hotpindao{
	cursor:pointer;
    width: 78px;
    display: inline-block;
    padding: 15px 10px 15px 24px;
    text-align: center;
    img{
        width:67px ;
        height:67px;
    }
    p{
        font-size:16px;
        color:#222;
        transition: color .5s;
        margin: 5px 0 8px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        text-align: center;
    }
    a{
        width: 67px;
        height: 29px;
        line-height: 29px;
        text-align: center;
        font-size: 14px;
         color: #129aee;
        border: 1px solid #ececec;
        border-radius: 15px;
         margin-left: 5px;
        display:block;
    }
    a:hover{
        background:#129aee;
        color:#fff;
    }
}
</style>
