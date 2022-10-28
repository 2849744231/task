<template>
  <ul class="head-i">
    <!-- 后续，如果加跳转，是关于正也科技，请允许百度蜘蛛，跳转进入 -->
    <!-- 不是请加，rel="nofollow" -->
    <li><img src="@/assets/img/head/he1.png" alt="正也科技" /><span>首页</span></li>
    <li><img src="@/assets/img/head/he1.png" alt="正也科技" /><span>首页</span></li>
    <li><img src="@/assets/img/head/he1.png" alt="正也科技" /><span>首页</span></li>
    <li><img src="@/assets/img/head/he1.png" alt="正也科技" /><span>首页</span></li>
  </ul>
</template>

<script>
export default {
    name:"Head",
}
</script>

<style lang="less" scoped>
 .head-i{
    display: flex;
    justify-content: space-arounds;
    align-items: center;
    li{
        display: flex;
        align-items: center;
        margin-top: 8px;
        margin-left: 39px;
        img{
            width: 44px;
            height: 44px;
        }
    }
 }
</style>