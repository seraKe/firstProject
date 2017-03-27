<template>
  <div class="sidebar">
      <ul class="menu">
          <li class="menu_li" v-for="item in list">
              <a href="javascript:void(0)">{{item.title}}</a>
              <ul class="menu-sub" v-for="li in item.items">
                  <li>{{li.name}}</li>
              </ul>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      msg: 'member list',
      list: [
        {
          title: '人物介绍',
          items: [
              {name: '江户川柯南'},
              {name: '工藤新一'},
              {name: '毛利兰'},
              {name: '毛利小五郎'},
              {name: '灰原哀'}
          ]
        },
        {
          title: '时间轴',
          items: [
              {name: '江户川柯南'},
              {name: '工藤新一'},
              {name: '毛利兰'},
              {name: '毛利小五郎'},
              {name: '灰原哀'}
          ]
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
    @import "../common/style/common";
    .sidebar{
        position:fixed;
        top:100px;
        left:0;
        bottom:0;
        width: 270px;
        background: HSLA(213,8%,53%,0.6);
    }
    .menu{
        width:230px;
        padding:30px 20px;
        text-align: left;
    }
    .menu_li{
        color:#2c3e50;
        font-size:20px;
        font-weight: bold;
        margin-bottom:20px;
    }
    .menu-sub{
        padding-top: 15px;
        li{
            color:#7d8691;
            font-size:16px;
            padding-left: 10px;
            font-weight: normal;
        }
    }
</style>
