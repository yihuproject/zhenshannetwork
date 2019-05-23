<template>
    <div class="cases_list">
        <div class="cases_list_items">
            <div class="cases_list_item" v-for="(item,index) in cases"  :key="index" @mouseout="handleOut()" @mouseover="handleOver(index,item)" :class="{active:index == current}">
                <div class="cases_list_static">
                    <div class="cases_list_static_img" :style="{background:item.imgBgPath}">
                    </div>
                    <div class="cases_list_static_title">
                        {{item.title}}
                    </div>
                    <div class="cases_list_static_detail">
                        {{item.detail}}
                    </div>
                </div>
                <div class="cases_list_active" :style="{background:item.hoverImgBgPath}">
                    <div class="cases_list_active_img" :style="{background:item.imgBgPath}">
                    </div>
                    <div class="cases_list_active_title">
                        {{item.title}}
                    </div>
                    <div class="cases_list_active_detail">
                        {{item.detail}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                current:null,
                cases:[
                    {
                        imgPath:"/static/images/cases/al_icon_logo1.png",
                        imgBgPath:"url(/static/images/cases/logo.png) no-repeat center",
                        title:"蓝特斯邦威",
                        detail:"中国本土休闲服装品牌，为年轻消费者打造个性，流行的服饰产品",
                        hoverImgPath:"/static/images/cases/al_icon_logo2.png",
                        hoverImgBgPath:"url(/static/images/cases/al_icon_logo3.png) no-repeat center",
                        hoverTitle:"蓝特斯邦威",
                        hoverDetail:"扫码查看案例"
                    },
                     {
                        imgPath:"/static/images/cases/al_icon_logo1.png",
                        imgBgPath:"url(/static/images/cases/logo.png) no-repeat center",
                        title:"蓝特斯邦威",
                        detail:"中国本土休闲服装品牌，为年轻消费者打造个性，流行的服饰产品",
                        hoverImgPath:"/static/images/cases/al_icon_logo2.png",
                        hoverImgBgPath:"url(/static/images/cases/al_icon_logo3.png) no-repeat center",
                        hoverTitle:"蓝特斯邦威",
                        hoverDetail:"扫码查看案例"
                    },
                    {
                        imgPath:"/static/images/cases/al_icon_logo1.png",
                        imgBgPath:"url(/static/images/cases/logo.png) no-repeat center",
                        title:"蓝特斯邦威",
                        detail:"中国本土休闲服装品牌，为年轻消费者打造个性，流行的服饰产品",
                        hoverImgPath:"/static/images/cases/al_icon_logo2.png",
                        hoverImgBgPath:"url(/static/images/cases/al_icon_logo3.png) no-repeat center",
                        hoverTitle:"蓝特斯邦威",
                        hoverDetail:"扫码查看案例"
                    },
                    {
                        imgPath:"/static/images/cases/al_icon_logo1.png",
                        imgBgPath:"url(/static/images/cases/logo.png) no-repeat center",
                        title:"蓝特斯邦威",
                        detail:"中国本土休闲服装品牌，为年轻消费者打造个性，流行的服饰产品",
                        hoverImgPath:"/static/images/cases/al_icon_logo2.png",
                        hoverImgBgPath:"url(/static/images/cases/al_icon_logo3.png) no-repeat center",
                        hoverTitle:"蓝特斯邦威",
                        hoverDetail:"扫码查看案例"
                    },
                    {
                        imgPath:"/static/images/cases/al_icon_logo1.png",
                        imgBgPath:"url(/static/images/cases/logo.png) no-repeat center",
                        title:"蓝特斯邦威",
                        detail:"中国本土休闲服装品牌，为年轻消费者打造个性，流行的服饰产品",
                        hoverImgPath:"/static/images/cases/al_icon_logo2.png",
                        hoverImgBgPath:"url(/static/images/cases/al_icon_logo3.png) no-repeat center",
                        hoverTitle:"蓝特斯邦威",
                        hoverDetail:"扫码查看案例"
                    },
                    {
                        imgPath:"/static/images/cases/al_icon_logo1.png",
                        imgBgPath:"url(/static/images/cases/logo.png) no-repeat center",
                        title:"蓝特斯邦威",
                        detail:"中国本土休闲服装品牌，为年轻消费者打造个性，流行的服饰产品",
                        hoverImgPath:"/static/images/cases/al_icon_logo2.png",
                        hoverImgBgPath:"url(/static/images/cases/al_icon_logo3.png) no-repeat center",
                        hoverTitle:"蓝特斯邦威",
                        hoverDetail:"扫码查看案例"
                    },
                    {
                        imgPath:"/static/images/cases/al_icon_logo1.png",
                        imgBgPath:"url(/static/images/cases/logo.png) no-repeat center",
                        title:"蓝特斯邦威",
                        detail:"中国本土休闲服装品牌，为年轻消费者打造个性，流行的服饰产品",
                        hoverImgPath:"/static/images/cases/al_icon_logo2.png",
                        hoverImgBgPath:"url(/static/images/cases/al_icon_logo3.png) no-repeat center",
                        hoverTitle:"蓝特斯邦威",
                        hoverDetail:"扫码查看案例"
                    },
                    {
                        imgPath:"/static/images/cases/al_icon_logo1.png",
                        imgBgPath:"url(/static/images/cases/logo.png) no-repeat center",
                        title:"蓝特斯邦威",
                        detail:"中国本土休闲服装品牌，为年轻消费者打造个性，流行的服饰产品",
                        hoverImgPath:"/static/images/cases/al_icon_logo2.png",
                        hoverImgBgPath:"url(/static/images/cases/al_icon_logo3.png) no-repeat center",
                        hoverTitle:"蓝特斯邦威",
                        hoverDetail:"扫码查看案例"
                    },
                    {
                        imgPath:"/static/images/cases/al_icon_logo1.png",
                        imgBgPath:"url(/static/images/cases/logo.png) no-repeat center",
                        title:"蓝特斯邦威",
                        detail:"中国本土休闲服装品牌，为年轻消费者打造个性，流行的服饰产品",
                        hoverImgPath:"/static/images/cases/al_icon_logo2.png",
                        hoverImgBgPath:"url(/static/images/cases/al_icon_logo3.png) no-repeat center",
                        hoverTitle:"蓝特斯邦威",
                        hoverDetail:"扫码查看案例"
                    },
                    {
                        imgPath:"/static/images/cases/al_icon_logo1.png",
                        imgBgPath:"url(/static/images/cases/logo.png) no-repeat center",
                        title:"蓝特斯邦威",
                        detail:"中国本土休闲服装品牌，为年轻消费者打造个性，流行的服饰产品",
                        hoverImgPath:"/static/images/cases/al_icon_logo2.png",
                        hoverImgBgPath:"url(/static/images/cases/al_icon_logo3.png) no-repeat center",
                        hoverTitle:"蓝特斯邦威",
                        hoverDetail:"扫码查看案例"
                    },
                    {
                        imgPath:"/static/images/cases/al_icon_logo1.png",
                        imgBgPath:"url(/static/images/cases/logo.png) no-repeat center",
                        title:"蓝特斯邦威",
                        detail:"中国本土休闲服装品牌，为年轻消费者打造个性，流行的服饰产品",
                        hoverImgPath:"/static/images/cases/al_icon_logo2.png",
                        hoverImgBgPath:"url(/static/images/cases/al_icon_logo3.png) no-repeat center",
                        hoverTitle:"蓝特斯邦威",
                        hoverDetail:"扫码查看案例"
                    },
                    {
                        imgPath:"/static/images/cases/al_icon_logo1.png",
                        imgBgPath:"url(/static/images/cases/logo.png) no-repeat center",
                        title:"蓝特斯邦威",
                        detail:"中国本土休闲服装品牌，为年轻消费者打造个性，流行的服饰产品",
                        hoverImgPath:"/static/images/cases/al_icon_logo2.png",
                        hoverImgBgPath:"url(/static/images/cases/al_icon_logo3.png) no-repeat center",
                        hoverTitle:"蓝特斯邦威",
                        hoverDetail:"扫码查看案例"
                    }
                ]
            }
        },
        methods: {
            handleOver(index,el) {
                this.current = index;
            },
            handleOut(){
                this.current = null;
            }
        },
    }
