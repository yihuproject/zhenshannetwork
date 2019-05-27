<template>
    <div class="stepline">
        <div class="stepline_center">
            <div class="step" v-for="(item,index) in obj">
                <div class="step_icon"  :style="{color:IconColor,borderColor:IconColor}">{{index+1}}
                    <i class="step_line"></i>
                </div>
                <div class="step_content">
                    <p class="step_content_title"  :style="{color:TitleColor}">
                        {{item.title}}
                    </p>
                    <p class="step_content_detail"  :style="{color:DetailColor}">
                        {{item.detail}}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                TitleColor:"#333",
                DetailColor:"#999",
                IconColor:"rgba(46,130,255,1)",
                obj:[
                    {
                        title:"加盟签证",
                        detail:"签约代理合同（各持一份），并财务汇款"
                    },
                    {
                        title:"提供清单",
                        detail:"根据提供的资料清单，贵公司提供相关资料信息，并把贵公司域名解析到我们的服务器"
                    },
                    {
                        title:"配置系统",
                        detail:"后台人员配置代理商系统，并设置折扣和充值预付款"
                    },
                    {
                        title:"提供材料",
                        detail:"提供销售话术和销售使用的PPT给代理商"
                    },
                    {
                        title:"开展业务",
                        detail:"提供宣传使用的物料，代理商置换成自己的公司信息和logo开展自身小程序业务"
                    }
                ]
            }
        }
    }
</script>

<style>
    .stepline{
        width: 100%;
        height: 100%;
    }
    .stepline .stepline_center{
        width: 88rem;
        height: 100%;
        margin: 0 auto;
    }
    .stepline .stepline_center .step{
        width: 88rem;
        min-height: 5.83rem;
        position: relative;
    }
    .stepline .stepline_center .step .step_icon{
        width: 2.915rem;
        height: 2.915rem;
        line-height: 2.915rem;
        border-width: 1px;
        border-radius: 50%;
        border-style: solid;
        text-align: center;
        font-size: 18px;
        float: left;
        position: absolute;
        top: 20%;
        left: 0;
    }
    .stepline .stepline_center .step .step_icon i{
        width: 2px;
        height: 100%;
        background: rgba(46,130,255,1);
        position: absolute;
        top: 2.915rem;
        left: 1.3rem;
    }
    .stepline .stepline_center .step .step_content{
        width: 80.3rem;
        min-height: 5rem;
        background:#fff;
        float: left;
        position: absolute;
        top: 0;
        left: 5rem;
        padding-left: 2rem;
        line-height: 2.5rem;
        position: relative;
    }
    .stepline .stepline_center .step .step_content:before{
        content: "";
        position: absolute;
        top: 1.5rem;
        left: -2rem;
        border:1rem solid transparent;
        border-right-color:#fff;
    }
    .stepline .stepline_center .step .step_content .step_content_title{
        font-size: 18px;
    }
    .stepline .stepline_center .step .step_content .step_content_detail{
        font-size: 14px;
    }
    
</style>
