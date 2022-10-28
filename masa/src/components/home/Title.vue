<template>
  <div class="con-nav-title-ti">
      <hr class="line-d" />
      <div class="ti-con">
        <div class="line"  />
        <div><span>{{val[1]}}</span>{{val[0]}}</div>   
        <div class="line"  />  
      </div>
    </div>
</template>
<script>
export default {
    name:"Title",
    props:["val"] 
}
</script>

<style lang="less" scoped>
 .con-nav-title-ti{
    height: 50px;
    background-color: #f5f5f5;
    .line-d{
      border: 1px solid #ebebeb;
    }
    .ti-con{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 44px;
      div:nth-child(2){
        span{
          display: inline-block;
          width: 20px;
          height: 20px;
          line-height: 20px;
          text-align: center;
          margin-right: 12px;
          background-color: #4e8dff;
          border-radius: 15px;
        }
      }
      .line{
        width: 38%;
        border-bottom: 1px dashed var(--el-border-color);       
      }
    }
    
  }
</style>