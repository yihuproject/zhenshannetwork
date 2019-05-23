<template>
    <div class="mall">
        <navbar></navbar>
        <banner :img="bannerImg"></banner>
        <toggle-block :obj="system"></toggle-block>
        <div class="mode">
            <slogan :title="mode.title" :detail="mode.detail"></slogan>
            <ul class="mode_items">
                <li class="mode_item" v-for="m in mode.liArr">
                    <div class="mode_items_img" :style="{background:m.img}">
                    </div>
                    <div class="mode_items_content">
                        <p class="mode_items_content_title">
                            {{m.title}}
                        </p>
                        <p class="mode_items_content_detail">
                            {{m.detail}}
                        </p>
                    </div>
                </li>
            </ul>
        </div>
        <icontent :bgcolor="onlineStore.color" :title="onlineStore.title" :ltitle="onlineStore.ltitle" :detail="onlineStore.content" :direction="onlineStore.direction" :img="onlineStore.img"></icontent>
        <icontent :bgcolor="playMethods.color" :title="playMethods.title" :ltitle="playMethods.ltitle" :detail="playMethods.content" :direction="playMethods.direction" :img="playMethods.img"></icontent>
        <icontent :bgcolor="manager.color" :title="manager.title" :ltitle="manager.ltitle" :detail="manager.content" :direction="manager.direction" :img="manager.img"></icontent>
        <icontent :bgcolor="analyze.color" :title="analyze.title" :ltitle="analyze.ltitle" :detail="analyze.content" :direction="analyze.direction" :img="analyze.img"></icontent>
        <index-footer></index-footer>
    </div>
