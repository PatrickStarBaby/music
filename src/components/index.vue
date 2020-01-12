<template>
  <div>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#" style="color: #EE444F;">hi~音乐</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li class="active" @click="toIndex"><a href="#">首页 <span class="sr-only">(current)</span></a></li>
            <li @click="toMusic"><a href="#">我的音乐</a></li>
          </ul>

          <!-- <form class="navbar-form navbar-left">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="search">
            </div>
            <button type="submit" class="btn btn-default">搜索</button>
          </form> -->

          <ul class="nav navbar-nav navbar-right">
            <!-- <li><a href="login.html" style="color: #EE444F;">Hi~请登录</a></li>
            <li><a href="register.html">注册</a></li> -->
            <li class="flex flex-vc">
              <img class="bd-rd-50" width="50px" height="50px" src="../assets/img/defaultHead.jpg"/>
            </li>
            <li>
              <a><span>Pikachu</span></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div v-if="isIndex" class="hello flex flex-direction-column flex-vc">
      <img class="" width="100px" height="100px" src="../assets/img/authorImg.jpg">
      <span class="ft-22 mg-tp25">{{msg}}</span>
    </div>
    <div v-else>
      <Player></Player>
    </div>
  </div>
</template>

<script>
  import Player from 'zw-player'
  export default {
    name: 'index',
    components: {
        Player
    },
    data() {
      return {
        msg: 'Hello! Welcome to My Site',
        isIndex:true,
      }
    },
    methods:{
      toIndex(){
        this.isIndex = true;
      },
      toMusic(){
        this.isIndex = false;
      },
    },
    created() {

    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
