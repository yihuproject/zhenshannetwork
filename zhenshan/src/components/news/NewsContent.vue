<template>
    <div class="news_content">
        <div class="news_content_center">
                <currentposition></currentposition>
                <slogan title="微信推广效果太差，下面这些方法你做到没？" detail="来源：电商经验   ｜   2019-05-17 12:12:05"></slogan>
                <detail></detail>
                <page></page>
        </div>
        <index-footer></index-footer>
    </div>
</template>
<script>
    import currentposition from "./currentPosition"
    import page from "./page"
    import detail from "./content"
    import slogan from "../public/title"
    import indexFooter from "../public/IndexFooter"
    export default{
        data(){
            return {
                
            }
        },
        components: {
            currentposition,
            slogan,
            detail,
            page,
            indexFooter
        },
    }
</script>
<style>
    .news_content{
        width: 100%;
        height: auto;
    }
    .news_content .news_content_center{
        width: 100rem;
        height: auto;
        margin: 0 auto;
    }
    .news_content .news_content_center   .title_slogan_detail{
        color:#999!important;
    }
</style>
