<template>
	<div class="cooperation">
        <slogan title="品牌客户的合作" detail="用心服务过的优质客户"></slogan>
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
    import slogan from "../public/title"
	export default {
		data(){
			return {
				cooperation:{
					liArr:{
						img:[
							"/static/images/index/f9_anta.png",
							"/static/images/index/f9_bcw.png",
							"/static/images/index/f9_dydq.png",
							"/static/images/index/f9_fg.png",
							"/static/images/index/f9_lppz.png",
							"/static/images/index/f9_jb.png",
							"/static/images/index/f9_yj.png",
							"/static/images/index/f9_xlk.png",
							"/static/images/index/f9_wysj.png",
							"/static/images/index/f9_sxjf.png"
						]
					}
				}
			}
		},
        components:{
            slogan
        },
	}
</script>

<style scoped>
	.cooperation{
		width: 100%;
		height: 50rem;
		background: #fff;
	}
	.cooperation .cooperation_img{
		width: 100rem;
		height: 30rem;
		margin: 0 auto;
	}
	.cooperation .cooperation_img ul{
		width: 100rem;
		height: 30rem;
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