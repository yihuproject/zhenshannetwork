<template>
    <div class="index">
        <navbar></navbar>
        <banner isShow="true" text="免费体验" bLink="/product_index" color="#fff" fcolor="#3063ff" img="url(/static/images/solution_cases/home_banner.png) no-repeat center"></banner>
        <div class="index_explain">
            <slogan :title="index.title" :detail="index.detail"></slogan>
            <div class="index_explain_items">
                <img src="/static/images/solution_cases/icon_bnt.png">
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
        <slogan title="精美案例微站风格" detail="自由灵活设计，微站风格，为多个行业量身定制"></slogan>
        <div class="cases" :style="{height:swiperHeight}">
                <swiper :options="swiperOption" ref="mySwiper"  :style="{height:swiperHeight}">
                    <!-- slides -->
                    <swiper-slide v-for="(imgArr,index) in index.cases.imgPath">
                        <div class="el_item_list" style="margin: 0 auto;display: flex;flex-flow: row nowrap;justify-content: space-around;" :style="{marginTop:centerHeight}">
                            <img :src="img.img" alt="" v-for="(img,index) in imgArr"  :style="{height:swiperImgHeight}">
                        </div>
                    </swiper-slide>
                    <!-- Optional controls -->
                    <div class="swiper-pagination"  slot="pagination"></div>
                </swiper>
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
                swiperOption:{
                    notNextTick:true,
                    loop:true,
                    autoplay:true,
                    autoplay:{
                      delay:5000,
                        stopOnLastSlide:false,
                        disableOnInteraction:false
                    },
                    speed:1500,
                    grabCursor:true,
                    initialSlide:0,//初始化索引
                    pagination:{
                        el:'.swiper-pagination',
                        clickable:true
                    }
                },
                index:{
                    title: "什么是微官网小程序？",
                    detail:"微官网小程序主要展示企业产品，企业案例，企业文化，企业资讯等，不仅可以宣传企业形象和企业文化，还是企业营销的入口",
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
                            ]
                        ]
                    }
                }
            }
        },
        computed: {
            swiperHeight() {
                return `${100*800/1920}vw`;
            },
            swiper() {
                return this.$refs.mySwiper.swiper;
            },
            swiperImgHeight(){
                return `${75*250/664}vw`;
            },
            centerHeight(){
                return `${((100*800/1920)-(75*250/664))/2}vw`;
            }
        },
        mounted(){
            console.log('this is current swiper instance object', this.swiper);
            this.swiper.slideTo(3, 1000, false);
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
                width: 57.25rem
                height: 40.25rem
                position:relative
                border-radius:50%
                margin: 0 auto
                img
                    width: 57.25rem
                    height: 40.25rem
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
                        transition:all .5s ease-in
                    .site_item_icon:hover
                        transform:translateY(-20px)
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
    @keyframes phone
        from
            transform: rotateX(-20deg)
        to
            transform: rotateX(20deg)
</style>
