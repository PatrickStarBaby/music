<template>
  <div class="flex flex-direction-column flex-vc">
    <div class="width-350 mg-tp80">
      <img class="" width="100px" height="100px" src="../assets/img/logo.png">
      <div class="form-group mg-tp20">
        <label class="ft-20" for="phone">Phone</label>
        <input type="number" maxlength="11" v-model="phone" class="form-control h50" id="Phone" placeholder="Phone">
      </div>
      <div class="form-group">
        <label class="ft-20" for="Password1">Password</label>
        <input type="password" v-model="pwd" class="form-control h50" id="Password1" placeholder="Password">
      </div>
      <button type="submit" class="btn btn-default ft-20 width-full h50" @click="login">Submit</button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import Qs from 'qs'
  export default {
    name: 'login',
    data() {
      return {
        phone: '',
        pwd: '',
      }
    },
    methods: {
      login() {
        let myreg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
        var url = "http://www.spongebob.site:3000/login";
        var that = this;
        if(this.phone.length == 0){
          alert("请输入手机号！");
        }else if(this.pwd.length == 0){
          alert("请输入密码！");
        }else if(!myreg.test(this.phone) && this.phone!= '110'){
          alert("手机号格式不正确！");
        }else{
          axios({
              method: 'post',
              url: url,
              transformRequest: [function(data) {
                // 对 data 进行任意转换处理
                return Qs.stringify(data)
              }],
              header: {
                'content-type': 'application/x-www-form-urlencoded',
              },
              data: {
                phone: this.phone,
                pwd: this.pwd
              }
            })
            .then(function(response) {
              console.log(response.data);
              let result = response.data.ok;
              if (result == 1) {
                alert("登录成功！");
                let userInfo = response.data.data;
                console.log(userInfo);
                that.$router.replace('/index')
              }
              if (result == 0) {
                alert("密码错误！");
              }
              if (result == -1) {
                alert("账号不存在！");
              }
              if (result == -2) {
                alert("网络错误！请重新登陆");
              }
            })
            .catch(function(error) {
              console.log(error);
            });
        }


      },

    },
  }
</script>

<style>

</style>
