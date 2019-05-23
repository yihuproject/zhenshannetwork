<template>
    <div class="news_list">
        <div class="news_list_items">
            <div class="news_list_items_item" v-for="item in newsList">
                <div class="news_list_items_item_img">
                    <img :src="item.img">
                </div>
                <div class="news_list_items_item_content">
                    <p class="news_list_items_item_content_title">{{item.title}}</p>
                    <p class="news_list_items_item_content_detail">{{item.detail}}</p>
                    <p class="news_list_items_item_content_tags">
                        <i class="news_list_items_item_content_tags_time">
                            {{item.time}}
                        </i>
                        <i class="news_list_items_item_content_tags_location">
                            {{item.location}}
                        </i>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                newsList:[
                    {
                        img:"/static/images/news/news_tp01.png",
                        title:"门店线上线下库存同步，助力商家营收利润双升！",
                        detail:"我这边不但做线上商城配送，还有线下门店的管理，货都是由门店出的，有时候呢!线上商城爆单了，订单量严重超出线下门店的库存了，这个时候只能联系客户退单或者修改了，很严重的影响到客户的体验",
                        time:"2019-05-17",
                        location:"广东深圳"
                    },
                    {
                        img:"/static/images/news/news_tp01.png",
                        title:"门店线上线下库存同步，助力商家营收利润双升！",
                        detail:"我这边不但做线上商城配送，还有线下门店的管理，货都是由门店出的，有时候呢!线上商城爆单了，订单量严重超出线下门店的库存了，这个时候只能联系客户退单或者修改了，很严重的影响到客户的体验",
                        time:"2019-05-17",
                        location:"广东深圳"
                    },
                    {
                        img:"/static/images/news/news_tp01.png",
                        title:"门店线上线下库存同步，助力商家营收利润双升！",
                        detail:"我这边不但做线上商城配送，还有线下门店的管理，货都是由门店出的，有时候呢!线上商城爆单了，订单量严重超出线下门店的库存了，这个时候只能联系客户退单或者修改了，很严重的影响到客户的体验",
                        time:"2019-05-17",
                        location:"广东深圳"
                    },
                    {
                        img:"/static/images/news/news_tp01.png",
                        title:"门店线上线下库存同步，助力商家营收利润双升！",
                        detail:"我这边不但做线上商城配送，还有线下门店的管理，货都是由门店出的，有时候呢!线上商城爆单了，订单量严重超出线下门店的库存了，这个时候只能联系客户退单或者修改了，很严重的影响到客户的体验",
                        time:"2019-05-17",
                        location:"广东深圳"
                    },
                    {
                        img:"/static/images/news/news_tp01.png",
                        title:"门店线上线下库存同步，助力商家营收利润双升！",
                        detail:"我这边不但做线上商城配送，还有线下门店的管理，货都是由门店出的，有时候呢!线上商城爆单了，订单量严重超出线下门店的库存了，这个时候只能联系客户退单或者修改了，很严重的影响到客户的体验",
                        time:"2019-05-17",
                        location:"广东深圳"
                    },
                    {
                        img:"/static/images/news/news_tp01.png",
                        title:"门店线上线下库存同步，助力商家营收利润双升！",
                        detail:"我这边不但做线上商城配送，还有线下门店的管理，货都是由门店出的，有时候呢!线上商城爆单了，订单量严重超出线下门店的库存了，这个时候只能联系客户退单或者修改了，很严重的影响到客户的体验",
                        time:"2019-05-17",
                        location:"广东深圳"
                    },
                    {
                        img:"/static/images/news/news_tp01.png",
                        title:"门店线上线下库存同步，助力商家营收利润双升！",
                        detail:"我这边不但做线上商城配送，还有线下门店的管理，货都是由门店出的，有时候呢!线上商城爆单了，订单量严重超出线下门店的库存了，这个时候只能联系客户退单或者修改了，很严重的影响到客户的体验",
                        time:"2019-05-17",
                        location:"广东深圳"
                    },
                    {
                        img:"/static/images/news/news_tp01.png",
                        title:"门店线上线下库存同步，助力商家营收利润双升！",
                        detail:"我这边不但做线上商城配送，还有线下门店的管理，货都是由门店出的，有时候呢!线上商城爆单了，订单量严重超出线下门店的库存了，这个时候只能联系客户退单或者修改了，很严重的影响到客户的体验",
                        time:"2019-05-17",
                        location:"广东深圳"
                    }
                ]
            }
        }
    }
</script>

<style>
    .news_list{
        width: 100%;
        height: auto;
        margin-bottom: 6rem;
    }
    .news_list .news_list_items{
        width: 100rem;
        height: auto;
        margin: 0 auto;
    }
    .news_list .news_list_items .news_list_items_item{
        width: 100rem;
        height: 16.67rem;
        margin: 3.3rem 0;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
    }
    .news_list .news_list_items .news_list_items_item_img{
        width: 27.3rem;
        height: 16.67rem;
    }
    .news_list .news_list_items .news_list_items_item_img img{
        width: 27.3rem;
        height: 16.67rem;
    }
    .news_list .news_list_items .news_list_items_item_content{
        width: 70rem;
        height: 16.67rem;
    }
    .news_list .news_list_items .news_list_items_item_content .news_list_items_item_content_title{
       line-height: 3rem;
       color:#333;
       font-size: 20px;
    }
    .news_list .news_list_items .news_list_items_item_content .news_list_items_item_content_detail{
       height: 12rem;
       line-height: 2rem;
       color:#666;
       font-size: 14px;
    }
    .news_list .news_list_items .news_list_items_item_content .news_list_items_item_content_tags{
       line-height: 2rem;
       color:#999;
       font-size: 14px;
    }
    
    .news_list .news_list_items .news_list_items_item_content .news_list_items_item_content_tags .news_list_items_item_content_tags_location{
        margin-left: 2rem;
    }
</style>
