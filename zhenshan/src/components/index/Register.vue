<template>
	<div class="register">
		<div class="register_slogan">
			<i>我们一起挖掘小程序千亿市场，抢占微信海量用户红利</i>
		</div>
		<div class="register_channel">
			<span class="register_btn">免费注册</span>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				
			}
		}
	}
</script>

<style scoped>
	.register{
		width: 100%;
		height: 25rem;
		background: url(/static/images/index/home_bnt_dibu.png) no-repeat center;
		background-size:cover;
	}
	.register .register_slogan{
		width: 100rem;
		text-align: center;
		height: 14rem;
		line-height: 14rem;
		font-size: 36px;
		color:#fff;
		margin: 0 auto;
	}
	.register .register_channel{
		width: 100rem;
		text-align: center;
		height: 11rem;
		margin: 0 auto;
	}
	.register .register_channel .register_btn{
		width: 23rem;
		height: 5rem;
		line-height: 5rem;
		color:#2E82FF;
		background: #fff;
		margin: 0 auto;
		display: inline-block;
		border-radius: 5px;
		font-size: 24px;
	}
</style>
