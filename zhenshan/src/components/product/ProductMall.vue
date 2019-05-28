<template>
    <div class="product_mall">
        <div class="product_mall_title">
            <div class="product_mall_title_title">微商城经营版</div>
            <div class="product_mall_title_detail">
                <i>适合电商或门店商家，在线销售门店引流</i>
                <i>满足推广获客、成交转化、客户留存、复购增购等核心经营需求</i>
            </div>
            <div class="product_mall_title_price">999元/年</div>
            <div class="product_mall_title_btn">立即体验</div>
        </div>
        <div class="product_mall_content">
            <img v-lazy="img1">
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                img1:"/static/images/product/tc_bnt_wsc.png"
            }
        },
        components: {
            
        }
    }
</script>
<style>
.product_mall{
    width: 100%;
    height: auto;
}
.product_mall .product_mall_title{
    width: 41.7rem;
    height: 23.9rem;
    margin: 0 auto;
    padding: 5rem 0;
}
.product_mall .product_mall_title .product_mall_title_title{
    width: 41.7rem;
    line-height: 5rem;
    text-align: center;
    color:#333;
    font-size:32px;
}
.product_mall .product_mall_title .product_mall_title_detail{
    width: 41.7rem;
    line-height: 2.5rem;
    text-align: center;
    color:#333;
    font-size:18px;
}
.product_mall .product_mall_title .product_mall_title_price{
    width: 41.7rem;
    line-height: 8rem;
    text-align: center;
    color:#ff0000;
    font-size:32px;
}
.product_mall .product_mall_title .product_mall_title_btn{
    width: 15rem;
    text-align: center;
    height: 4.167rem;
    line-height: 4.167rem;
    color:#fff;
    background:rgba(46,130,255,1);
    font-size:18px;
    border-radius: 6px;
    margin-left: 13.35rem;
}
.product_mall .product_mall_content{
    width: 100rem;
    height: auto;
    margin: 0 auto;
    margin-bottom: 5rem;
}
.product_mall .product_mall_content img{
    width: 100rem;
    height: auto;
}
</style>
