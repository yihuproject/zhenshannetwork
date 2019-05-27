<template>
	<div class="index_footer">
		<div class="index_footer_blogroll">
			<ul>
				<li><i>微信小程序代理</i></li>
				<li><i>小程序代理</i></li>
				<li><i><router-link to="/solution_index">解决方案</router-link></i></li>
				<li><i><router-link to="/cases">经典案例</router-link></i></li>
				<li><i><router-link to="/product_index">产品套餐</router-link></i></li>
				<li><i><router-link to="/about">关于我们</router-link></i></li>
				<li><i><router-link to="/about">联系我们</router-link></i></li>
			</ul>
			<div class="index_footer_copyright">
				<i>copyright &copy; 2019 www.zhenshanyk.com 深圳市臻善科技有限公司 粤ICP备19207238号</i>
			</div>
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
	.index_footer{
		width: 100%;
		height: 19.83rem;
		background:#1E2533;
	}
	.index_footer .index_footer_blogroll{
		width: 100rem;
		height: 19.83rem;
		margin: 0 auto;
	}
	.index_footer .index_footer_blogroll ul{
		width: 100rem;
		height: 10.83rem;
	}
	.index_footer .index_footer_blogroll ul>li{
		width: 14rem;
		text-align: center;
		height: 2rem;
		line-height: 2rem;
		margin: 4.415rem 0;
		float: left;
		border-right:1px solid #fff;
	}
	.index_footer .index_footer_blogroll ul>li:last-child{
		border:none;
	}
	.index_footer .index_footer_blogroll ul>li i{
		font-size: 18px;
		color:#fff;
	}
    .index_footer .index_footer_blogroll ul>li i a{
        font-size: 18px;
        color:#fff;
    }
	.index_footer .index_footer_blogroll .index_footer_copyright{
		width: 100rem;
		height: 9rem;
		text-align: center;
		font-size: 18px;
		color:#fff;
	}
</style>