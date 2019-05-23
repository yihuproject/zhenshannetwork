<template>
    <div class="cases">
        <navbar></navbar>
        <banner img="url(/static/images/cases/home_banner07.png) no-repeat center"></banner>
        <div class="cases_container">
            <div class="cases_navigator">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                      <el-menu-item index="1">全部类型</el-menu-item>
                      <el-menu-item index="2">服装箱包</el-menu-item>
                      <el-menu-item index="3">食品生鲜</el-menu-item>
                      <el-menu-item index="4">餐饮美食</el-menu-item>
                      <el-menu-item index="5">母婴美妆</el-menu-item>
                      <el-menu-item index="6">生活家庭</el-menu-item>
                      <el-menu-item index="7">酒店房产</el-menu-item>
                      <el-menu-item index="8">文化旅游</el-menu-item>
                      <el-menu-item index="9">娱乐场所</el-menu-item>
                      <el-menu-item index="10">其他案例</el-menu-item>
                </el-menu>
            </div>
        </div>
        <router-view />
        <index-footer></index-footer>
    </div>
</template>
<script>
    import navbar from "./public/Navbar"
    import banner from "./public/banner"
    import indexFooter from "./public/IndexFooter"
    export default{
        data(){
            return {
                activeIndex: '1',
                activeIndex2: '1',
            }
        },
        components: {
            navbar,
            banner,
            indexFooter
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>
<style>
    .cases{
        width: 100%;
        height: auto;
    }
    .cases .cases_container{
        width: 100%;
        height: auto;
        background: #F5F7FA;
    }
    .cases .cases_container .cases_navigator{
        width: 100rem;
        height: auto;
        margin: 0 auto;
        background: #F5F7FA;
    }
    
   .cases .cases_container .cases_navigator .el-menu{
       background: #F5F7FA;
   }
   .cases .cases_container .cases_navigator .el-menu .el-menu-item.is-active{
       color:#2E82FF;
   }
   
   .cases .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover{
       background: #F5F7FA;
   }
</style>
