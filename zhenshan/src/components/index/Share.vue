<template>
	<div class="share">
		<slogan title="将想法和焦点与您一起分享" detail="知识分享,一起成长,分享,共建"></slogan>
		<div class="share_content">
			<div class="share_content_news">
				<div class="share_content_news_text">
					<span>公司新闻</span>
					<p>COMPANY NEWS</p>
				</div>
			</div>
			<ul class="share_content_column2">
				<li v-for="(item,index) in share.column2">
					<div class="share_content_column2_content">
						<span>{{item.title}}</span>
						<p>{{item.detail}}</p>
					</div>
					<div class="share_content_column2_date">
						<div class="share_content_column2_date_date">
							<span>{{item.day}}</span>
							<i>{{item.date}}</i>
						</div>
						<div class="share_content_column2_date_arrow">
							
						</div>
					</div>
				</li>
			</ul>
			<ul class="share_content_column3">
				<li v-for="(item,index) in share.column3">
					<div class="share_content_column3_date">
						<span>{{item.day}}</span>
						<i>{{item.date}}</i>
					</div>
					<div class="share_content_column3_content">
						<span>{{item.title}}</span>
						<p>{{item.detail}}</p>
						<i></i>
					</div>
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
				share:{
					column2:[
						{
							title:"微商造势营销到底如何做？有什么法子？",
							detail:"其实，微商造势营销已经变成了微商行业不成文的潜规则了，大伙都明白许多微商都是为了造势而去晒车晒房晒钱但想要将微商给做好，可不仅仅是造势就能成功，所",
							date:"2019.05",
							day:"13"
						},
						{
							title:"社群营销如何获取流量",
							detail:"在这样一个流量至上的时代，任何的商业模式都是建立在流量的基础之上。商家只有获得流量，才能够获得销量。每隔一段时间就会有一些新的营销方式，近期比较火的",
							date:"2019.06",
							day:"12"
						}
					],
					column3:[
						{
							title:"如何成为社交电商达人",
							detail:"社交电商的影响力越来大，社交电商是一种新型的销售方式。商家通过与客户进行",
							date:"2019.06",
							day:"12"
						},
						{
							title:"为什么你的用户一直在流失？",
							detail:"如今流量时代已经逝去用户拉新与用户获取越来越难，所以说用户的留存问题也就",
							date:"2019.07",
							day:"13"
						},
						{
							title:"小程序二级分销设定多少比例为宜",
							detail:"二级分销模式把一部利润拿出来让利给消费者，让其帮助商家宣传，销售商品 ",
							date:"2019.08",
							day:"14"
						}
					]
				}
			}
		},
        components: {
            slogan
        },
	}
</script>

