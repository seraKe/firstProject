<template>
  <div id="app">
      <div class="header">
          <header class="layout-header">
              <div class="header-box">
                  <div class="logo fl">
                      CONAN
                  </div>
                  <nav class="fr header-nav">
                      <ul class="header-nav-list">
                          <li><router-link to="/">HOME</router-link></li>
                          <li><router-link to="/articles">ARTICLES</router-link></li>
                      </ul>
                  </nav>
              </div>
          </header>
      </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    bodyScroll: function () {
      console.log(111)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "common/style/common";
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height:100%;
}
.header{
    height:100px;
    min-width: 1140px;
    background:rgba(255,255,255,.6);
    box-shadow: 0px 5px 27px #b3b3b3;
}
.layout-header{
    height:100px;
    width:1140px;
    margin:0 auto;
}
.header-box{
    width:1140px;
    height:100px;
    margin:0 auto;
}
.logo{
    color: #3f444a;
    margin: 22px 0 19px 0;
    font-weight: bold;
    font-size:46px;
}
.header-nav{
    height:100px;
}
.header-nav-list{
    display: table;
    height:inherit;
    li{
        display:table-cell;
        vertical-align: middle;
        padding-left:20px;
        font-weight: bold;
        cursor:pointer;
        &:hover a{
            color:#81CFE0;
        }
    }
}
</style>
