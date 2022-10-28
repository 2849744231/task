<template>
  <!-- 顶部，商标 -->
  <div class="navTop">
    <!-- 这里，应该让百度蜘蛛，看到 -->
    <h1>
      <img src="@/assets/img/logo.png" title="正也科技" alt="上海正也科技"/>
    </h1>
  </div>
  <!-- 导航，区域 -->
  <div class="navList">
    <ul class="nav">
      <li>
        <router-link to="/">
          <img src="@/assets/img/icon/icon1.png" />
          <span>功能功能功能A</span>
          <span>></span>
        </router-link>
      </li>
      <li>
        <router-link to="/">
          <img src="@/assets/img/icon/icon1.png" />
          <span class="anyway-nav">功能功能B</span>
          <span>></span>
        </router-link>
      </li>
      <li>
        <router-link to="/">
          <img src="@/assets/img/icon/icon1.png" />
          <span  class="anyway-nav">功能功能E</span>
          <span>></span>
        </router-link>
      </li>
      <li>
        <router-link to="/">
          <img src="@/assets/img/icon/icon1.png" />
          <span>功能功能功能D</span>
          <span>></span>
        </router-link>
      </li>
      <li>
        <router-link to="/">
          <img src="@/assets/img/icon/icon1.png" />
          <span  class="anyway-nav">功能功能A</span>
          <span>></span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Nav'
 
}
</script>
<style scoped lang="less">
.navTop{
  display: flex;
  h1{
    margin: auto;
    img{
      width: 191px;
      height: 80px;
    }
  }
}
.navList{
  .nav{
    li{
      margin: 0 auto;
      margin-top: 17px;
      width: 180px;
      a{
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #bababa;
        &.router-link-active{
          color: #bababa;
        }
        img{
          width: 25px;
          height: 25px;
        }
        span:nth-of-type(1){
          margin-right: 12px;
          font-size: 14px;
          &.anyway-nav{
               margin-right: 39px;
           }
        }
        span:nth-of-type(2){         
          font-size: 18px;
        }
      }
    }
  }

}

</style>
