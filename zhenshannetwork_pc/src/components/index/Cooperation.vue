<template>
	<div class="cooperation">
		<div class="cooperation_slogan">
			<div class="cooperation_slogan_title">
				<i>品牌客户的合作</i>
			</div>
			<div class="cooperation_slogan_detail">
				<i>用心服务过的优质客户</i>
			</div>
		</div>
		<div class="cooperation_img">
			<ul>
				<li v-for="(item,index) in cooperation.liArr.img">
					<img :src="item">
				</li>
			</ul>
		</div>
		
		
		
		
	</div>
</template>

<script>
	export default {
		data(){
			return {
				cooperation:{
					liArr:{
						img:[
							"/static/images/f9_anta.png",
							"/static/images/f9_bcw.png",
							"/static/images/f9_dydq.png",
							"/static/images/f9_fg.png",
							"/static/images/f9_lppz.png",
							"/static/images/f9_jb.png",
							"/static/images/f9_yj.png",
							"/static/images/f9_xlk.png",
							"/static/images/f9_wysj.png",
							"/static/images/f9_sxjf.png"
						]
					}
				}
			}
		}
	}
</script>

<style scoped>
	.cooperation{
		width: 100%;
		height: 57.5rem;
		background: #fff;
	}
	.cooperation .cooperation_slogan{
		width: 100rem;
		height: auto;
		padding: 4.17rem 0;
		margin: 0 auto;
	}
	.cooperation .cooperation_slogan .cooperation_slogan_title{
		width: 100rem;
		height: auto;
		text-align: center;
		font-size: 32px;
		color: #333;
	}
	.cooperation .cooperation_slogan .cooperation_slogan_detail{
		width: 100rem;
		height: auto;
		text-align: center;
		font-size: 16px;
		margin-top: 1.67rem;
		color: #666;
	}
	.cooperation .cooperation_img{
		width: 100rem;
		height: 57.5rem;
		margin: 0 auto;
	}
	.cooperation .cooperation_img ul{
		width: 100rem;
		height: 57.5rem;
	}
	.cooperation .cooperation_img ul li{
		width: 16.4167rem;
		height: 7.67rem;
		float: left;
		margin-top: 5.67rem;
		margin-right: 3.584rem;
	}
		.cooperation .cooperation_img ul li>img{
			width: 16.4167rem;
			height: auto;
		}
</style>