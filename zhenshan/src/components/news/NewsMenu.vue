<template>
    <div class="news_menu">
            <div class="news_menu_after_banner">
                <div class="news_menu_after_banner_img" v-for="i in menu.img">
                    <img v-lazy="i.img" alt="">
                    <span>{{i.text}}</span>
                </div>
            </div>
            <div class="news_menu_after_navigator">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                      <el-menu-item index="1">全部</el-menu-item>
                      <el-menu-item index="2">行业动态</el-menu-item>
                      <el-menu-item index="3">公司新闻</el-menu-item>
                      <el-menu-item index="4">解决方案</el-menu-item>
                      <el-menu-item index="5">战略合作</el-menu-item>
                </el-menu>
            </div>
            <news-list></news-list>
        <index-footer></index-footer>
    </div>
</template>
<script>
    import indexFooter from "../public/IndexFooter"
    import newsList from "./newsList"
    export default{
        data(){
            return {
                activeIndex: '1',
                activeIndex2: '1',
                menu:{
                    img:[
                        {
                        img: "/static/images/news/news_tp.png",
                        text:"微分销，玩出环保新花样"
                        },
                        {
                        img: "/static/images/news/news_tp.png",
                        text:"微分销，玩出环保新花样"
                        },
                        {
                        img: "/static/images/news/news_tp.png",
                        text:"微分销，玩出环保新花样"
                        }
                    ]
                }
            }
        },
        components: {
            indexFooter,
            newsList
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
    .news_menu{
        width: 100%;
        height: auto;
    }
    .news_menu  .news_menu_after_banner{
        width: 100rem;
        height: 19.83rem;
        margin: 2.5rem auto;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
    }
    .news_menu  .news_menu_after_banner .news_menu_after_banner_img{
        width: 31.67rem;
        height: 19.83rem;
        position: relative;
    }
    .news_menu  .news_menu_after_banner .news_menu_after_banner_img img{
        width: 31.67rem;
        height: 19.83rem;
    }
    .news_menu  .news_menu_after_banner .news_menu_after_banner_img span{
        width: 30.67rem;
        height: 4rem;
        padding-left: 1rem;
        line-height: 4rem;
        background: rgba(0,0,0,0.2);
        position: absolute;
        bottom: 0;
        left: 0;
        color:#fff;
        font-size: 16px;
    }
    .news_menu  .news_menu_after_navigator{
        width: 100rem;
        height: 5rem;
        margin: 2.5rem auto;
    }
    
</style>