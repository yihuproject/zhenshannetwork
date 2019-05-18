<template>
	<div class="services_map">
		<div class="services_map_slogan">
			<div class="services_map_slogan_title">
				<i>遍布全国的销售网络提供本地化的服务</i>
			</div>
			<div class="services_map_slogan_detail">
				<i>无论你身在何处，均能享受本地化的服务体验</i>
			</div>
		</div>
		<div class="services_map_account">
			<ul>
				<li v-for="(item,index) in servicesMap.account.title">
					<span>{{item}}</span>
					<i>{{servicesMap.account.detail[index]}}</i>
				</li>

			</ul>
		</div>
		<div class="services_map_img">
			<div class="map"></div>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				servicesMap:{
						account:{
							title:["1500+","7x24h","2200+","500+"],
							detail:["服务商户","优质服务","精品案例","每日新增客户数"]
						}
				}
			}
		}
	}
</script>

<style scoped>
	.services_map{
		width: 100%;
		height: 109.5rem;
	}
	.services_map .services_map_slogan{
		width: 100rem;
		height: 10rem;
		padding: 3.5rem 0 1.5rem 0;
		margin: 0 auto;
	}
	.services_map .services_map_slogan .services_map_slogan_title{
		width: 100rem;
		text-align: center;
		font-size: 32px;
		color: #333;
	}
	.services_map .services_map_slogan .services_map_slogan_detail{
		width: 100rem;
		text-align: center;
		font-size: 16px;
		margin-top: 1.67rem;
		color: #666;
	}
.services_map .services_map_account{
	width: 100rem;
	height: 12.9rem;
	margin: 0 auto;
}
.services_map .services_map_account ul{
	width: 85rem;
	height: 12.9rem;
	margin: 0 auto;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	align-items: center;
}
.services_map .services_map_account ul>li{
	width: 12.5rem;
	height: 12.9rem;
	float: left;
}
.services_map .services_map_account ul>li span{
	width: 12.5rem;
	height: 6rem;
	color:#2E82FF;
	font-size: 36px;
	text-align: center;
	display:inline-block;
}
.services_map .services_map_account ul>li i{
	width: 12.5rem;
	height: 6rem;
	float: left;
	color:#666;
	font-size: 16px;
	text-align: center;
	display:inline-block;
}
.services_map .services_map_img{
	width: 100rem;
	height: 12.9rem;
	margin: 0 auto;
}
.services_map .services_map_img .map{
	width: 75.34rem;
	height: 75.34rem;
	margin: 0 auto;
	background: url(/static/images/bnt_ditu.png) no-repeat center;
	background-size: cover;
}
</style>
