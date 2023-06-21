<template lang="">
  <div id="container">
    <div class="title">
    
    </div>
   <div class="input">
    <span>  后台管理系统</span>
    <el-input v-model="name" placeholder="请输入用户名" style="width: 450px; height: 80px; margin-top:40px"></el-input>
    <el-input round="true" v-model="password" placeholder="请输入密码" style="width: 450px;height: 80px; margin-top:40px" ></el-input>
    <el-button class="btn" @click="login" type="primary" size="default" style="width: 450px;height: 80px;margin-top:40px" >登录</el-button>
   </div>

  </div>
</template>
<script>
import { ElNotification } from 'element-plus'
import store from '@/store'
export default {
  name: "Login",
  data () {
    return {
      name: "",
      password: "",
    }
  },
  computed: {
    disabled () {
      return this.name.length == 0 || this.password.length == 0
    }
  },
  methods: {
    login () {
      store.commit("registUserInfo", {
        name: this.name,
        password: this.password
      })
      // 通知
      ElNotification.success({
        title: 'Success',
        message: 'This is a success message',
        offset: 100,
      })
      // 登录跳转
      setTimeout(() => {
        this.$router.push({ name: "home" })
      }, 1000)
    }
  }
}
</script>
<style scoped>
html {
  height: 100%;
  width: 100%;
}
#container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.title {
  flex: 0 0 40%;
  height: 900px;
  width: 100%;
  text-align: center;
  line-height: 900px;
  background-image: url(https://pbs.twimg.com/media/DjS4XAgX4AMBWTN?format=jpg&name=900x900);
}
.input {
  flex: 0 0 60%;
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  height: 200px

}
.input .btn{
  display: block;
  margin: 0 auto;
}
</style>