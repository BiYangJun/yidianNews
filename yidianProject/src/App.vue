<template>
  <div id="app">
    <Header-box></Header-box>
    <router-view/>
  </div>
</template>

<script>
import HeaderBox from "./components/HeaderComponent"

export default {
  name: 'app',
  components:{
    HeaderBox
  }
}
</script>

<style>
  *{
    margin:0;padding:0;
  }
  a{
    text-decoration: none;
    color:#fff;
  }
  li{
    list-style:none;
  }
  .width-1080{
    width:1080px;
    margin:0 auto;
  }
  html,body{
    height:100%;
  }
  #app{
    height:100%;
  }
</style>