</template>
<script>
    import navbar from "../public/navbar"
    import banner from "../public/banner"
    import icontent from "../public/item"
    import slogan from "../public/title"
    import indexFooter from "../public/IndexFooter"
    import toggleBlock from "./mall/ToggleBlock"
    export default{
        components: {
            icontent,
            slogan,
            navbar,
            banner,
            indexFooter,
            toggleBlock
        },
        data(){
            return{
                bannerImg:"url(/static/images/solution_cases/home_banner03.png) no-repeat center",
                current:0,
                scolor:"#ff0000",
                system: {
                    item:[
                            {
                                static:{
                                    img:"/static/images/solution_cases/wsc_ic_yxg.png",
                                    title:"营销工具",
                                    detail:"多种营销玩法，提升流量和销量",
                                    liArr:["获客","转化率","客单价","复购率"]
                                },
                                active:{
                                    title:"在线开店",
                                    ltitle:"强大稳定的开店系统，快速搭建商城",
                                    liArr:[
                                        {
                                            img:"/static/images/solution_cases/wsc_ic_kd_gx.png",
                                            title:"个性展示",
                                            detail:"几十种页面模板组件，灵活配置"
                                        },
                                        {
                                            img:"/static/images/solution_cases/wsc_ic_kd_sp.png",
                                            title:"商品管理",
                                            detail:"支持多种商品形态，快速铺货"
                                        },
                                        {
                                            img:"/static/images/solution_cases/wsc_ic_kd_zf.png",
                                            title:"支付功能",
                                            detail:"支持微信支付，安全可靠"
                                        },
                                        {
                                            img:"/static/images/solution_cases/wsc_ic_kd_gt.png",
                                            title:"高效沟通",
                                            detail:"智能在线客服，及时沟通交流"
                                        },
                                        
                                    ],
                                    linkText:"查看更多",
                                    link:"/"
                                }
                            },
                            {
                                static:{
                                    img:"/static/images/solution_cases/wsc_ic_yxg.png",
                                    title:"营销工具",
                                    detail:"多种营销玩法，提升流量和销量",
                                    liArr:["获客","转化率","客单价","复购率"]
                                },
                                active:{
                                    title:"在线开店",
                                    ltitle:"强大稳定的开店系统，快速搭建商城",
                                    liArr:[
                                        {
                                            img:"/static/images/solution_cases/wsc_ic_kd_gx.png",
                                            title:"个性展示",
                                            detail:"几十种页面模板组件，灵活配置"
                                        },
                                        {
                                            img:"/static/images/solution_cases/wsc_ic_kd_sp.png",
                                            title:"商品管理",
                                            detail:"支持多种商品形态，快速铺货"
                                        },
                                        {
                                            img:"/static/images/solution_cases/wsc_ic_kd_zf.png",
                                            title:"支付功能",
                                            detail:"支持微信支付，安全可靠"
                                        },
                                        {
                                            img:"/static/images/solution_cases/wsc_ic_kd_gt.png",
                                            title:"高效沟通",
                                            detail:"智能在线客服，及时沟通交流"
                                        },
                                        
                                    ],
                                    linkText:"查看更多",
                                    link:"/"
                                }
                            },
                            {
                                static:{
                                    img:"/static/images/solution_cases/wsc_ic_khg.png",
                                    title:"客户管理",
                                    detail:"不怕没有回头客，精准营销拉升客量",
                                    liArr:["积分","储值","精准维护","会员互通"]
                                },
                                active:{
                                    title:"在线开店",
                                    ltitle:"强大稳定的开店系统，快速搭建商城",
                                    liArr:[
                                        {
                                            img:"/static/images/solution_cases/wsc_ic_kd_gx.png",
                                            title:"个性展示",
                                            detail:"几十种页面模板组件，灵活配置"
                                        },
                                        {
                                            img:"/static/images/solution_cases/wsc_ic_kd_sp.png",
                                            title:"商品管理",
                                            detail:"支持多种商品形态，快速铺货"
                                        },
                                        {
                                            img:"/static/images/solution_cases/wsc_ic_kd_zf.png",
                                            title:"支付功能",
                                            detail:"支持微信支付，安全可靠"
                                        },
                                        {
                                            img:"/static/images/solution_cases/wsc_ic_kd_gt.png",
                                            title:"高效沟通",
                                            detail:"智能在线客服，及时沟通交流"
                                        },
                                        
                                    ],
                                    linkText:"查看更多",
                                    link:"/"
                                }
                            },
                            {
                                static:{
                                    img:"/static/images/solution_cases/wsc_ic_sjfx.png",
                                    title:"数据分析",
                                    detail:"全方位运营数据解析，辅助经营决策",
                                    liArr:["会员分析","流量分析","交易分析","商品分析"]
                                },
                                active:{
                                    title:"在线开店",
                                    ltitle:"强大稳定的开店系统，快速搭建商城",
                                    liArr:[
                                        {
                                            img:"/static/images/solution_cases/wsc_ic_kd_gx.png",
                                            title:"个性展示",
                                            detail:"几十种页面模板组件，灵活配置"
                                        },
                                        {
                                            img:"/static/images/solution_cases/wsc_ic_kd_sp.png",
                                            title:"商品管理",
                                            detail:"支持多种商品形态，快速铺货"
                                        },
                                        {
                                            img:"/static/images/solution_cases/wsc_ic_kd_zf.png",
                                            title:"支付功能",
                                            detail:"支持微信支付，安全可靠"
                                        },
                                        {
                                            img:"/static/images/solution_cases/wsc_ic_kd_gt.png",
                                            title:"高效沟通",
                                            detail:"智能在线客服，及时沟通交流"
                                        },
                                        
                                    ],
                                    linkText:"查看更多",
                                    link:"/"
                                }
                            }
                        ]
                },
                onlineStore:{
                    color:"#fff",
                    ltitle:"我们尝试用",
                    title:"完整的在线商城",
                    direction:"row-reverse",
                    img:"/static/images/solution_cases/wsc_ic_bnt_sc.png",
                    content:[
                        "帮您实现搭建自己的品牌商城，与客户直接连接单一的销售渠道说再见"
                    ]
                },
                playMethods:{
                    color:"#F5F7FA",
                    ltitle:"我们尝试用",
                    title:"百余种促销玩法",
                    direction:"row",
                    img:"/static/images/solution_cases/wsc_ic_bnt_cx.png",
                    content:[
                        "支持多种营销工具，快速提升销量，帮您实现店铺高活跃高客单、高复购向乏味的营销方式说再见"
                    ]
                },
                manager:{
                    color:"#fff",
                    ltitle:"我们尝试用",
                    title:"SCRM客户管理",
                    direction:"row-reverse",
                    img:"/static/images/solution_cases/wsc_ic_bnt_scrm.png",
                    content:[
                        "帮您实现会员的全周期管理及精准化营销向逐日攀升的客户流失率说再见，让新客户在互动中逐步成为店铺的忠实vip"
                    ]
                },
                analyze:{
                    color:"#F5F7FA",
                    ltitle:"我们尝试用",
                    title:"全面领先的数据分析",
                    direction:"row",
                    img:"/static/images/solution_cases/wsc_ic_bnt_sjfx.png",
                    content:[
                        "帮您实现多角度、全方位的店铺经营分析，驱动发展",
                        "向没有方向的店铺运营说再见",
                        "数据维度全提供",
                        "自由组合更高能"
                    ]
                },
                mode:{
                    title:"百余种促销玩法，独创营销模式",
                    detail:"内置业内首屈一指的海量营销模块，为你打造独一无二的小程序商城",
                    liArr:[
                        {
                            img:"url(/static/images/solution_cases/wsc_ic_cx_1.png) no-repeat center",
                            title:"拆红包",
                            detail:"邀请好友拆红包瓜分商城红包"
                        },
                        {
                            img:"url(/static/images/solution_cases/wsc_ic_cx_2.png) no-repeat center",
                            title:"摇红包",
                            detail:"摇一摇，红包雨停不下来"
                        },
                        {
                            img:"url(/static/images/solution_cases/wsc_ic_cx_3.png) no-repeat center",
                            title:"拼团",
                            detail:"以客带客，店铺传播裂变"
                        },
                        {
                            img:"url(/static/images/solution_cases/wsc_ic_cx_4.png) no-repeat center",
                            title:"秒杀",
                            detail:"限时特惠，人气引流吸粉"
                        },
                        {
                            img:"url(/static/images/solution_cases/wsc_ic_cx_5.png) no-repeat center",
                            title:"满减活动",
                            detail:"低额让利，推动销量提升"
                        },
                        {
                            img:"url(/static/images/solution_cases/wsc_ic_cx_6.png) no-repeat center",
                            title:"限时折扣",
                            detail:"裂变传播，吸引流量转化"
                        },
                        {
                            img:"url(/static/images/solution_cases/wsc_ic_cx_7.png) no-repeat center",
                            title:"优惠券营销",
                            detail:"刺激消费，加强消费倾向"
                        },
                        {
                            img:"url(/static/images/solution_cases/wsc_ic_cx_8.png) no-repeat center",
                            title:"积分营销",
                            detail:"热门玩法，提升用户体验"
                        }
                    ]
                }
            }
        }
    }
</script>
<style scoped lang="stylus">
    .mall
        width: 100%
        height: auto
        .mode
            width: 100%
            height: 47.16rem
            background:#F5F7FA
            .mode_items
                width: 100rem
                height: 31.86rem
                margin: 0 auto
                display:flex
                flex-flow:row wrap
                justify-content:space-between
                align-items:center
                .mode_item
                    width: 23.3rem
                    height: 10rem
                    background:rgba(255,255,255,0.8)
                    display:flex
                    flex-flow:row wrap
                    justify-content:space-around
                    align-items:center
                    border-radius:10px
                    .mode_items_img
                        width: 5.5rem
                        height: 5.5rem
                    .mode_items_content
                        width: 16.5rem
                        height: 6rem
                        p
                            text-align:left
                            line-height: 3rem
                        p:first-child
                            font-size:18px
                            color:#333
                        p:last-child
                            font-size:14px
                            color:#999
</style>
