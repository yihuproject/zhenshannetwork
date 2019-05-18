<template>
	<div class="support">
		<div class="support_slogan">
			<div class="support_slogan_title">
				<i>强大的研发实力，安全稳定可靠的系统支持</i>
			</div>
			<div class="support_slogan_detail">
				<i>来自互联网优秀的技术研发团队，打造安全稳定可用的系统</i>
			</div>
		</div>
		<div class="support_classify">
			<div class="support_classify_left">
				<ul>
					<li v-for="(li,index) in support.left.liArr">
						<div class="support_classify_left_data">
							<span>{{li.title}}</span>
							<i>{{li.symbol}}</i>
						</div>
						<div class="support_classify_left_detail">
							{{li.detail}}
						</div>
					</li>
				</ul>
			</div>
			<div class="support_classify_right">
				<ul>
					<li v-for="(li,index) in support.right.liArr">
						<div class="support_classify_right_img">
							<img :src="li.imgPath" alt="">
						</div>
						<div class="support_classify_right_text">
							<div class="support_classify_right_text_title">
								{{li.title}}
							</div>
							<div class="support_classify_right_text_detail">
								{{li.detail}}
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				support:{
					left:{
						liArr:[
							{
								title:"99.9",
								symbol:"%",
								detail:"系统可用性"
							},
							{
								title:"1200",
								symbol:"+",
								detail:"精品平台案例"
							},
							{
								title:"<200",
								symbol:"毫秒",
								detail:"服务平均响应"
							}
						]
					},
					right:{
						liArr:[
							{
								imgPath:"/static/images/home_icon_yf_anq.png",
								title:"安全稳定",
								detail:"多年技术积累，混合云部署，云防火墙，多地互备，服务治理弹性伸缩能力，全方位监控为超百万商户的业务保驾护航。"
							},
							{
								imgPath:"/static/images/home_icon_yf_ty.png",
								title:"极致体验",
								detail:"BGP网络，CDN加速，单页面技术，优秀的端技术，让你的用户无论身在全球何处，均能获得灵活流畅的极致体验。"
							},
							{
								imgPath:"/static/images/home_icon_yf_gx.png",
								title:"智慧高效",
								detail:"大数据和人工智能技术，为您提供BI报表，智能客服，精准会员营销等，微盟智慧科技助您全面飞跃发展。"
							}
							
						]
					}
				}
			}
		}
	}
</script>

<style scoped>
	.support{
		width: 100%;
		height: 48.67rem;
		background: #000;
	}
	.support .support_slogan{
		width: 100rem;
		height: auto;
		padding: 4.17rem 0;
		margin: 0 auto;
	}
	.support .support_slogan .support_slogan_title{
		width: 100rem;
		height: auto;
		text-align: center;
		font-size: 32px;
		color: #fff;
	}
	.support .support_slogan .support_slogan_detail{
		width: 100rem;
		height: auto;
		text-align: center;
		font-size: 16px;
		margin-top: 1.67rem;
		color: #fff;
	}
	.support .support_classify{
		width: 100rem;
		height: auto;
		margin: 0 auto;
		display: flex;
		flex-flow:row nowrap;
		justify-content: space-between;
	}
	.support .support_classify .support_classify_left{
		width: 21.67rem;
		height: 27.67rem;
	}
	.support .support_classify .support_classify_left>ul{
		width: 21.67rem;
		height: 27.67rem;
	}
	.support .support_classify .support_classify_left>ul li{
		width: 21.67rem;
		height: 9.23rem;
		color:#fff;
	}
		.support .support_classify .support_classify_left>ul li{
		width: 21.67rem;
		height: 9.23rem;
	}
		.support .support_classify .support_classify_left>ul li .support_classify_left_data{
			width: 21.67rem;
			height: 5rem;
			line-height: 5rem;
		}
		.support .support_classify .support_classify_left>ul li .support_classify_left_data>span{
			font-size: 36px;
		}
		.support .support_classify .support_classify_left>ul li .support_classify_left_data>i,.support .support_classify .support_classify_left>ul li .support_classify_left_detail{
			font-size: 16px;
		}
	.support .support_classify .support_classify_right{
		width: 80rem;
		height: 27.167rem;
	}
	.support .support_classify .support_classify_right>ul{
		width: 81rem;
		height: 27.167rem;
	}
	.support .support_classify .support_classify_right>ul li{
		width: 25rem;
		height: 27.167rem;
		margin-left: 1.67rem;
		float: left;
		background:rgba(229,229,229,0.3);
	}
	.support .support_classify .support_classify_right>ul li .support_classify_right_img{
		width: 25rem;
		height: 8rem;
	}
	.support .support_classify .support_classify_right>ul li .support_classify_right_img img{
		width: 6rem;
		height: 6rem;
		margin: 3rem 9.5rem 0 9.5rem;
	}
	.support .support_classify .support_classify_right>ul li .support_classify_right_text{
		width: 25rem;
		height: 18.167rem;
	}
	.support .support_classify .support_classify_right>ul li .support_classify_right_text .support_classify_right_text_title{
		width: 25rem;
		height: 5rem;
		line-height: 5rem;
		text-align: center;
		font-weight: bold;
		font-size: 18px;
		color:#fff;
	}
	.support .support_classify .support_classify_right>ul li .support_classify_right_text .support_classify_right_text_detail{
		width: 23rem;
		color:#fff;
		text-align: center;
		line-height: 2.75rem;
		font-size: 14px;
		padding: 0 1rem;
	}
</style>