<template>
    <div class="solution_member">
        <navbar></navbar>
        <banner isShow="true" text="立即体验" bLink="/product_member" color="#fff" fcolor="#7f00ff" img="url(/static/images/solution_cases/home_banner01.png) no-repeat center"></banner>
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
                <li class="solution_member_func_content_li" v-for="item in tagArr">
                    <div class="solution_member_func_content_container">
                        <div class="solution_member_func_content_container_poi">
                            <img :src="item.img" alt="">
                            <span>{{item.title}}</span>
                            <i>{{item.detail}}</i>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <slogan :title="solutionWise.title"></slogan>
        <icontent :bgcolor="solutionWise.color" :ltitle="solutionWise.ltitle" :detail="solutionWise.content" :direction="solutionWise.direction" :img="solutionWise.img"></icontent>
        <icontent :bgcolor="customer.color" :title="customer.title" :ltitle="customer.ltitle" :detail="customer.content" :direction="customer.direction" :img="customer.img"></icontent>
        <index-footer></index-footer>
    </div>
</template>

<script>
    import navbar from "../public/Navbar"
    import slogan from "../public/title"
    import banner from "../public/banner"
    import icontent from "../public/item"
    import indexFooter from "../public/IndexFooter"
    export default {
        components: {
            navbar,
            slogan,
            banner,
            icontent,
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
                    title:"微会员，让门店经营更智慧",
                    img:"/static/images/solution_cases/why_bnt_pps.png",
                    ltitle:"对于品牌商",
                    color:"#fff",
                    content:[
                        "打造品牌的会员卡营销，为您实现品牌的全数字化经营，驱动品牌智能发展。"
                    ],
                    direction:"row-reverse",
                },
                size:"cover",
                customer:{
                    color:"#F5F7FA",
                    ltitle:"对于消费者",
                    direction:"row",
                    img:"/static/images/solution_cases/why_bnt_xfz.png",
                    content:[
                        "服务统一，体验升级，让品牌客户更加便捷、 舒适地购物，打造品牌忠诚度"
                    ]
                },
                tagArr:[
                    {
                        img:"/static/images/solution_cases/why_icon_yhq.png",
                        title:"优惠券",
                        detail:"多种优惠券营销"
                    },
                    {
                        img:"/static/images/solution_cases/why_icon_hb.png",
                        title:"红包",
                        detail:"有好玩的红包营销"
                    },
                    {
                        img:"/static/images/solution_cases/why_icon_yy.png",
                        title:"预约管理",
                        detail:"随时预约服务"
                    },
                    {
                        img:"/static/images/solution_cases/why_icon_hygl.png",
                        title:"会员积分",
                        detail:"积分兑换好礼"
                    },
                    {
                        img:"/static/images/solution_cases/why_icon_fkcz.png",
                        title:"付款充值",
                        detail:"在线付款，快速充值"
                    },
                    {
                        img:"/static/images/solution_cases/why_icon_xfjl.png",
                        title:"消费记录",
                        detail:"随时查看订单记录"
                    },
                    {
                        img:"/static/images/solution_cases/why_icon_gywm.png",
                        title:"关于我们",
                        detail:"让用户更了解我们"
                    },
                    {
                        img:"/static/images/solution_cases/why_icon_xwgl.png",
                        title:"新闻管理",
                        detail:"随时查阅新闻资讯"
                    },
                    {
                        img:"/static/images/solution_cases/why_icon_cpgl.png",
                        title:"产品管理",
                        detail:"随时分类，自动上下架"
                    },
                     {
                        img:"/static/images/solution_cases/why_icon_yhbd.png",
                        title:"用户表单",
                        detail:"收集用户录入信息"
                    },
                    {
                        img:"/static/images/solution_cases/why_icon_kfzx.png",
                        title:"客服咨询",
                        detail:"找客服在线解答"
                    },
                     {
                        img:"/static/images/solution_cases/why_icon_sjfx.png",
                        title:"数据分析",
                        detail:"多场景数据采集分析"
                    }
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
                    width: 24rem
                    .solution_member_func_content_container
                        transition:all .3s ease-in
                        height: 7.3rem
                        width: 22rem
                        position:relative
                        border-radius:50px
                        background:#fff
                        .solution_member_func_content_container_poi
                            height: 7.3rem
                            width: 22rem
                            position:absolute
                            top: 0
                            left: 0
                            transition:all .3s ease-in
                            img
                                width: 6.67rem
                                height: 6.67rem
                                position:absolute
                                top: 0.315rem
                                left: 0.315rem
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
                li:hover
                    .solution_member_func_content_container
                        width: 24rem
                        .solution_member_func_content_container_poi
                            left: 1rem
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
