<template>
    <div class="index">
        <navbar></navbar>
        <banner img="url(/static/images/solution_cases/home_banner.png) no-repeat center"></banner>
        <div class="index_explain">
            <slogan :title="index.title" :detail="index.detail"></slogan>
            <div class="index_explain_items">
                <div class="index_explain_big_phone">
                    <img :src="index.img.bigPhonePath" alt="">
                </div>
                <ul class="index_explain_items">
                    <li class="index_explain_icon" v-for="(item,i) in index.img.explainItemImg">
                        <img :src="item">
                        <i>{{index.explainItemText[i]}}</i>
                    </li>
                </ul>
            </div>
        </div>
        <div class="site">
            <slogan :title="index.site.title" :detail="index.site.detail"></slogan>
            <ul class="site_item">
                <li v-for="site in index.site.items">
                    <div class="site_item_icon">
                        <img :src="site.img" alt="">
                    </div>
                    <div class="site_item_content">
                        <p class="site_item_content_title">{{site.title}}</p>
                        <p class="site_item_content_detail">{{site.detail}}</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="cases">
            <el-carousel id="el-carousel" :interval="5000"  height="51.7rem" arrow="never" indicator-position="outside">
                <el-carousel-item v-for="(imgArr,index) in index.cases.imgPath">
                    <img :src="img.img" alt="" v-for="(img,index) in imgArr">
                </el-carousel-item>
            </el-carousel>
        </div>
        <index-footer style="margin-top:4rem"></index-footer>
    </div>
</template>
<script>
    import navbar from "../public/Navbar"
    import slogan from "../public/title"
    import banner from "../public/banner"
    import indexFooter from "../public/IndexFooter"
    export default {
        components:{
            navbar,
            slogan,
            banner,
            indexFooter
        },
        data(){
            return {
                index:{
                    title: "什么是微官网小程序？",
                    detail:"微官网小程序主要展示企业产品，企业案例，企业文化，企业资讯等，不仅可以宣传企业形象和企业文化，还是企业营销的入口",  
                    explainItemText:[
                            "企业简介",
                            "产品管理",
                            "新闻管理",
                            "企业案例",
                            "客服咨询",
                            "数据分析",
                            "空间流量",
                            "留言互动",
                            "海量模板",
                            "用户表单"
                        ],
                    img:{
                        bigPhonePath:"/static/images/solution_cases/ofw_icon_bnt.png",
                        explainItemImg:[
                            "/static/images/solution_cases/ofw_icon_ic_js.png",
                            "/static/images/solution_cases/ofw_icon_ic_cp.png",
                            "/static/images/solution_cases/ofw_icon_ic_xw.png",
                            "/static/images/solution_cases/ofw_icon_ic_al.png",
                            "/static/images/solution_cases/ofw_icon_ic_zx.png",
                            "/static/images/solution_cases/ofw_icon_ic_sjfx.png",
                            "/static/images/solution_cases/ofw_icon_ic_kjll.png",
                            "/static/images/solution_cases/ofw_icon_ic_lyhd.png",
                            "/static/images/solution_cases/ofw_icon_ic_mb.png",
                            "/static/images/solution_cases/ofw_icon_ic_bd.png"
                        ]
                    },
                    site:{
                        title: "综合建站（PC+移动+营销）",
                        detail:"企业建站的终极解决方案，智能响应、更新定制、覆盖全网终端",  
                        items:[
                            {
                                img:"/static/images/solution_cases/ofw_icon_zh_qy.png",
                                title:"企业门户",
                                detail:"企业建站的终极解决方案"
                            },
                            {
                                img:"/static/images/solution_cases/ofw_icon_zh_fgqw.png",
                                title:"企业门户",
                                detail:"让您在互联网上接触到更多的客户"
                            },
                             {
                                img:"/static/images/solution_cases/ofw_icon_zh_qyxx.png",
                                title:"营销触点全网覆盖",
                                detail:"企业品牌形象完美呈现吸引客户眼球"
                            },
                             {
                                img:"/static/images/solution_cases/ofw_icon_zh_nr.png",
                                title:"展示企业形象",
                                detail:"企业内容快速扩散在互联网上传播"
                            },
                             {
                                img:"/static/images/solution_cases/ofw_icon_zh_syjh.png",
                                title:"传播企业内容",
                                detail:"让企业获得更多商机，并且不错过"
                            },
                             {
                                img:"/static/images/solution_cases/ofw_icon_zh_yw.png",
                                title:"获取商业机会",
                                detail:"越来越多的企业业务可以在线完成"
                            }
                        ]
                    },
                    cases:{
                        imgPath:[
                            [
                                {img:"/static/images/solution_cases/ofw_icon_bnt_1.png"},
                                {img:"/static/images/solution_cases/ofw_icon_bnt_2.png"},
                                {img:"/static/images/solution_cases/ofw_icon_bnt_3.png"},
                                {img:"/static/images/solution_cases/ofw_icon_bnt_4.png"}
                            ],
                            [
                                {img:"/static/images/solution_cases/ofw_icon_bnt_1.png"},
                                {img:"/static/images/solution_cases/ofw_icon_bnt_2.png"},
                                {img:"/static/images/solution_cases/ofw_icon_bnt_3.png"},
                                {img:"/static/images/solution_cases/ofw_icon_bnt_4.png"}
                            ],
                            [
                                {img:"/static/images/solution_cases/ofw_icon_bnt_1.png"},
                                {img:"/static/images/solution_cases/ofw_icon_bnt_2.png"},
                                {img:"/static/images/solution_cases/ofw_icon_bnt_3.png"},
                                {img:"/static/images/solution_cases/ofw_icon_bnt_4.png"}
                            ],
                            [
                                {img:"/static/images/solution_cases/ofw_icon_bnt_1.png"},
                                {img:"/static/images/solution_cases/ofw_icon_bnt_2.png"},
                                {img:"/static/images/solution_cases/ofw_icon_bnt_3.png"},
                                {img:"/static/images/solution_cases/ofw_icon_bnt_4.png"}
                            ]
                        ]
                    }
                }
            }
        }
    }
