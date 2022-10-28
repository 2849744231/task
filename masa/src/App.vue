<template>
  <div class="common-layout">
    <el-container>
      <!-- 边距，左 -->
      <el-aside width="204px">
        <Nav/>
      </el-aside>
      <el-container>
        <!-- 右，头 -->
        <el-header>
          <Head/>
        </el-header>
        <!-- 右，内容 -->
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
    <!-- 弹窗?? -->
    <Pop/>
  </div>
</template>


<script>
import Nav from '@/components/Nav';
import Head from '@/components/Head';
import Pop from '@/components/Pop';

export default {
  name: 'App',
  components: {
    Nav,
    Head,
    Pop
  }
}
</script>
<style>
@import "assets/css/reset.css";
.el-aside,
.el-header{
  background-color: #2a3238;
}
.el-aside{
  height: 1388px; 
  box-shadow: #000 1px 0 3px; 
}
.el-header{
  height: 81px;

}
</style>
