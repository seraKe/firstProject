<template>
  <div class="sidebar">
      <ul class="menu">
          <li class="menu_li" v-for="item in list">
              <a href="javascript:void(0)">{{item.title}}</a>
              <ul class="menu-sub">
                  <li v-for="li in item.items" v-bind:class="{highLight:li.active}">{{li.name}}</li>
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
              {name: '江户川柯南', active: 1},
              {name: '工藤新一', active: 0},
              {name: '毛利兰', active: 0},
              {name: '毛利小五郎', active: 0},
              {name: '灰原哀', active: 0}
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
      ],
      arrHighlight: [],
      profilesIndex: 0
    }
  },
  props: {
    scrollTop: Number,
    HeightArr: Array
  },
  watch: {
    scrollTop (value) {
      var self = this
    //   console.log(value)
    //   console.log(this.HeightArr)
      let HeightArrLen = this.HeightArr.length
      for (var j = HeightArrLen - 1; j >= 0; j--) {
        var cur = self.HeightArr[j]
        if (value > (cur - 120)) {
        //   console.log(value, cur, j)
          self.changeColor(j)
          break
        }
      }
    }
  },
  mounted () {
    var len = this.list.length
    var self = this
    for (var i = 0; i < len; i++) {
      if (self.list[i].title === '人物介绍') {
        self.profilesIndex = i
        var len2 = self.list[i].items.length
        for (var j = 0; j < len2; j++) {
          if (j === 0) {
            self.list[i].items[j].active = 1
          } else {
            self.list[i].items[j].active = 0
          }
        }
      }
    }
  },
  methods: {
    changeColor (index) {
      var self = this
      this.list[this.profilesIndex].items.forEach(function (cur, i) {
        if (i === index) {
          cur.active = 1
        } else {
          cur.active = 0
        }
        console.log(self.list[0].items)
      })
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
            // color:#7d8691;
            color:#f2fafb;
            font-size:16px;
            padding-left: 10px;
            font-weight: normal;
            margin-bottom:8px;
        }
        .highLight{
            color:#32c5d2;
        }
    }
</style>
