<template>
		<div class="bulletin_board">
			<div class="bulletin_board_arr">
				<p class="navigator"><span>最新公告</span></p>
				<p class="navigator"><i>臻善组织架构全新升级</i></p>
				<p class="navigator"><i>臻善小程序被评为深圳大数据企业...</i></p>
				<p class="navigator"><i>臻善小程序系统全国火热招商中...</i></p>
			</div>
		</div>
</template>

<script>
</script>

<style scoped>
	.bulletin_board{
		width: 100%;
		height: 4.16rem;
		background: #F0F4F9;
	}
	.bulletin_board .bulletin_board_arr{
		width: 100rem;
		height: 2.08rem;
		margin: 0 auto;
	}
	.bulletin_board .bulletin_board_arr>.navigator:first-child{
			min-width:5rem;
			width: 5rem;
			margin-right: 0;
		}
	.bulletin_board .bulletin_board_arr>.navigator{
		min-width:28rem;
		height: 4.16rem;
		color:#666666;
		font-size: 14px;
		float: left;
		text-align:center;
		margin-right: 3.33rem;
		vertical-align: middle;
	}
	.bulletin_board .bulletin_board_arr>.navigator i:before{
		width: 8px;
		height: 9px;
		content: "";
		background: url(/static/images/index/icon_sanjiao.png) no-repeat top left;
		position: absolute;
		top: 1.65rem;
		left: -1.5rem;
	}
	.bulletin_board .bulletin_board_arr>.navigator>i{
		height: 4.16rem;
		line-height: 4.16rem;
		color:#666666;
		font-size: 14px;
		display: inline-block;
		position: relative;
	}
	.bulletin_board .bulletin_board_arr>.navigator>span{
		display: inline-block;
		min-width:20rem;
		height: 4.16rem;
		line-height: 4.16rem;
		color:#666666;
		font-size: 14px;
		text-align: left;
	}
	
</style>
