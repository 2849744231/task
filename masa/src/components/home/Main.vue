<template>
    <div class="main-1">
        <!-- 表,上部分 -->
        <div class="top">
            <!-- 上，左 -->
            <ul class="left">
                <li>
                    <span><span class="red"></span>协议客户:</span>
                    <el-button class="mar black-f">选择用户</el-button>
                    <span class="black-f">上海正也医药有限公司</span>
                </li>
                <li>
                    <span class="mar">购进指标:</span>
                    <el-button class="mar black-f" >金额</el-button>
                    <el-input 
                        v-model="input" 
                        placeholder="输入金额/数量"
                        class="mar"
                         />
                </li>
                <li>
                    <span class="mar">协议客户:</span>
                    <el-button class="mar black-f">选择用户</el-button>
                    <span>
                        <el-tag
                            v-for="tag in tags"
                            :key="tag.name"
                            class="mx-1"
                            closable
                            :type="tag.type"
                            style="
                            width: 83px;height: 31px; 
                            color:#77a9fd;
                            "
                        >
                            {{ tag.name }}
                        </el-tag>
                    </span>
                </li>
            </ul>
            <!-- 上，右 -->
            <ul class="right">
                <li>
                    <span class="mar" >协议状态:</span>
                    <el-select 
                        v-model="value" 
                        filterable 
                        placeholder="正常"
                        class="mar"
                        style="width:200px"
                        >
                    </el-select>
                    
                </li>
                <li>
                    <span class="mar">纯销指标:</span>
                    <el-button class="mar black-f" >金额</el-button>
                    <el-input 
                        v-model="input" 
                        placeholder="输入金额/数量"
                        class="mar"
                         />
                </li>
                <li>
                    <span class="mar">签订时间:</span>
                    <span class="mar black-f">2020-02-01&nbsp;18:25</span>
                </li>
            </ul>
        </div>
        <!-- 表,下部分 -->
        <div class="bottom"> 
            <div class="bot-sel"> 
                <span>纯销指标:</span>
                <el-button>指定渠道<img src="@/assets/img/xiangxia.png"></el-button>
                <span>请选择渠道</span>
            </div>
            <div class="bot-cen" >
                <div class="cen" >
                    <div class="cen-t" >
                        <div>指定渠道编码</div>
                        <div>指定渠道名称</div>
                    </div>
                    <ul class="cen-val">
                        <li v-for="item in seVal"><span>{{item.xCode}}</span><span>{{item.company}}</span></li>
                    </ul>  
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Main",
    data(){
        return {
            tags:[{ name: '全国', type: '' }],
            seVal:[
                {xCode:"BJ000090",company:"宁波九周有限公司"},
                {xCode:"BJ000090",company:"宁波九周有限公司"},
                {xCode:"BJ000090",company:"宁波九周有限公司"},
            ]
        }
    }
}
</script>

<style lang="less" scoped>
.main-1 {
    .top {       
        height: 160px;
        // background-color: #bababa;
        .left,
        .right {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            float: left;
            width: 642px;
            height: 100%;

            li {
                width: 642px;
                height: 45px;
                line-height: 45px;
                // background-color: #076;

                .black-f {
                    color: #000;                   
                }
                span {
                    color: #666;

                    & span.red::before {
                        content: "*";
                        color: red;
                        margin-left: 4px;
                    }
                }
                span:nth-of-type(2),
                .mar {
                    margin-left: 15px;
                }
            }
        }

        .left {
            li:nth-child(2){
                .el-input{
                    width: 360px;
                    
                } 
                .el-button{
                    justify-content: flex-start;
                    width: 88px;
                    &::after {
                        content: "";
                        border: 6px  solid transparent;
                        border-top-color:#000;
                        margin: 7px 0 0 17px;
                    }
                }
                
            }
            li:nth-child(3){
                .el-tag{
                    display: inline-flex;
                    justify-content: space-between;
                    
                }
            }
            
        }
        .right{
            li:nth-child(2){
                .el-button{
                    justify-content: flex-start;
                    width: 88px;
                }
                .el-input{
                    width: 350px;
                    
                } 
            }
            li:nth-child(3){
                span:nth-of-type(2){
                    font-size: 14px;
                }
                
            }
        }
    }
    .bottom{
        .bot-sel{
            height: 45px;
            line-height: 45px;
            // background-color: #096;
            span:nth-child(1){
                margin-left: 15px;
                color: #666;
            }
            span:nth-of-type(2),
            .el-button{
                margin-left: 30px;
            }
            .el-button{
                justify-content: space-between;
                width: 80px;
                padding-left: 8px;
                color: #000;
                img{
                    height: 7px;
                    width: 12px;
                   
                }
               
            }
        }
        .bot-cen{
            display: flex;
            width: 1289px;
            height: 202px;
            // background-color: #ccc;
            .cen{
                width: 1020px;
                height: 202px;
                margin: auto;
                // background-color: #096;
                .cen-t,
                .cen-val{          
                    display: flex;
                    align-items: center;         
                    height: 35px;
                    text-indent: 12px;                  
                    // background-color: #189;
                }
                .cen-val{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    height: 160px;
                    margin-left: -60px;
                    // background-color: #ccc;
                }
                .cen-val li{
                    padding-bottom: 12px;
                    border-bottom: 1px solid #e5e5e5;
                }
                .cen-val li span{
                    display: inline-block;
                    margin-left: -11px;
                    margin-top: 10px;
                }
                .cen-t div,
                .cen-val li span{
                    width: 487px;                  
                }
            }        
        }
    }
}
</style> 