</script>
<style scoped lang="stylus">
    .index
        width: 100%
        height: auto
        .index_explain
            width: 100rem
            height: 63.8rem
            margin: 0 auto
            .index_explain_items
                width: 48.5rem
                height: 48.5rem
                position:relative
                border-radius:50%
                margin: 0 auto
                .index_explain_big_phone
                    width: 40.25rem
                    height: 40.25rem
                    position:absolute
                    top: 4.125rem
                    left: 4.125rem
                    z-index:2
                .index_explain_items
                    width: 48.5rem
                    height: 48.5rem
                    position:absolute
                    top:0
                    left:0
                    border-radius:50%
                    z-index:1
                    li
                        width: 4.5rem
                        height: 4.5rem
                        position:absolute
                        z-index:3
                        transition:all .8s ease-in
                    li:nth-child(-n+6):hover
                        transform:translateX(-50px)
                    li:nth-child(n+6):hover
                       transform:translateX(50px)
                    li:first-child
                        top: 6.167rem
                        left: 9rem
                    li:nth-child(2)
                        top:13rem
                        left:5rem
                    li:nth-child(3)
                        top:20.5rem
                        left:2.4rem
                    li:nth-child(4)
                        top:29rem
                        left:5rem
                    li:nth-child(5)
                        top:37rem
                        left:9rem
                    li:nth-child(6)
                        top: 6.167rem
                        right: 9rem
                    li:nth-child(7)
                        top:13rem
                        right:5rem
                    li:nth-child(8)
                        top:20.5rem
                        right:2.4rem
                    li:nth-child(9)
                        top:29rem
                        right:5rem
                    li:nth-child(10)
                        top:37rem
                        right:9rem
                    li:nth-child(-n+6)
                        i
                            display:inline-block
                            width: 7rem
                            height: 4.5rem
                            line-height: 4.5rem
                            position:absolute
                            top: 0rem
                            right: 4.5rem
                            color:#2E82FF
                            font-size:16px
                    li:nth-child(n+6)
                        i
                            display:inline-block
                            width: 7rem
                            height: 4.5rem
                            line-height: 4.5rem
                            position:absolute
                            top: 0rem
                            left: 6.5rem
                            color:#2E82FF
                            font-size:16px
        .site
            width: 100%
            height: 46.67rem
            background:#F5F7FA
            .site_item
                width: 100rem
                height: 31.37rem
                margin: 0 auto
                display:flex
                flex-flow:row nowrap
                justify-content:space-between
                align-items:center
                li
                    width: 12rem
                    height: 17.67rem
                    .site_item_icon
                        width: 12rem
                        height: 12rem
                        transition:all .8s ease-in
                    .site_item_icon:hover
                        transform:rotate(-10deg);
                        img
                            width: 12rem
                            height: 12rem
                    .site_item_content
                        width: 12rem
                        text-align:center
                        height: 7.67rem
                        line-height: 2rem
                        .site_item_content_title
                            font-size:18px
                            color:#2E82FF
                        .site_item_content_detail
                            margin-top: 1rem
                            font-size:14px
                            color:#666
</style>
