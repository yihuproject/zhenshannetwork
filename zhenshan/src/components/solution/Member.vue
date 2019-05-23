<template>
    <div class="solution_member">
        <navbar></navbar>
        <banner img="url(/static/images/solution_cases/home_banner01.png) no-repeat center"></banner>
        <div class="solution_member_explain">
            <slogan :title="solutionMember.title" :detail="solutionMember.detail"></slogan>
            <div class="solution_member_explain_content">
                <div class="solution_member_explain_content_text">
                    <p>
                            会员卡产品是商户营销的基础能力，满足商户对于持有会员卡用户的营销需求会员卡功能主要围绕会员卡的创建、领取、修改以及同步交易设置了一系列接口，开发者可以根据自己想实现的效果选择合适的接口进行开发，以实现行业各有特色的会员卡应用。
                    </p>
                    <p>
                        具有灵活的自主性，商户可以根据自己的业务场景，在任何环节下只需用户授权开通会员卡，无需用户填写会员信息，授权成功后自动给用户开通会员卡。并且可将会员卡的积分变化和交易变化等同步到支付宝卡券包。
                    </p>
                </div>
                <div class="solution_member_explain_content_img">
                    <img src="/static/images/solution_cases/why_bnt_bj.png">
                </div>
            </div>
        </div>
        <div class="solution_member_func">
            <slogan :title="solutionFunc.title" :detail="solutionFunc.detail"></slogan>
            <ul class="solution_member_func_content">
                <li v-for="item in tagArr">
                    <div class="solution_member_func_content_container" :style="{background:item.img,backgroundSize:size}">
                        <span>{{item.title}}</span>
                        <i>{{item.detail}}</i>
                    </div>
                </li>
            </ul>
        </div>
        <div class="solution_member_wise">
            <slogan :title="solutionWise.title"></slogan>
             <div class="solution_member_wise_content">
                <div class="solution_member_wise_content_text">
                    <p>
                            对于品牌商
                    </p>
                    <p>
                        打造品牌的会员卡营销，为您实现品牌的全数字化经营，
驱动品牌智能发展。
                    </p>
                </div>
                <div class="solution_member_wise_content_img">
                    <img src="/static/images/solution_cases/why_bnt_pps.png">
                </div>
            </div>
        </div>
        <div class="solution_member_customer">
                     <div class="solution_member_customer_content">
                        <div class="solution_member_customer_content_img">
                            <img src="/static/images/solution_cases/why_bnt_xfz.png">
                        </div>
                        <div class="solution_member_customer_content_text">
                                                    <p>
                                                            对于消费者
                                                    </p>
                                                    <p>
                                                        服务统一，体验升级，让品牌客户更加便捷、
                        舒适地购物，打造品牌忠诚度
                                                    </p>
                        </div>
                    </div>
                </div>
        <index-footer></index-footer>
    </div>
</template>

<script>
    import navbar from "../public/Navbar"
    import slogan from "../public/title"
    import banner from "../public/banner"
    import indexFooter from "../public/IndexFooter"
    export default {
        components: {
            navbar,
            slogan,
            banner,
            indexFooter
        },
        data(){
            return{
                solutionMember:{
                    title:"什么叫做微会员？",
                    detail:"专注于提升门店会员管理和营销效率， 提升门店核心竞争力。"
                },
                solutionFunc:{
                    title:"微会员特色功能",
                    detail:"应用潮流工具，做最接地气的会员营销"
                },
                 solutionWise:{
                    title:"微会员，让门店经营更智慧"
                },
                size:"cover",
                tagArr:[
                    {
                        img:"url(/static/images/solution_cases/why_icon_yhq.png) no-repeat left",
                        title:"优惠券",
                        detail:"多种优惠券营销"
                    },
                    {
                        img:"url(/static/images/solution_cases/why_icon_hb.png) no-repeat left",
                        title:"红包",
                        detail:"有好玩的红包营销"
                    },
                    {
                        img:"url(/static/images/solution_cases/why_icon_yy.png) no-repeat left",
                        title:"预约管理",
                        detail:"随时预约服务"
                    },
                    {
                        img:"url(/static/images/solution_cases/why_icon_hygl.png) no-repeat center",
                        title:"会员积分",
                        detail:"积分兑换好礼"
                    },
                    {
                        img:"url(/static/images/solution_cases/why_icon_fkcz.png) no-repeat center",
                        title:"付款充值",
                        detail:"在线付款，快速充值"
                    },
                    {
                        img:"url(/static/images/solution_cases/why_icon_xfjl.png) no-repeat center",
                        title:"消费记录",
                        detail:"随时查看订单记录"
                    },
                    {
                        img:"url(/static/images/solution_cases/why_icon_gywm.png) no-repeat center",
                        title:"关于我们",
                        detail:"让用户更了解我们"
                    },
                    {
                        img:"url(/static/images/solution_cases/why_icon_xwgl.png) no-repeat center",
                        title:"新闻管理",
                        detail:"随时查阅新闻资讯"
                    },
                    {
                        img:"url(/static/images/solution_cases/why_icon_cpgl.png) no-repeat center",
                        title:"产品管理",
                        detail:"随时分类，自动上下架"
                    },
                     {
                        img:"url(/static/images/solution_cases/why_icon_yhbd.png) no-repeat center",
                        title:"用户表单",
                        detail:"收集用户录入信息"
                    },
                    {
                        img:"url(/static/images/solution_cases/why_icon_kfzx.png) no-repeat center",
                        title:"客服咨询",
                        detail:"找客服在线解答"
                    },
                     {
                        img:"url(/static/images/solution_cases/why_icon_sjfx.png) no-repeat center",
                        title:"数据分析",
                        detail:"多场景数据采集分析"
                    },
                    
                    
                ]
            }
        }
            
        
    }
