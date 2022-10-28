<template>
  <div class="pro">
    <!-- pro的顶部 -->
    <div class="pro-top">
        <el-button class="pro-but" type="primary">
            添加产品
        </el-button>
        <p>购进总指标:<span>￥152.65</span></p>
        <p>
            指标按季度分解（万元）:
            <span>【Q1】￥12.5,</span>
            <span>【Q2】￥12.5,</span>
            <span>【Q3】￥12.5,</span>
            <span>【Q4】￥12.5</span>            
        </p>
        <p>
            纯销总指标（万元）：
            <span>￥152.65</span>
        </p>
        <div class="top-Bo">
            <span>产品：</span>
            <el-button>选择产品</el-button>
            <span><em>美复胶丸&nbsp;24粒/盒</em></span>
            <span>协议效期</span>
            <el-button>2020-02-01~2020-05-01</el-button>
            <el-button class="rig-but" type="warning" plain>删除</el-button>
        </div>
    </div>
    <!-- pro的选择区域 -->
    <div class="pro-sel" > 
        <div class="sel">
            <div class="sel-top">
                <span>协议价(元)</span>
                <span>协议价(元)</span>
                <span>协议价(元)</span>
                <span>协议价(元)</span>
                <span>协议价(元)</span>
                <span>协议价(元)</span>
                <span>协议价(元)</span>
            </div>
            <div class="top-val">
                <el-input v-model="input" placeholder="请输入" />
                <el-input v-model="input" placeholder="请输入" />
                <el-input v-model="input" placeholder="请输入" />
                <el-input v-model="input" placeholder="请输入" />
                <el-input v-model="input" placeholder="请输入" />
                <el-input v-model="input" placeholder="请输入" />
                <el-input v-model="input" placeholder="请输入" />
            </div>
            <div class="sel-bot">
                <span>协议价(元)</span>
                <span>协议价(元)</span>
                <span>协议价(元)</span>
                <span>协议价(元)</span>
                <span>协议价(元)</span>
                <span>协议价(元)</span>
                <span>协议价(元)</span>
                <span>协议价(元)</span>
            </div>
            <div class="bot-val"> 
                <el-input v-model="input" placeholder="请输入" />
                <el-button>
                    <span>单选项1</span>
                    <img src="@/assets/img/xiangxia.png" />
                </el-button>
                <el-input v-model="input" placeholder="请输入" />
                <el-button>
                    <span>单选项1</span>
                    <img src="@/assets/img/xiangxia.png" />
                </el-button>
                <el-input v-model="input" placeholder="请输入" />
                <el-input v-model="input" placeholder="请输入" />
                <el-button>
                    2020-05-15
                </el-button>
                <el-button>
                    2020-05-15
                </el-button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"ProPo"
}
</script>

<style lang="less" scoped>
.pro{
    .pro-top{
        height: 108px;
        .pro-but{
            float: left;
            margin-top: 12px;           
        }
        p{
            display: inline-block;
            height: 58px;
            line-height:58px;
            color:#666;
            margin-left: 30px;
            span{
                margin-left: 5px;
                color: rgb(67, 66, 66);
            }
        }
        .top-Bo{
            height: 40px;
            color: #666;
            // background-color: #ccc;
            span{
                display: inline-block;
                height: 50px;
                line-height: 50px;
                margin-left: 28px;
            }
            span:nth-of-type(3){
                margin:0 10px 0 50px;
            }
            .el-button:not(.rig-but){
                display: inline-block;
                margin-top: -5px;
                margin-left: 10px;
                color: #000;
            }
            .rig-but{
                float: right;
                margin-top: 5px;
            }
            em{
                color: #4d8cfc;
                font-size: 14px;
            }
        }
    }
    .pro-sel{
        display: flex;
        height: 240px;
        // background-color: #096;
        .sel{
            margin: auto;
            width: 1249px;
            height: 200px;
            // background-color: #666;
            .sel-top,
            .sel-bot{
                height: 30px;
                line-height: 30px;
                border:1px #ddd solid;
                // background-color: red;
                span:nth-of-type(1){
                    margin-left: 10px;
                }
                span:not(span:nth-of-type(1)){
                    margin-left: 100px;                   
                }
            }
            .sel-bot{
                padding-top: 15px;
                border-color: transparent;
                border-top-color: #ddd;
                span:not(span:nth-of-type(1)){
                    margin-left: 80px;                   
                }
            }
            .top-val{
                height: 40px;
                line-height: 40px;
                .el-input{
                    display: inline-block;
                    width: 145px;
                    &:not(.el-input:nth-child(1)){
                        margin-left: 31px;
                    }
                }
            }
            .bot-val{
                height: 70px;
                .el-input{
                    display: inline-block;
                    width: 125px;
                    margin-top: 15px;
                    &:not(.el-input:nth-child(1)){
                        margin-left: 31px;
                    }
                }
                .el-button{
                    display: inline-flex;
                    justify-content: space-between;
                    width: 125px;
                    margin-top: 15px;
                    margin-left: 31px;
                    img{
                        height: 7px;
                        width: 12px;
                        margin-left: 48px;
                    }
                }

            }
        }
    }
}
</style>