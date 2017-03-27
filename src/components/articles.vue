<template>
  <div class="list">
      <Sidebar></Sidebar>
      <div class="container">
          <ul>
              <li v-for="item in list">
                  <div class="profile clearfix">
                      <div class="profile_img fl animated"></div>
                      <div class="profile_intro fl animated">{{item.describe}}</div>
                  </div>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
import Sidebar from '@/components/sidebar.vue'
export default {
  name: 'list',
  components: {
    Sidebar
  },
  data () {
    return {
      msg: 'member list',
      list: [
        {
          portrait: '',
          describe: '真实身份为高中生侦探工藤新一，人称“平成年代的福尔摩斯”、“日本警察的救世主”。他因为试图跟踪黑衣组织成员而被偷袭，并被灌下代号“APTX4869”的毒药，虽然幸免于死，但身体就此缩小成一年级小学生的模样。之后寻求阿笠博士的帮助，在被青梅竹马的女友毛利兰询问其名字时，化名为江户川柯南。在阿笠博士的提议下，寄住于小兰的父亲毛利小五郎家中，不仅解决着各种案件，并且秘密调查黑衣组织。'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
    @import "../common/style/common";
    .container{
        padding-top:100px;
        width:1000px;
        margin:0 auto;
        text-align: left;
    }
    .profile_img{
        width:200px;
        height:200px;
        background:#ccc;
        animation-name:fadeInLeft;
    }
    .profile_intro{
        margin-left:40px;
        padding-top:20px;
        width:650px;
        word-break: break-all;
        line-height: 30px;
        animation-name:fadeInRight;
    }
</style>
