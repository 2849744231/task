<template>
  <div class="addPro">
    <el-button type="primary" class="addBtn" style="float:right;">新增</el-button>
    <el-tabs
    v-model="activeName"
    type="card"
    class="demo-tabs"
    @tab-click="handleClick"
  >
    <el-tab-pane label="补充协议1" name="first">
        <el-button type="warning" plain class="remBtn">删除</el-button>
        <el-input
            v-model="textarea"
            maxlength="500"
            rows="7"
            placeholder="协议内容"
            show-word-limit
            type="textarea"
        />
        
    </el-tab-pane>
    <el-tab-pane label="补充协议2" name="second">无数据</el-tab-pane>
    <el-tab-pane label="补充协议3" name="third">无数据</el-tab-pane>
    <el-button type="primary" class="seBtn">保存</el-button>
  </el-tabs>
  </div>
</template>

<script>
export default {
    name:"AddPro",
    data(){
        return {
            activeName:'first'
        }
    }
}
</script>

<style lang="less" scoped>
    .addPro{
        height: 316px;
        // background-color: #096;
        .addBtn{
            float: right;
        }
        .remBtn{
            position: absolute;
            top: 1px;right: 1px;
            z-index: 9999;
        }
        .seBtn{
            width:76px;
            height:50px;
            font-size: 18px;
            margin: 42px 0 0 8px;
        }
        .demo-tabs{
            margin-top: -4px;
            // background-color: #096;
        }

    }

</style>