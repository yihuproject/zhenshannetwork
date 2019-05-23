<template>
    <div class="cooperation_parter">
        <banner img="url(/static/images/parter/home_banner05.png) no-repeat center"></banner>
        <navbar></navbar>
        <div class="cooperation_parter_prospect">
            <slogan title="合作加盟我们的前景"></slogan>
            <div class="cooperation_parter_prospect_img">
                <img src="/static/images/parter/dl_bnt.png" alt="">
                <div class="cooperation_parter_prospect_img_detail">
                    <div class="cooperation_parter_prospect_img_detail_text" v-for="(item,index) in prospect">
                        <span>{{index+1}}</span>
                        <p>{{item}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="cooperation_parter_support">
            <slogan title="合作支持"></slogan>
            <div class="cooperation_parter_support_items">
                <div class="cooperation_parter_support_item" v-for="item in support">
                    <div class="cooperation_parter_support_item_img">
                        <img :src="item.imgPath" alt="">
                    </div>
                    <div class="cooperation_parter_support_item_title">
                        {{item.title}}
                    </div>
                    <div class="cooperation_parter_support_item_detail">
                        {{item.detail}}
                    </div>
                </div>
            </div>
        </div>
        <div class="cooperation_parter_scatter">
            <slogan title="我们的代理商分布"></slogan>
            <dataScroll color="#fff"></dataScroll>
            <div class="cooperation_parter_scatter_img">
                <img src="/static/images/parter/bnt_ditu.png">
            </div>
        </div>
        <div class="cooperation_parter_process">
            <slogan title="加盟代理流程"></slogan>
            <div class="cooperation_parter_process_center">
                <!-- <el-steps direction="vertical" :active="5" space="50">
                    <el-step title="加盟签证" description="签约代理合同（各持一份），并财务汇款"></el-step>
                    <el-step title="提供清单" description="根据提供的资料清单，贵公司提供相关资料信息，并把贵公司域名解析到我们的服务器"></el-step>
                    <el-step title="配置系统" description="后台人员配置代理商系统，并设置折扣和充值预付款"></el-step>
                    <el-step title="提供材料" description="提供销售话术和销售使用的PPT给代理商"></el-step>
                    <el-step title="开展业务" description="提供宣传使用的物料，代理商置换成自己的公司信息和logo开展自身小程序业务"></el-step>
              </el-steps> -->
              <process></process>
            </div>
        </div>
        <contactus></contactus>
        <index-footer></index-footer>
    </div>
</template>

<script>
    import navbar from "./public/Navbar"
    import banner from "./public/banner"
    import slogan from "./public/title"
    import process from "./public/stepLine"
    import indexFooter from "./public/IndexFooter"
    import dataScroll from "./cooperation_parter/dataScroll"
    import contactus from "./cooperation_parter/contactUs"
    export default{
        components: {
            navbar,
            banner,
            indexFooter,
            dataScroll,
            slogan,
            process,
            contactus
        },
        data(){
            return{
                prospect:[
                    "小程序自身行业火热，千亿级市场红利，庞大的用户商家",
                    "微信小程序产品品质获大众认可，50万小程序里有5万小程序由91微信小程序制作",
                    "销售资源共享，除支付宝小程序，不做终端市场，市场资源全部归属代理商",
                    "资深销售、运营经理服务，全国巡回代理培训，助代理商年创收千万"
                ],
                support:[
                    {
                        imgPath:"/static/images/parter/dl_icon_dcb.png",
                        title:"低成本投入",
                        detail:"仅需一次性低额投入，便可随时获取客满微信小程序服务，自定义价格销售，0库存，0压力",
                    },
                     {
                        imgPath:"/static/images/parter/dl_icon_cs.png",
                        title:"产品成熟",
                        detail:"10年互联网+技术经验，服务客户超60万，在业界拥有良好的口碑与知名度",
                    },
                    {
                        imgPath:"/static/images/parter/dl_icon_zjpp.png",
                        title:"自建品牌",
                        detail:"开拓自身用户，打造属于自己的小程序品牌，成为独立运营的小程序提供商",
                    },
                    {
                        imgPath:"/static/images/parter/dl_icon_fwzc.png",
                        title:"服务支持",
                        detail:"专人专线的VIP1对1服务，售后保障的强大技术支持，全程悉心陪伴",
                    },
                    {
                        imgPath:"/static/images/parter/dl_icon_yjsc.png",
                        title:"一键生成",
                        detail:"只需一键生成小程序，便可轻松、低成本的从微信小程序后台中获取自定义装修模板",
                    },
                    {
                        imgPath:"/static/images/parter/dl_icon_pxfn.png",
                        title:"培训赋能",
                        detail:"提供丰富的培训课程及实践，帮助合作商提升品牌价值提高团队绩效",
                    }
                ]
            }
        }
    }
</script>
<style scoped lang="stylus">
    .cooperation_parter
        width: 100%
        height: auto
        .cooperation_parter_prospect
            width: 100%
            height: 52.83rem
            .cooperation_parter_prospect_img
                width: 100rem
                height: 37.53rem
                margin: 0 auto
                display:flex
                flex-flow:row nowrap
                img
                    margin: 0 auto
                    width: 50rem
                    height: 33.33rem
                .cooperation_parter_prospect_img_detail
                    width: 50rem
                    height: 30rem
                    border:3px solid #eee
                    margin-left: -14rem
                    margin-top: 1.5rem
                    border-radius:80px 0 0 0
                    .cooperation_parter_prospect_img_detail_text:after
                        content:""
                        display:table
                        clear:both
                    .cooperation_parter_prospect_img_detail_text
                        width: 41.5rem
                        margin: 2rem 0 2rem 8.3rem
                        span
                            display:inline-block
                            width: 1.5rem
                            height: 1.5rem
                            background:url(/static/images/parter/icon_lc_xhao.png) no-repeat center
                            background-size:cover
                            color:#fff
                            text-align:center
                            line-height: 1.5rem
                            float: left
                            margin-top: 0.2rem
                        p
                           width: 36rem
                           display:inline-block
                           font-size:16px
                           float: left
                           padding:0  1.5rem
                           text-align:justify
        .cooperation_parter_support
            width: 100%
            height: 63.83rem
            background:#F5F7FA
            padding-bottom: 5.16rem
            .cooperation_parter_support_items
                width: 100rem
                height: 48.53rem
                margin: 0 auto
                display:flex
                flex-flow:row wrap
                justify-content:space-between
                align-items:center
                .cooperation_parter_support_item:hover:after
                    width: 0
                .cooperation_parter_support_item:hover:before
                    width: 100%
                .cooperation_parter_support_item:after
                    content:""
                    width: 100%
                    height: 3px
                    background:rgba(255,187,24,1)
                    position:absolute
                    bottom: 0
                    left: 0
                    transition: width .8s ease-in
                .cooperation_parter_support_item:before
                    content:""
                    width: 0
                    height: 3px
                    background:linear-gradient(-28deg,rgba(46,130,255,1),rgba(46,184,255,1));
                    position:absolute
                    bottom: 0
                    left: 0
                    transition: width .8s ease-in
                .cooperation_parter_support_item
                    width: 31.67rem
                    height: 20.67rem
                    background:#fff
                    position:relative
                    .cooperation_parter_support_item_img
                        width: 6.83rem
                        height: 6.83rem
                        margin:2.5rem 12.42rem 0 12.42rem
                    .cooperation_parter_support_item_title
                        width: 28.67rem
                        padding:0.5rem 1.5rem 0 1.5rem
                        text-align:center
                        line-height:3rem
                        font-size:18px
                        color:#333
                    .cooperation_parter_support_item_detail
                        width: 28.67rem
                        padding:0 1.5rem
                        text-align:center
                        line-height: 2.5rem
                        font-size:14px
                        color:#999
        .cooperation_parter_scatter
            width: 100%
            height: 105rem
         .cooperation_parter_scatter_img
            width: 100rem
            height: 76.4rem
            margin: 0 auto
            img
                margin-left: 12.35rem
                margin-top: 0.5rem
        .cooperation_parter_process
            width: 100%
            height: 51.3rem
            background:rgba(246,247,250,1)
            .cooperation_parter_process_center
                width: 100rem
                height: 36.03rem
                margin: 0 auto
</style>
