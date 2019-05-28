<template>
	<div class="transition_block">
        <slogan title="全渠道分销特色功能" detail="助力传统代理模式转型互联网，结合传统线下分销渠道+线上全民分销模式"></slogan>
		<div class="demand_classify">
				<a v-for="(item,index) in arr" :key="index" class="demand_classify_navigator">
					<div class="demand_classify_img">
						<img class="static_img" v-lazy="item.imgPath"/>
					</div>
					<div class="demand_classify_text">
						<div class="demand_classify_text_title">
							<i>{{item.text.title}}</i>
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
                current:null,
                arr:[
                            {
                            	imgPath:"/static/images/solution_cases/wfx_ic_yfs_xt.png",
                            	text:{
                            		title:"系统稳定"
                            	}
                            },
                            {
                            	imgPath:"/static/images/solution_cases/wfx_ic_yfs_fwq.png",
                            	text:{
                            		title:"多服务器均衡负载"
                            	}
                            },
                            {
                            	imgPath:"/static/images/solution_cases/wfx_ic_yfs_td.png",
                            	text:{
                            		title:"1000人技术团队保驾护航"
                            	}
                            },
                            {
                            	imgPath:"/static/images/solution_cases/wfx_ic_yfs_kscl.png",
                            	text:{
                            		title:"订单处理速度更快速"
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
		height: 44.16rem;
		background: #F5F7FA;
	}
	.transition_block .demand_classify{
		width: 100rem;
		height: 28.86rem;
		margin: 0 auto;
		display: flex;
		flex-flow:row wrap;
		justify-content: space-between;
	}
	.transition_block .demand_classify .demand_classify_navigator{
		width:22.5rem;
		height: 17.8rem;
		background:#fff;
		transition: all 1s;
	}
	.transition_block .demand_classify .demand_classify_navigator .demand_classify_img{
		width:22.5rem;
		height: 12rem;
	}
	.transition_block .demand_classify .demand_classify_navigator .demand_classify_img img{
		width: 6.66rem;
		height: 6.66rem;
		margin: 3.5rem 7.92rem 0 7.92rem;
	}
	.transition_block .demand_classify .demand_classify_navigator .demand_classify_text{
		width:22.5rem;
		height: 5.8rem;
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
</style>