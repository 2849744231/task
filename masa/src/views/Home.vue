<template>
  <div class="home">
    <!-- 后续可以考虑，子路由嘛 -->
    <div class="con-nav">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>年度协议管理</el-breadcrumb-item>
        <el-breadcrumb-item>二级商协议</el-breadcrumb-item>
        <el-breadcrumb-item>新增二级商协议</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 显示，标题 -->
    <h1 class="con-nav-title">新增二级商协议</h1>
    <!-- 线，标题 -->
    <Title :val="val1" />
      <!-- 协议主体 -->
      <Main></Main>
    <Title :val="val2" />
      <!-- 产品政策,主体 -->
      <ProPo></ProPo>
    <Title :val="val3" />
      <!-- 补充协议,主体 -->
      <AddPro></AddPro>
  </div>
</template>

<script>

import Title from '@/components/home/Title';
import Main from '@/components/home/Main';
import ProPo from '@/components/home/ProPo';
import AddPro from '@/components/home/AddPro';

export default {
  name: 'Home',
  data(){
    return {
      val1:["协议主体",1],
      val2:["产品政策",2],
      val3:["补充协议",3],
    }
  },
  components:{
    Title,Main,ProPo,AddPro
  },

}
</script>
<style lang="less" scoped>
.home{
  .con-nav{
    height: 32px;
  }
  .con-nav-title{
    height: 34px;
    line-height: 34px;
    // background-color: #096;
  }

}
</style>
