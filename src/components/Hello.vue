<template>
  <div class="hello">
    <div class="banner">
        <div class="banner-img">
            <h4>
                <span>Let us show you more about </span>
                <span>DETECTIVE CONAN</span>
                <span class="lm-btn">Learn More</span>
            </h4>
        </div>
    </div>
    <div class="">
        <div class="fl">

        </div>
        <div class="fr">

        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped lang="scss">
    @import "../common/style/common";
    .banner{
        height:750px;
        min-width:1140px;
        background:url(../assets/banner.jpg) no-repeat center -100px;
        background-size:cover;
        &:hover .banner-img{
            display:table;
        }
    }
    .banner-img{
        width:1140px;
        height:100%;
        margin:0 auto;
        background:rgba(0,0,0,.4);
        display:table;
        display:none;
        h4{
            margin:0 auto;
            color:#FFFFFF;
            font-size:30px;
            display:table-cell;
            vertical-align: middle;
            width:454px;
        }
        span{
            display:block;
            margin-bottom:10px;
            font-size: 38px;
        }
        span:nth-child(1){
            margin-top:-2px;
        }
        .lm-btn{
            padding:8px 10px;
            width:160px;
            border:2px solid #FFFFFF;
            font-size:24px;
            margin:30px auto 0;
            &:hover{
                background:#FFFFFF;
                color:#000;
                cursor:pointer;
            }
        }
    }
</style>
