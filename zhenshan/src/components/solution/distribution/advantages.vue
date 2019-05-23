<template>
    <div class="advanages">
        <slogan title="全渠道分销优势" detail="快速打通全国渠道，建立线上分销代理体系，抢占移动端市场份额"></slogan>
        <ul class="advantages_items">
            <li v-for="item in items">
                <div class="advantages_icon ">
                    <img :src="item.icon">
                </div>
                <p class="advantages_detail">
                    {{item.detail}}
                </p>
            </li>
        </ul>
    </div>
</template>

<script>
    import slogan from "../../public/title"
    export default {
        data(){
            return {
                items:[
                    {
                        icon:"/static/images/solution_cases/wfx_ic_ys_cbd.png",
                        detail:"开店成本低"
                    },
                    {
                        icon:"/static/images/solution_cases/wfx_ic_ys_lbk.png",
                        detail:"裂变速度快"
                    },
                    {
                        icon:"/static/images/solution_cases/wfx_ic_ys_yth.png",
                        detail:"一体化管理"
                    },
                    {
                        icon:"/static/images/solution_cases/wfx_ic_ys_sjcb.png",
                        detail:"社交传播"
                    },
                    {
                        icon:"/static/images/solution_cases/wfx_ic_ys_xlg.png",
                        detail:"分销代理，效率高"
                    },
                    {
                        icon:"/static/images/solution_cases/wfx_ic_ys_kkxq.png",
                        detail:"可控性强"
                    }
                ]
            }
        },
        components: {
            slogan
        },
    }
</script>

<style scoped>
    .advanages{
        width: 100%;
        height: 37rem;
    }
   .advanages .advantages_items{
       width: 100rem;
       height: 21.7rem;
       margin: 0 auto;
       display: flex;
       flex-flow: row nowrap;
       justify-content: space-between;
       align-items: center;
   }
    .advanages .advantages_items li{
       width: auto;
       height: 15rem;
   }
    .advanages .advantages_items li>.advantages_icon{
       width: 10rem;
       height: 11rem;
        margin: 0 auto;
   }
    .advanages .advantages_items li>.advantages_icon img{
       margin-left: 0.22rem;
   }
   .advanages .advantages_items li>.advantages_detail{
       color: #333;
       font-size: 18px;
       text-align: center;
       margin-top: 1rem;
   }
</style>