<style scoped>
	.share{
		width: 100%;
		height: 57.5rem;
		background: #F2F6FA;
	}
	.share .share_slogan{
		width: 100rem;
		height: auto;
		padding: 4.17rem 0;
		margin: 0 auto;
	}
	.share .share_slogan .share_slogan_title{
		width: 100rem;
		height: auto;
		text-align: center;
		font-size: 32px;
		color: #333;
	}
	.share .share_slogan .share_slogan_detail{
		width: 100rem;
		height: auto;
		text-align: center;
		font-size: 16px;
		margin-top: 1.67rem;
		color: #666;
	}
	
	.share .share_content{
		width: 100rem;
		height: 40.5rem;
		margin: 0 auto;
	}
	.share .share_content .share_content_news{
		float:left;
		width:32rem;
		height:40.5rem;
		margin-right: 1rem;
		background: url(/static/images/index/bnt_news.png) no-repeat center;
		background-size:cover;
		position: relative;
	}
	.share .share_content .share_content_news>.share_content_news_text{
		width:14.083rem;
		height:12.083rem;
		position: absolute;
		bottom: 2.3rem;
		left: 2.5rem;
		color:#fff;
	}
	.share .share_content .share_content_news>.share_content_news_text span{
		min-width: 9.9rem;
		height: 8rem;
		line-height: 8rem;
		font-size: 36px;
		position: relative;
		display: inline-block;
	}
	.share .share_content .share_content_news>.share_content_news_text span:before{
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 3px;
		background: #fff;
	}
	.share .share_content .share_content_news>.share_content_news_text p{
		font-size: 18px;
		line-height: 4.5rem;
	}
	.share .share_content .share_content_column2{
		float:left;
		width:32rem;
		height:40.5rem;
		margin-right: 1rem;
		display: flex;
		flex-flow: column nowrap;
		justify-content: space-between;
		align-items: center;
	}
	.share .share_content .share_content_column2>li{
		width:32rem;
		height: 19.67rem;
		background: #fff;
	}
	.share .share_content .share_content_column2>li .share_content_column2_content{
		width: 29.1rem;
		height: 9.5rem;
		padding: 1.4rem;
		border-bottom:1px solid #EBEBEB;
	}
	.share .share_content .share_content_column2>li .share_content_column2_content span{
		width: 29.1rem;
		height: 3.5rem;
		line-height: 3.5rem;
		color:#666;
		font-size: 16px;
		font-weight: bold;
	}
	.share .share_content .share_content_column2>li .share_content_column2_content p{
		width: 29.1rem;
		height: 6rem;
		line-height: 2rem;
		color:#999;
		font-size: 14px;
		text-align: justify;
		text-overflow:ellipsis;
		white-space:wrap;
		overflow: hidden;
	}
	.share .share_content .share_content_column2>li .share_content_column2_date{
		width: 29.1rem;
		padding:0 1.4rem 0 1.4rem;
		height: 7.16rem;
		
	}
	.share .share_content .share_content_column2>li .share_content_column2_date_date{
		width: 3rem;
		height: 7.16rem;
		float: left;
	}
	.share .share_content .share_content_column2>li .share_content_column2_date_date span{
		width: 6rem;
		text-align: left;
		height: 4.16rem;
		line-height: 4.16rem;
		font-size: 24px;
		color:#999;
		display: inline-block;
	}
	.share .share_content .share_content_column2>li .share_content_column2_date_date i{
		width: 3rem;
		text-align: left;
		height: 3rem;
		font-size: 16px;
		color:#999;
		display: inline-block;
	}
	.share .share_content .share_content_column2>li .share_content_column2_date_arrow{
		width: 2rem;
		height: 1.16rem;
		margin: 3px 0;
		background: url(/static/images/index/icon_jiantou.png) no-repeat center;
		background-size: cover;
		float: right;
		margin: 3rem 0;
	}
	.share .share_content .share_content_column3{
		float:left;
		width:32rem;
		height:40.5rem;
		display: flex;
		flex-flow: column nowrap;
		justify-content: space-between;
		align-items: center;
	}
	.share .share_content .share_content_column3>li{
		width:29.2rem;
		height: 11.27rem;
		background: #fff;
		padding: 1.4rem 1.4rem 0 1.4rem;
	}
	.share .share_content .share_content_column3>li>.share_content_column3_date{
		width:4.367rem;
		height: 8.47rem;
		background: #fff;
		padding:0 1.4rem 1.4rem 0;
		display: inline-block;
		float: left;
		border-right:1px solid #EBEBEB;
	}
	.share .share_content .share_content_column3>li>.share_content_column3_date span{
		width:4.367rem;
		height: 5rem;
		line-height: 5rem;
		text-align: left;
		font-size:24px;
		color:#999;
	}
	.share .share_content .share_content_column3>li>.share_content_column3_date i{
		width:4.367rem;
		height: 6.27rem;
		text-align: left;
		font-size:16px;
		color:#999;
	}
	.share .share_content .share_content_column3>li>.share_content_column3_content{
		width:20.6rem;
		height: 11.27rem;
		background: #fff;
		display: inline-block;
		float: left;
		margin-left: 1.4rem;
	}
	.share .share_content .share_content_column3>li>.share_content_column3_content span{
		width:20.6rem;
		height: 3rem;
		line-height: 3rem;
		color:#666;
		font-size: 16px;
		font-weight: bold;
	}
	.share .share_content .share_content_column3>li>.share_content_column3_content p{
		width:20.6rem;
		height: 4rem;
		line-height: 2rem;
		color:#999;
		font-size: 14px;
		text-align: justify;
		text-overflow:ellipsis;
		white-space:wrap;
		overflow: hidden;
	}
	.share .share_content .share_content_column3>li>.share_content_column3_content i{
		width: 2rem;
		height: 1.16rem;
		background: url(/static/images/index/icon_jiantou.png) no-repeat center;
		background-size: cover;
		display: inline-block;
		margin-top:1.5rem;
	}
</style>