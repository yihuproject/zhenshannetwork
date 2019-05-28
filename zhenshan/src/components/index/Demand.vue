<template>
	<div class="demand" style="background: url(/static/images/index/home_bnt_zhineng.png) no-repeat center;">
        <slogan title="智能商业服务生态，满足广泛的业务需求" detail="联合服务商、开发者、合作伙伴，服务千万中小企业" color="#fff"></slogan>
		<div class="demand_classify">
				<a v-for="(item,index) in demand" :key="index" class="demand_classify_navigator">
					<div class="demand_classify_img">
						<img :src="item.imgPath" />
					</div>
					<div class="demand_classify_text">
						<div class="demand_classify_text_title">
							<i>{{item.text.title}}</i>
						</div>
						<div class="demand_classify_text_detail">
							<ul class="static_list">
								<li v-for="li in item.text.detail">
									{{li}}
								</li>
							</ul>
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
    import slogan from "../public/title"
	export default {
        components:{
            slogan
        },
		data(){
			return {
				demand:[
							{
								imgPath:"/static/images/index/home_icon_zn_ggtf.png",
								text:{
									title:"广告投放",
									detail:[
										"腾讯社交广告",
										"信息流广告",
										"广告助手",
										"知乎效果广告"
									],
                                    more:[
                                    	"我们连续两年荣获腾讯社交广告区域及行业最佳服务商，为客户提供包括微信朋友圈广告、微信公众号广告、QQ广告、腾讯新闻信息流广告、腾讯视频信息流广告等社交广告的投放服务。 凭借专业的运营团队为广告主提供一站式精准移动广告投放服务，并率先推出广告+小程序一体化解决方案！"
                                    ]
								}
							},
							{
								imgPath:"/static/images/index/home_icon_zn_fw.png",
								text:{
									title:"服务市场",
									detail:[
										"电商管理",
                                        "调度系统",
                                        "营销插件",
                                        "收银系统"
									],
									more:[
										"为满足商户多元化的需求而打造的一站式第三方服务选购平台。 服务市场现已基本涵盖公众号运营所需要的各类应用和服务，包括：微官网、微商城、微分销、微会员、营销插件、客户关系管理等，助力商户解决运营难题。"
									]
								}
							},
							{
								imgPath:"/static/images/index/home_icon_zn_dzkf.png",
								text:{
									title:"定制开发",
									detail:[
										"服务号定制",
										"企业号定制",
										"小程序定制",
										"个性化行业定制"
									],
									more:[
                                        "以互联网定制开发为主营业务，专注微信服务号、企业号、微信公众平台开发和微信小程序等的微信开发服务。凭借专业的研发团队，在微信商城、会员、分销、营销互动以及商业地产、酒店、医疗美容、汽车和零售等行业具有丰富的开发经验，全方位满足企业个性化需求"
                                    ]
								}
							},
							{
								imgPath:"/static/images/index/home_icon_zn_zny.png",
								text:{
									title:"智能云",
									detail:[
										"电商云",
										"餐饮云",
										"客户云",
										"营销云",
										"数据云"
									],
                                    more:[
                                        "集电商云，餐饮云，客户云，营销云，数据云等开放能力，为开发者提供数百个开放API接口，涵盖用户，商品，交易，订单，库存等核心业务功能，国内专业的开发者云平台。"
                                    ]
								}
							}
						]
			}
		}
	}
</script>

<style scoped>
	.demand{
		width: 100%;
		height: 56rem;
		background-size:cover;
	}
	.demand .demand_classify{
		width: 100rem;
		height: auto;
		margin: 0 auto;
		display: flex;
		flex-flow:row nowrap;
		justify-content: space-between;
	}
	.demand .demand_classify .demand_classify_navigator{
		width: 23.75rem;
		height: 33.4rem;
		background:rgba(0,0,0,0.4);
		transition: all .3s ease-in;
	}
	.demand .demand_classify .demand_classify_navigator:hover{
		background:#fff;
	}
	.demand .demand_classify .demand_classify_navigator:hover .demand_classify_text .demand_classify_text_title i{
		color:#333;
	}
    .demand .demand_classify .demand_classify_navigator:hover .demand_classify_text .demand_classify_text_detail ul{
        display: none;
    }
	.demand .demand_classify .demand_classify_navigator:hover .demand_classify_text .demand_classify_text_detail ul>li{
		color:#666;
	}
	.demand .demand_classify .demand_classify_navigator:hover .demand_classify_text .demand_classify_text_detail .more>.mo_li{
		color:#666;
        display: inline-block;
	}
	
	.demand .demand_classify .demand_classify_navigator .demand_classify_img{
		width: 23.75rem;
		height: 9.5rem;
	}
	.demand .demand_classify .demand_classify_navigator .demand_classify_img img{
		width: 5rem;
		height: 5rem;
		margin: 4.5rem 9.375rem 0 9.375rem;
	}
	.demand .demand_classify .demand_classify_navigator .demand_classify_text{
		width: 23.75rem;
		height: 23.9rem;
	}
	.demand .demand_classify .demand_classify_navigator .demand_classify_text .demand_classify_text_title{
		width: 23.75rem;
		height: 5rem;
		line-height: 5rem;
		text-align: center;
	}
	.demand .demand_classify .demand_classify_navigator .demand_classify_text .demand_classify_text_title i{
		font-weight: bold;
		font-size: 18px;
		color:#fff;
		padding: 1rem 0;
		border-bottom:1px solid #dedede;
	}
	.demand .demand_classify .demand_classify_navigator .demand_classify_text .demand_classify_text_detail{
		width: 23.75rem;
	}
	.demand .demand_classify .demand_classify_navigator .demand_classify_text .demand_classify_text_detail ul{
		width: 21.75rem;
		padding:1rem;
		font-size: 14px;
	}
	.demand .demand_classify .demand_classify_navigator .demand_classify_text .demand_classify_text_detail ul.static_list>li{
		width: 21.75rem;
		text-align: center;
		padding:0.8rem 0;
		color:#fff;
        display: inline-block;
	}
	.demand .demand_classify .demand_classify_navigator .demand_classify_text .demand_classify_text_detail .more{
		width: 21.75rem;
		padding:1rem;
		font-size: 14px;
	}
	.demand .demand_classify .demand_classify_navigator .demand_classify_text .demand_classify_text_detail .more>.mo_li{
		width: 21.75rem;
        line-height: 2rem;
		text-align: center;
		color:#fff;
        display: none;
	}
</style>