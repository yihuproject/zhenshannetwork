<template>
	<div class="transition_block">
        <slogan title="小程序微分销一站式解决方案" detail="小程序+公众号一体化微信商城，快速开启移动端电商市场，打造多入口引流，布局线上线下多营销入口，快速变现。"></slogan>
		<div class="demand_classify">
				<a v-for="(item,index) in arr" :key="index" class="demand_classify_navigator">
					<div class="demand_classify_text">
                        <p class="demand_classify_text_title">{{item.title}}</p>
                        <p class="demand_classify_text_detail">{{item.detail}}</p>
					</div>
					<div class="demand_classify_arr" :style="{background:item.imgPath}">
						<ul class="demand_classify_arr_container">
                            <li v-for="li in item.liArr">
                                <div class="demand_classify_arr_container_icon">
                                    <img :src="item.icon" alt="">
                                </div>
                                <div class="demand_classify_arr_container_text">
                                    {{li}}
                                </div>
                            </li>
                        </ul>
					</div>
				</a>
		</div>
	</div>
</template>
<script>
    import slogan from "../../public/title"
	export default {
        components:{
            slogan
        },
		data(){
			return {
                arr:[
                			{
                				imgPath:"url(/static/images/solution_cases/wfx_bnt_hk.png) no-repeat center",
                                title:"获客",
                                detail:"几十种获客途径引爆小程序流量",
                                icon:"/static/images/solution_cases/icon_sanjiao.png",
                				liArr:[
                						"附近小程序",
                						"关联公众号",
                						"小程序码",
                						"门店推广",
                						"小程序互跳",
                						"社群分享",
                						"更多~"
                                    ]
                			},
                			{
                				imgPath:"url(/static/images/solution_cases/wfx_bnt_sc.png) no-repeat center",
                                title:"小程序商城",
                                detail:"分销代理等多种运营模式覆盖任何场景",
                                icon:"/static/images/solution_cases/icon_sanjiao.png",
                				liArr:[
                						"分销代理",
                						"LBS定位",
                						"附近门店",
                						"商品展示",
                						"预约服务",
                						"微信支付",
                						"更多~"
                					]
                			},
                			{
                				imgPath:"url(/static/images/solution_cases/wfx_bnt_ecfx.png) no-repeat center",
                                title:"二次营销",
                                detail:"丰富营销活动提高客户复购率",
                                icon:"/static/images/solution_cases/icon_sanjiao.png",
                				liArr:[
                						"会员权益",
                						"积分商城",
                						"优惠券发放",
                						"拼团，砍价活动",
                                        "大转盘，抽奖活动",
                						"优惠券发放",
                						"限时秒杀，打折",
                						"更多~"
                					]
                			}
                		]
			}
		}
	}
</script>
<style scoped>
	.transition_block{
		width: 100%;
		height: 52.467rem;
        margin-bottom: 8rem;
	}
	.transition_block .demand_classify{
		width: 100rem;
		height: 37.167rem;
		margin: 0 auto;
		display: flex;
		flex-flow:row nowrap;
		justify-content: space-between;
	}
	.transition_block .demand_classify .demand_classify_navigator{
		width: 23.75rem;
		height: 37.167rem;
		background:rgba(0,0,0,0.4);
		transition: all 1s;
	}
	.transition_block .demand_classify .demand_classify_navigator .demand_classify_text{
		 width: 23.75rem;
		height: 6rem;
		background:linear-gradient(-23deg,rgba(255,187,24,1),rgba(255,148,21,1));
		color:#fff;
        text-align: center;
        padding: 2rem 0;
	}
	.transition_block .demand_classify .demand_classify_navigator .demand_classify_text .demand_classify_text_title{
		line-height: 3rem;
		font-size: 30px;
	}
	.transition_block .demand_classify .demand_classify_navigator .demand_classify_text .demand_classify_text_detail{
		line-height: 2.5rem;
		font-size: 16px;
	}
	.transition_block .demand_classify .demand_classify_navigator .demand_classify_arr{
		width: 23.75rem;
		height: 27.167rem;
		color:#fff;
        text-align: center;
        padding: 2rem 0;
	}
    .transition_block .demand_classify .demand_classify_navigator .demand_classify_arr .demand_classify_arr_container{
        width: 23.75rem;
        height: 27.167rem;
        padding: 2rem 0;
    }
    .transition_block .demand_classify .demand_classify_navigator .demand_classify_arr .demand_classify_arr_container>li{
        width: 19.75rem;
        height: 3.8rem;
        padding: 0 2rem;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
    }
    .transition_block .demand_classify .demand_classify_navigator .demand_classify_arr .demand_classify_arr_container>li .demand_classify_arr_container_icon{
        width: 7.9rem;
        height: 3.8rem;
    }
    .transition_block .demand_classify .demand_classify_navigator .demand_classify_arr .demand_classify_arr_container>li .demand_classify_arr_container_icon img{
        margin-left: 5rem;
        margin-top: 1.5rem;
    }
    .transition_block .demand_classify .demand_classify_navigator .demand_classify_arr .demand_classify_arr_container>li .demand_classify_arr_container_text{
        width: 11.85rem;
        height: 3.8rem;
        line-height: 3.8rem;
        text-align: left;
        font-size: 16px;
    }
    
    
    
    
    /* 
    demand_classify_arr_container_icon */
</style>