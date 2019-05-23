<template>
    <div class="about">
        <navbar></navbar>
        <banner img="url(/static/images/about/home_banner06.png) no-repeat center"></banner>
        <detail></detail>
        <dataScroll></dataScroll>
        <contact-items></contact-items>
        <position></position>
        <index-footer></index-footer>
    </div>
</template>

<script>
    import dataScroll from "./about/dataScroll"
    import contactItems from "./about/contactItems"
    import position from "./about/position"
    import detail from "./about/content"
    import navbar from "./public/navbar"
    import banner from "./public/banner"
    import indexFooter from "./public/IndexFooter"
    export default{
        data(){
            return {
                
            }
        },
        components: {
            dataScroll,
            navbar,
            indexFooter,
            banner,
            contactItems,
            detail,
            position
        },
    }
</script>

<style>
    .about{
        width: 100%;
        height: auto;
    }
</style>
