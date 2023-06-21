<template>
  <el-container>
    <el-aside width="250px">
      <el-container>
        <div>后台管理系统</div>
      </el-container>
      <el-menu
        :default-active="$route.path"
        @select="selectItem"
        :default-openeds="['1']"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>订单管理</span>
          </template>
          <el-menu-item index="/home/order/0">普通订单</el-menu-item>
          <el-menu-item index="/home/order/1">秒杀订单</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><location /></el-icon>
            <span>商品管理</span>
          </template>
          <el-menu-item index="/home/goods/0">普通商品</el-menu-item>
          <el-menu-item index="/home/goods/1">秒杀商品</el-menu-item>
          <el-menu-item index="/home/goods/2">今日推荐</el-menu-item>
          <el-menu-item index="/home/category">商品分类</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="3">
          <template #title>
            <el-icon><location /></el-icon>
            <span>店长管理</span>
          </template>
          <el-menu-item index="/home/ownerlist">店长列表</el-menu-item>
          <el-menu-item index="/home/ownerreq">店长申请</el-menu-item>
          <el-menu-item index="/home/ownerorder">店长订单</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="4">
          <template #title>
            <i class="el-icon-s-ticket"></i>
            <span>财务管理</span>
          </template>
          <el-menu-item index="/home/tradeinfo">交易明细</el-menu-item>
          <el-menu-item index="/home/tradelist">账务对交单</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="5">
          <template #title>
            <el-icon><location /></el-icon>
            <span>基础管理</span>
          </template>
          <el-menu-item index="/home/data">数据统计</el-menu-item>
        </el-sub-menu>
      </el-menu></el-aside
    >
    <el-container>
      <el-header style="margin: 0; padding: 0; height: 80px">
        <el-container style="margin: 0; padding: 0; height: 80px">
          <div style="margin: auto; margin-left: 100px">
            <h1>欢迎您登录后台管理系统!</h1>
          </div>
          <div style="margin: auto; margin-right: 50px">
            <el-button type="primary" size="default" @click="logout"
              >注销</el-button
            >
          </div></el-container
        >
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import store from '@/store'
import Mock from '@/mock/Mock'

export default {
  name: "Login",
  data () {
    return {
      name: ''
    }
  },
  created () {
    console.log(Mock.getOrder())
    console.log(Mock.getChartsData())
  },
  methods: {
    logout () {
      store.commit('clearUserInfo')
      this.$router.push({ name: 'login' })
    },
    selectItem (index) {
      this.$router.push(index)
    },
  }
}
</script>
<style lang="">
</style>