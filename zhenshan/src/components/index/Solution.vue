<template>
	<div class="solution">
        <slogan :title="title" :detail="detail"></slogan>
		<div class="solution_classify">
				<router-link :to="item.link" v-for="(item,index) in solution" :key="index" class="solution_classify_navigator">
					<div class="solution_classify_img">
						<img :src="item.imgPath" />
					</div>
					<div class="solution_classify_text">
						<div class="solution_classify_text_title">
							<i>{{item.text.title}}</i>
						</div>
						<div class="solution_classify_text_detail">
							<i>{{item.text.detail}}</i>
						</div>
					</div>
				</router-link>
		</div>
		<div class="solution_search">
			<div>
				<input type="text" @blur="regNum" v-model="value" maxlength="11" class="solution_search_input" placeholder="请输入您的手机号">
				<span class="solution_search_button">免费试用</span>
			</div>
		</div>
	</div>
</template>

<script>
    import slogan from "../public/title"
	export default {
		data(){
			return {
                value:"",
                title:"多渠道营销产品解决方案",
                detail:"用我们的诚信和实力，换您的信赖。以团队合作精神为基础，齐心协力，竭力帮助客户移动互联网打造一个全方位的营销体系。",
				solution:[
							{
								imgPath:"/static/images/index/home_bnt_wgw.png",
								text:{
									title:"微官网",
									detail:"定制专属自己的互联网官网"
								},
                                link:"/solution"
							},
							{
								imgPath:"/static/images/index/home_bnt_wsc.png",
								text:{
									title:"微商城",
									detail:"打造优质用户体验，搭建生态化电商系统"
								},
                                link:"/solution_mall"
							},
							{
								imgPath:"/static/images/index/home_bnt_wfx.png",
								text:{
									title:"微分销",
									detail:"支持三级分销，二级分销，多级分销，分销+代理模式"
								},
                                link:"/solution_distribution"
							},
							{
								imgPath:"/static/images/index/home_bnt_why.png",
								text:{
									title:"微会员",
									detail:"实现精准营销，留住用户建立长期稳定关系"
								},
                                link:"/solution_member"
							}
						]
			}
		},
        components:{
            slogan
        },
        methods: {
            regNum() {
                this.value = this.value.replace(/[^\d]/g,"");
            }
        },
	}
</script>
<style  scoped lang="stylus">
	.solution
		width: 100%
		height: 56rem
		.solution_slogan
			width: 100rem
			height: auto
			padding: 4.17rem 0
			margin: 0 auto
			.solution_slogan_title
				width: 100rem
				height: auto
				text-align: center
				font-size: 32px
				color: #333
			.solution_slogan_detail
				width: 100rem
				height: auto
				text-align: center
				font-size: 16px
				margin-top: 1.67rem
				color: #666
		.solution_classify
			width: 100rem
			height: auto
			margin: 0 auto
			display: flex
			flex-flow:row nowrap
			justify-content: space-between
			.solution_classify_navigator
				width: 23.75rem
				height: 24.4rem
				background: #fff
				.solution_classify_img
					width: 23.75rem
					height: 14rem
					img
						width: 23.75rem
						height: 14rem
				.solution_classify_text
					width: 23.75rem
					height: 10.3rem
					box-shadow:0px 3px 8px 0px rgba(196,200,204,0.3)
					.solution_classify_text_title
						width: 23.75rem
						height: 5rem
						line-height: 5rem
						text-align: center
						position: relative
						font-size: 18px
						color:#2E82FF
						i
							font-weight: bold
					.solution_classify_text_title:before
						width: 2.5rem
						height: 0.25rem
						content:""
						position: absolute
						bottom: 0.7rem
						left: 10.625rem
						background: #2E82FF
					.solution_classify_text_detail
						width: 21.75rem
						text-align: center
						padding:0 1rem
						font-size: 14px
						color:#666
		.solution_search
			width: 100rem
			height: 15rem
			margin: 0 auto
			& >div
				width: 46rem
				height: 5rem
				margin: 5rem auto
				.solution_search_input
					display: inline-block
					width: 30rem
					height: 5rem
					line-height: 5rem
					text-align: center
					border:1px solid #E5E5E5
					box-sizing: border-box
					float: left
					padding: 1rem
					font-size: 18px
					font-weight: 300
				.solution_search_input::-webkit-input-placeholder
					color: #999
				.solution_search_button
					display: inline-block
					width: 15rem
					height: 5rem
					line-height: 5rem
					text-align: center
					background: #2E82FF
					float: left
					font-size: 20px
					color: #fff
</style>
