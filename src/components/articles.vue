<template>
  <div class="list">
      <div class="listBox" v-on:scroll="bodymove">
          <Sidebar :scrollTop="bodyScrollTop" :HeightArr="profileHeightArr"></Sidebar>
          <div class="container">
              <ul>
                  <li v-for="item in list" class="profiles">
                      <div class="profile clearfix">
                          <div class="profile_img fl animated" :style="{backgroundImage:'url('+item.portrait +')'}"></div>
                          <div class="profile_intro fl animated">{{item.describe}}</div>
                      </div>
                  </li>
              </ul>
          </div>
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
          portrait: require('html-withimg-loader!../assets/banner.jpg'),
          describe: '真实身份为高中生侦探工藤新一，人称“平成年代的福尔摩斯”、“日本警察的救世主”。他因为试图跟踪黑衣组织成员而被偷袭，并被灌下代号“APTX4869”的毒药，虽然幸免于死，但身体就此缩小成一年级小学生的模样。之后寻求阿笠博士的帮助，在被青梅竹马的女友毛利兰询问其名字时，化名为江户川柯南。在阿笠博士的提议下，寄住于小兰的父亲毛利小五郎家中，不仅解决着各种案件，并且秘密调查黑衣组织。'
        },
        {
          portrait: require('html-withimg-loader!../assets/insets_1.jpg'),
          describe: '17岁，高中生侦探，就读于帝丹高中二年级B班，人称“平成年代的福尔摩斯”“日本警察的救世主”。性格沉稳，正义感强。在和青梅竹马的女友毛利兰一同去游乐园玩时，他在目睹黑衣组织成员秘密交易时而被偷袭，并被灌下名为“APTX4869”的毒药，虽然幸免于死，但身体就此缩小成7岁小学生的模样。之后寻求阿笠博士的帮助，在被小兰询问其名字时，化名为江户川柯南。在阿笠博士的提议下，寄住于小兰的父亲、私家侦探毛利小五郎家中，秘密调查黑衣组织。'
        },
        {
          portrait: require('html-withimg-loader!../assets/insets_2.jpg'),
          describe: '就读于帝丹高中二年级B班，校空手道部的主将。父亲是名侦探毛利小五郎，母亲是律政界女王妃英理，青梅竹马兼男友是高中生侦探工藤新一（化名江户川柯南）。被黑衣组织成员贝尔摩德称为“Angel（天使）”。运气非常好，抽签常常会中。虽曾数次怀疑柯南的身份，但还不知道柯南就是新一。'
        },
        {
          portrait: '',
          describe: '毛利兰的父亲。职业是私家侦探，以前是一名优秀的刑警，和目暮警官是同事，后来因为一起事件而辞职，改行当私家侦探，在自家二楼开“毛利侦探事务所”。枪法精准，柔道也是一流，擅长过肩摔。妻子妃英理十年前就与他分居。本来是个糊涂侦探，却经常被柯南用麻醉针弄睡着，以睡姿推理案情，屡破奇案，因此在业界享有“沉睡的小五郎”的美誉。实际上，他只是被柯南借用嘴巴说出真相而已。因为每次推理都是在昏睡状态，所以过程完全不记得，但即便如此他对自己的推理能力仍深信不疑，只是认为自己有“双重人格”。'
        },
        {
          portrait: '',
          describe: '本名宫野志保。其原为黑衣组织的成员雪莉（Sherry），是能使身体缩小的药物——“APTX4869”的发明者。在姐姐宫野明美遭组织杀害后，因反抗组织而被囚禁，服下APTX4869，身体缩小后背叛组织逃亡，化名灰原哀，寄宿于阿笠博士家中，就读于帝丹小学一年B班'
        }
      ],
      bodyScrollTop: 0,
      profileHeightArr: []
    }
  },
  methods: {
    bodymove () {
      var el = this.$el
      var $listBox = el.querySelector('.listBox')
      this.bodyScrollTop = $listBox.scrollTop
    }
  },
  mounted () {
    var el = this.$el
    var self = this
    var hWindow = window.innerHeight - 100
    var $profiles = el.querySelectorAll('.profiles')
    var profilesLen = $profiles.length
    el.querySelector('.listBox').style.height = hWindow + 'px'
    if (profilesLen > 1) {
      for (var i = 0; i < profilesLen; i++) {
        self.profileHeightArr.push($profiles[i].offsetTop)
      }
    }
  }
}

</script>

<style scoped lang="scss">
    @import "../common/style/common";
    .listBox{
        height: 100%;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
    }
    .container{
        padding-top:100px;
        width:900px;
        margin:0 auto;
        text-align: left;
    }
    .profiles{
        margin-bottom:30px;
    }
    .profile_img{
        width:200px;
        height:200px;
        background:#ccc;
        background-image:url(../assets/insets_2.jpg);
        background-position: center center;
        background-repeat: no-repeat;
        background-size:cover;
    }
    .profile_intro{
        margin-left:40px;
        padding-top:20px;
        width:650px;
        word-break: break-all;
        line-height: 30px;
    }
</style>
