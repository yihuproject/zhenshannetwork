<template>
	<div class="transition_block">
        <slogan title="数据分析" detail="各种数据统一精细化分析，为精准营销提供有力依据"></slogan>
		<div class="demand_classify">
				<a v-for="(item,index) in arr" :key="index" class="demand_classify_navigator" :class="{active:index == current}" @mouseover="changeImg(index)"
                @mouseleave="changeImg2(index)">
					<div class="demand_classify_img">
						<img class="static_img" :src="item.imgPath" />
						<img class="active_img" :src="item.imgPath1" />
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
        methods: {
            changeImg(index) {
               this.current = index;
            },
            changeImg2(index) {
               this.current = null;
            }
        },
		data(){
			return {
                current:null,
                arr:[
                			{
                				imgPath:"/static/images/solution_cases/wfx_ic_sjf_jysj.png",
                				imgPath1:"/static/images/solution_cases/wfx_ic_sjf_jysj1.png",
                				text:{
                					title:"交易数据",
                					more:[
                						"订单数据、商品数据、售后数据等精细化分析，提升经营效率"
                					]
                				}
                			},
                			{
                				imgPath:"/static/images/solution_cases/wfx_ic_sjf_cw.png",
                				imgPath1:"/static/images/solution_cases/wfx_ic_sjf_cw1.png",
                				text:{
                					title:"财务数据",
                					more:[
                						"清晰记录每一笔数据进出，准备核算每笔订单"
                					]
                				}
                			},
                			{
                				imgPath:"/static/images/solution_cases/wfx_ic_sjf_hy.png",
                				imgPath1:"/static/images/solution_cases/wfx_ic_sjf_hy1.png",
                				text:{
                					title:"会员数据",
                					more:[
                						"数据分析会员属性、消费行为、增长趋势，让你更懂用户营销"
                					]
                					
                				}
                			},
                			{
                				imgPath:"/static/images/solution_cases/wfx_ic_sjf_yx.png",
                				imgPath1:"/static/images/solution_cases/wfx_ic_sjf_yx1.png",
                				text:{
                					title:"营销数据",
                					more:[
                						"从活动曝光到支付转化，全程记录跟踪活动效果"
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
		background: #fff;
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
		background:#F8F8F8;
		transition: all 1s;
	}
	.transition_block .demand_classify .demand_classify_navigator:hover{
		background:#2E82FF;
	}
	.transition_block .demand_classify .demand_classify_navigator:hover .demand_classify_text .demand_classify_text_title i{
		color:#fff;
	}
	.transition_block .demand_classify .demand_classify_navigator:hover .demand_classify_text .demand_classify_text_detail .more>.mo_li{
		color:#fff;
	}
    .transition_block .demand_classify .demand_classify_navigator.active .demand_classify_img img.active_img{
    	display: inline-block;
    }
    .transition_block .demand_classify .demand_classify_navigator.active .demand_classify_img img.static_img{
    	display: none;
    }
    .transition_block .demand_classify .demand_classify_navigator .demand_classify_img img.active_img{
    	display: none;
    }
    .transition_block .demand_classify .demand_classify_navigator .demand_classify_img img.static_img{
    	display: inline-block;
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
		color:#333;
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
		color:#666;
	}
</style>