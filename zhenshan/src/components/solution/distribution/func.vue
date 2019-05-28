<template>
	<div class="transition_block">
        <slogan title="全渠道分销特色功能" detail="助力传统代理模式转型互联网，结合传统线下分销渠道+线上全民分销模式"></slogan>
		<div class="demand_classify">
				<a v-for="(item,index) in arr" :key="index" class="demand_classify_navigator" :class="{active:index == current}" @mouseover="changeImg(index)"
                @mouseleave="changeImg2(index)">
					<div class="demand_classify_img">
						<img class="static_img" v-lazy="item.imgPath"/>
						<img class="active_img" v-lazy="item.imgPath1"/>
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
                				imgPath:"/static/images/solution_cases/wfx_ic_zx.png",
                				imgPath1:"/static/images/solution_cases/wfx_ic_zx1.png",
                				text:{
                					title:"店铺装修",
                                    more:[
                                    	"迅速做出高大上，专属精美的分销商城；在线客服，员工分权系统；分销商佣金模式多样化、按需设置"
                                    ]
                				}
                			},
                			{
                				imgPath:"/static/images/solution_cases/wfx_ic_lb.png",
                				imgPath1:"/static/images/solution_cases/wfx_ic_lb1.png",
                				text:{
                					title:"裂变分出",
                					more:[
                						"关注公众号一键开店-可自定义小店名称、店招。开启自定义分销时代。"
                					]
                				}
                			},
                			{
                				imgPath:"/static/images/solution_cases/wfx_ic_fxdd.png",
                				imgPath1:"/static/images/solution_cases/wfx_ic_fxdd1.png",
                				text:{
                					title:"分销订单",
                					more:[
                						"订单统一收订，统一发货；分销商后台订单实时同步；分销数据一目了然"
                					]
                				}
                			},
                			{
                				imgPath:"/static/images/solution_cases/wfx_ic_tgxc.png",
                				imgPath1:"/static/images/solution_cases/wfx_ic_tgxc1.png",
                				text:{
                					title:"推广宣传",
                					more:[
                						"专属微信小店二维码，既能为自己推广，还能招募分销商团队状态一目了然。"
                					]
                				}
                			},
                            {
                            	imgPath:"/static/images/solution_cases/wfx_ic_yxgj.png",
                            	imgPath1:"/static/images/solution_cases/wfx_ic_yxgj1.png",
                            	text:{
                            		title:"营销工具",
                                    more:[
                                    	"多种营工具则，签到，砍价，拼团等，带动营销多发样化，促进产品分销"
                                    ]
                            	}
                            },
                            {
                            	imgPath:"/static/images/solution_cases/wfx_ic_cwgl.png",
                            	imgPath1:"/static/images/solution_cases/wfx_ic_cwgl1.png",
                            	text:{
                            		title:"财务管理",
                            		more:[
                            			"清楚查看自己的分销商团队和订单情况；分销商佣金快速提现，自动打款到微信钱包。"
                            		]
                            	}
                            },
                            {
                            	imgPath:"/static/images/solution_cases/wfx_ic_xnkc.png",
                            	imgPath1:"/static/images/solution_cases/wfx_ic_xnkc1.png",
                            	text:{
                            		title:"虚拟库存",
                            		more:[
                            			"实现代理商0物流、0库存、低风险的不囤货代理模式，还能与原有的囤货模式完美结合。"
                            		]
                            		
                            	}
                            },
                            {
                            	imgPath:"/static/images/solution_cases/wfx_ic_sjfx.png",
                            	imgPath1:"/static/images/solution_cases/wfx_ic_sjfx1.png",
                            	text:{
                            		title:"数据分析",
                            		more:[
                            			"多维业务报表，实时把控商品流通动向、财务分析、客户分析、商品分析"
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
		height: 73.416rem;
		background: #F5F7FA;
	}
	.transition_block .demand_classify{
		width: 100rem;
		height: 58.116rem;
		margin: 0 auto;
		display: flex;
		flex-flow:row wrap;
		justify-content: space-between;
	}
	.transition_block .demand_classify .demand_classify_navigator{
		width:22.5rem;
		height: 22.5rem;
		background:#fff;
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
    
	.transition_block .demand_classify .demand_classify_navigator .demand_classify_img{
		width:22.5rem;
		height: 9rem;
	}
	.transition_block .demand_classify .demand_classify_navigator .demand_classify_img img{
		width: 6.66rem;
		height: 6.66rem;
		margin: 1.17rem 7.92rem 0 7.92rem;
	}
	.transition_block .demand_classify .demand_classify_navigator .demand_classify_img img.static_img{
		display: inline-block;
	}
	.transition_block .demand_classify .demand_classify_navigator.active .demand_classify_img img.static_img{
		display: none;
	}
	.transition_block .demand_classify .demand_classify_navigator .demand_classify_img img.active_img{
		display: none;
	}
	.transition_block .demand_classify .demand_classify_navigator.active .demand_classify_img img.active_img{
		display: inline-block;
	}
	.transition_block .demand_classify .demand_classify_navigator .demand_classify_text{
		width:22.5rem;
		height: 13.5rem;
	}
	.transition_block .demand_classify .demand_classify_navigator .demand_classify_text .demand_classify_text_title{
		width:22.5rem;
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
		width:22.5rem;
        height: 8.5rem;
	}
	.transition_block .demand_classify .demand_classify_navigator .demand_classify_text .demand_classify_text_detail .more{
		width:20.5rem;
		padding:1rem;
		font-size: 14px;
	}
	.transition_block .demand_classify .demand_classify_navigator .demand_classify_text .demand_classify_text_detail .more>.mo_li{
		width:20.5rem;
		text-align: center;
		color:#666;
	}
</style>