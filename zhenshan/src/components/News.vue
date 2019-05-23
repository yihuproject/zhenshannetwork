<template>
    <div class="news">
        <navbar></navbar>
        <banner img="url(/static/images/news/home_banner08.png) no-repeat center"></banner>
        <router-view />
    </div>
</template>
<script>
    import navbar from "./public/Navbar"
    import banner from "./public/banner"
    export default{
        data(){
            return {
                
            }
        },
        components: {
            navbar,
            banner
        },
    }
</script>

<style>
    .news{
        width: 100%;
        height: auto;
    }
</style>
