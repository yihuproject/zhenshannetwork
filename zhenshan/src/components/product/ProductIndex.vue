<template>
    <div class="product_index">
        <div class="product_index_title">
            <div class="product_index_title_title">微官网标准版</div>
            <div class="product_index_title_detail">
                <i>适合企业品牌展示，产品服务分享</i>
                <i>满足品牌传播、产品展示、客户咨询沉淀等品牌核心推广需求</i>
            </div>
            <div class="product_index_title_btn">立即体验</div>
        </div>
        <div class="product_index_content">
            <img v-lazy="img1">
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                img1:"/static/images/product/tc_bnt_wgw.png"
            }
        },
        components: {
            
        }
    }
</script>
<style>
.product_index{
    width: 100%;
    height: auto;
}
.product_index .product_index_title{
    width: 41.7rem;
    height: 23.9rem;
    margin: 0 auto;
    padding-top: 5rem;
}
.product_index .product_index_title .product_index_title_title{
    width: 41.7rem;
    line-height: 5rem;
    text-align: center;
    color:#333;
    font-size:32px;
}
.product_index .product_index_title .product_index_title_detail{
    width: 41.7rem;
    line-height: 2.5rem;
    text-align: center;
    color:#333;
    font-size:18px;
}
.product_index .product_index_title .product_index_title_btn{
    width: 15rem;
    text-align: center;
    height: 4.167rem;
    line-height: 4.167rem;
    color:#fff;
    background:rgba(46,130,255,1);
    font-size:18px;
    border-radius: 6px;
    margin: 3rem 0 3rem 13.35rem;
}
.product_index .product_index_content{
    width: 100rem;
    height: auto;
    margin: 0 auto;
    margin-bottom: 5rem;
}
.product_index .product_index_content img{
    width: 100rem;
    height: auto;
}
</style>