</script>

<style scoped>
    .cases_list{
        width: 100%;
        height: auto;
        padding: 2.5rem 0;
    }
    .cases_list .cases_list_items{
        width: 100rem;
        height: auto;
        margin: 0 auto;
        display: flex;
        flex-flow:row wrap;
        justify-content: space-between;
        align-items: center;
    }
    .cases_list .cases_list_items .cases_list_item{
        width: 23rem;
        height: 34rem;
        background:#F7F9FC ;
        margin-bottom: 2.7rem;
        /* background: #0074D9; */
        position: relative;
    }
    .cases_list .cases_list_items .cases_list_item.active .cases_list_static{
        z-index: 6;
    }
    .cases_list .cases_list_items .cases_list_item.active .cases_list_active{
        z-index: 7;
        opacity: 1;
    }
    
    /* static */
    .cases_list .cases_list_items .cases_list_item .cases_list_static{
        width: 23rem;
        height: 34rem;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 7;
    }
    .cases_list .cases_list_items .cases_list_item .cases_list_static .cases_list_static_img{
        width: 10.25rem;
        height: 11.33rem;
        margin: 0 auto;
        overflow: hidden;
        margin: 0 auto;
        margin-top: 5.083rem;
        /* border-radius: 50%; */
        /* clip-path:polygon(50% 0,100% 25%,100% 75%,50% 100%); */
        /* clip-path:polygon(0 25%,50% 0,100% 25%,100% 75%,50% 100%,0 75%); */
    }
    .cases_list .cases_list_items .cases_list_item .cases_list_static  .cases_list_static_title{
        width: 21rem;
        padding: 1rem;
        text-align: center;
        font-size: 20px;
        color:#333;
        line-height: 2rem;
    }
    .cases_list .cases_list_items .cases_list_item .cases_list_static  .cases_list_static_detail{
        width: 21rem;
        padding: 1rem;
        line-height: 2rem;
        text-align: center;
        font-size: 16px;
        color:#666;
    }
    /* active */
    .cases_list .cases_list_items .cases_list_item .cases_list_active{
        width: 23rem;
        height: 34rem;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 6;
        transition: all .5s ease-in;
        opacity: 0;
    }
    .cases_list .cases_list_items .cases_list_item .cases_list_active .cases_list_active_img{
        width: 10.25rem;
        height: 11.33rem;
        margin: 0 auto;
        overflow: hidden;
        margin: 0 auto;
        margin-top: 5.083rem;
        /* border-radius: 50%; */
        /* clip-path:polygon(50% 0,100% 25%,100% 75%,50% 100%); */
        /* clip-path:polygon(0 25%,50% 0,100% 25%,100% 75%,50% 100%,0 75%); */
    }
    .cases_list .cases_list_items .cases_list_item .cases_list_active  .cases_list_active_title{
        width: 21rem;
        padding: 1rem;
        text-align: center;
        font-size: 20px;
        color:#fff;
        position: relative;
    }
    .cases_list .cases_list_items .cases_list_item .cases_list_active  .cases_list_active_title:before{
        content: "";
        width: 4.4rem;
        height: 0.167rem;
        position: absolute;
        bottom: 0;
        left: 9rem;
        background: #fff;
    }
    .cases_list .cases_list_items .cases_list_item .cases_list_active  .cases_list_active_detail{
        width: 21rem;
        padding: 1rem;
        text-align: center;
        font-size: 16px;
        color:#fff;
    }
</style>
