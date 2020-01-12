<template>
  <div class="">
  	<div class="form-group">
  		<label for="phone">Phone</label>
  		<input type="number" maxlength="11" v-model="phone" class="form-control" id="Phone" placeholder="Phone">
  	</div>
  	<div class="form-group">
  		<label for="Password1">Password</label>
  		<input type="password" v-model="pwd" class="form-control" id="Password1" placeholder="Password">
  	</div>
  	<button type="submit" class="btn btn-default" @click="login">Submit</button>

  </div>
</template>

<script>
  export default {
    name: 'register',
    data() {
      return {
        phone: '',
        pwd: '',
      }
    },
    methods:{
      login() {
      	console.log(this.phone + "+" + this.pwd);
      	var url = "http://www.spongebob.site:3000/login";
      	axios({
      		method: 'post',
      		url: url,
      		data:{
      			"phone": this.phone,
      			"pwd":this.pwd
      		}
      	}).then(function(resp) {
      		console.log(resp.data);
      	}).catch(resp => {
      		console.log('请求失败：' + resp.status + ',' + resp.statusText);
      	});
      },

    },
  }
</script>

<style>
</style>
