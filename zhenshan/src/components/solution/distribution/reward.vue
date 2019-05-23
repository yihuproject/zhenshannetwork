<template>
	<div class="transition_block">
        <slogan title="等级奖励功能，会员激励竞争结算" detail="你可以根据您会员的等级，设置不同的推荐购买提成，激发用户重复消费，消费越多，提成越多。" :color="color"></slogan>
		<div class="demand_classify">
				<a v-for="(item,index) in arr" :key="index" class="demand_classify_navigator">
					<div class="demand_classify_img">
						<img :src="item.imgPath" />
					</div>
					<div class="demand_classify_text">
						<div class="demand_classify_text_title">
							<i>{{item.text.title}}</i>
						</div>
						<div class="demand_classify_text_detail">
							<div class="more">
								<div class="mo_li" v-for="mo in item.text.more">
									{{mo}}
								</div>
							</div>
						</div>
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
                color:"#fff",
                arr:[
                			{
                				imgPath:"/static/images/solution_cases/wfx_ic_djg_hy.png",
                				text:{
                					title:"会员等级",
                					more:[
                						"根据会员的不同消费能力，划分相应的会员等级、会员权益等，不同等级享受不同的优惠"
                					]
                				}
                			},
                			{
                				imgPath:"/static/images/solution_cases/wfx_ic_djg_fxdj.png",
                				text:{
                					title:"分销商等级",
                					more:[
                						"不同的分销商等级可以设置不同的返佣比例，针对具体产品也可实现具体等级分销具体的产品"
                					]
                				}
                			},
                			{
                				imgPath:"/static/images/solution_cases/wfx_ic_djg_dls.png",
                				text:{
                					title:"代理商等级",
                					more:[
                						"对不同的代理商设置不同的返佣比例，同时支持区域、非区域代理的设置"
                					]
                					
                				}
                			},
                			{
                				imgPath:"/static/images/solution_cases/wfx_ic_djg_mdyg.png",
                				text:{
                					title:"门店/员工等级",
                					more:[
                						"不同的门店、员工设置不同的等级刺激线下门店与员工的分销热情，门店也享受一条线业绩的奖励"
                					]
                				}
                			}
                		]
			}
		}
	}
</script>
<style scoped>
	.transition_block{
		width: 100%;
		height: 51rem;
		background: url(/static/images/solution_cases/wfx_ic_djg_bnt.png) no-repeat center;
		background-size:cover;
	}
	.transition_block .demand_classify{
		width: 100rem;
		height: 35.7rem;
		margin: 0 auto;
		display: flex;
		flex-flow:row nowrap;
		justify-content: space-between;
	}
	.transition_block .demand_classify .demand_classify_navigator{
		width: 23.75rem;
		height: 28.4rem;
		background:rgba(0,0,0,0.4);
		transition: all 1s;
	}
	.transition_block .demand_classify .demand_classify_navigator:hover{
		background:#fff;
	}
	.transition_block .demand_classify .demand_classify_navigator:hover .demand_classify_text .demand_classify_text_title i{
		color:#333;
	}
	.transition_block .demand_classify .demand_classify_navigator:hover .demand_classify_text .demand_classify_text_detail ul>li{
		color:#666;
	}
	.transition_block .demand_classify .demand_classify_navigator:hover .demand_classify_text .demand_classify_text_detail .more>.mo_li{
		color:#666;
	}
	
	.transition_block .demand_classify .demand_classify_navigator .demand_classify_img{
		width: 23.75rem;
		height: 9.5rem;
	}
	.transition_block .demand_classify .demand_classify_navigator .demand_classify_img img{
		margin: 2.83rem 8.54rem 0 8.54rem;
	}
	.transition_block .demand_classify .demand_classify_navigator .demand_classify_text{
		width: 23.75rem;
		height: 18.9rem;
	}
	.transition_block .demand_classify .demand_classify_navigator .demand_classify_text .demand_classify_text_title{
		width: 23.75rem;
		height: 5rem;
		line-height: 5rem;
		text-align: center;
	}
	.transition_block .demand_classify .demand_classify_navigator .demand_classify_text .demand_classify_text_title i{
		font-weight: bold;
		font-size: 18px;
		color:#fff;
		padding: 1rem 0;
	}
	.transition_block .demand_classify .demand_classify_navigator .demand_classify_text .demand_classify_text_detail{
		width: 23.75rem;
	}
	.transition_block .demand_classify .demand_classify_navigator .demand_classify_text .demand_classify_text_detail .more{
		width: 21.75rem;
		padding:1rem;
		font-size: 14px;
	}
	.transition_block .demand_classify .demand_classify_navigator .demand_classify_text .demand_classify_text_detail .more>.mo_li{
		width: 21.75rem;
		text-align: center;
		color:#fff;
	}
</style>