</script>
<style scoped lang="stylus">
    .solution_member
        width: 100%
        height: auto
        .solution_member_explain
            width: 100rem
            height: 45.08rem
            margin: 0 auto
            .solution_member_explain_content
                width: 100rem
                height: 29.78rem
                display:flex
                flex-flow:row nowrap
                justify-content:space-between
                align-items:center
                .solution_member_explain_content_text
                    width: 55%
                    height: 29.78rem
                    line-height: 2.4rem
                    color:#666
                    font-size:16px
                    text-align:justify
                    p
                        padding: 1rem
                .solution_member_explain_content_img
                    width: 40%
                    height: 29.78rem
        .solution_member_func
            width: 100%
            height: 53rem
            background:#F5F7FA
           .solution_member_func_content
               width: 100rem
               height: 28.83rem
               margin: 0 auto
               display:flex
               flex-flow:row wrap
               justify-content:space-between
               align-items:center
               li
                    height: 7.3rem
                    width: 21.83rem
                    .solution_member_func_content_container
                        height: 7.3rem
                        width: 21.83rem
                        position:relative
                        span
                            font-size:18px
                            color:#333
                            position:absolute
                            top: 1.5rem
                            left: 8rem
                        i
                            position:absolute
                            top: 4rem
                            left: 8rem
                            font-size:14px
                            color:#999
        .solution_member_wise
            width: 100rem
            height: 55.167rem
            margin: 0 auto
            .solution_member_wise_content
                width: 100rem
                height: 35.387rem
                display:flex
                flex-flow:row nowrap
                justify-content:space-between
                align-items:center
                .solution_member_wise_content_text
                    width: 35%
                    height: 15.387rem
                    line-height: 2.4rem
                    color:#666
                    font-size:16px
                    text-align:justify
                    margin: 10rem 0
                    p:first-child
                        padding: 1rem
                        color:#333
                        font-size:24px
                    p:last-child
                        padding: 1rem
                        color:#666
                        font-size:16px
                .solution_member_wise_content_img
                    width: 55%
                    height: 35.387rem
        .solution_member_customer:before
            display:table
            content:""
        .solution_member_customer
            width: 100%
            height: 45rem
            background:#F5F7FA
            .solution_member_customer_content
                width: 100rem
                height: 40rem
                margin: 0 auto
                margin-top: 5rem
                display:flex
                flex-flow:row nowrap
                justify-content:space-between
                align-items:center
                .solution_member_customer_content_text
                    width: 35%
                    height: 20rem
                    margin: 10rem 0
                    line-height: 2.4rem
                    color:#666
                    font-size:16px
                    text-align:justify
                    p:first-child
                        padding: 1rem
                        color:#333
                        font-size:24px
                    p:last-child
                        padding: 1rem
                        color:#666
                        font-size:16px
                .solution_member_customer_content_img
                    width: 55%
                    height: 40rem
</style>
