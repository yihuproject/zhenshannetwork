<template>
    <div class="product">
        <navbar></navbar>
        <banner img="url(/static/images/product/home_banner08.png) no-repeat center"></banner>
        <div class="product_link_container">
            <div class="product_btn">
               <router-link tag="i" active-class="pl_active" :to="item.link" v-for="(item,index) in liArr">{{item.text}}</router-link>
            </div>
        </div>
        <router-view></router-view>
        <index-footer></index-footer>
    </div>
</template>
<script>
    import navbar from "./public/Navbar"
    import indexFooter from "./public/IndexFooter"
    import banner from "./public/banner"
    export default{
        data(){
            return{
                liArr:[
                    {
                        link:"/product_index",
                        text:"微官网版"
                    },
                    {
                        link:"/product_member",
                        text:"微会员版"
                    },
                     {
                        link:"/product_distribution",
                        text:"微分销版"
                    },
                     {
                        link:"/product_mall",
                        text:"微商城版"
                    },
                ]
            }
        },
        components: {
            navbar,
            indexFooter,
            banner
        },
    }
</script>
<style scoped>
    .product{
        width: 100%;
        height: auto;
        position: relative;
    }
    .product .product_link_container{
        width: 100%;
        height: 5rem;
        margin: 0 auto;
        position: absolute;
        top: 49.4rem;
        left: 0;
    }
    .product .product_link_container .product_btn{
        width: 100rem;
        height: 5rem;
        margin: 0 auto;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
    }
    .product .product_link_container .product_btn i{
        display: inline-block;
        width: 22.5rem;
        text-align: center;
        height: 5rem;
        line-height: 5rem;
        background: #fff;
        border-radius: 6px;
        font-size: 22px;
        color:#333;
    }
    .product .product_link_container .product_btn i.router-link-exact-active.pl_active{
        color:rgba(46,130,255,1);
    }
</style>
