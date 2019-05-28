<template>
	<div class="transition_block">
        <slogan title="联系我们"></slogan>
		<div class="demand_classify">
				<a v-for="(item,index) in arr" :key="index" class="demand_classify_navigator">
					<div class="demand_classify_img">
						<img class="static_img" v-lazy="item.imgPath"/>
					</div>
					<div class="demand_classify_text">
						<div class="demand_classify_text_title">
							<i v-for="i in item.text.title">{{i}}</i>
						</div>
					</div>
				</a>
		</div>
	</div>
</template>

<script>
    import slogan from "../public/title"
	export default {
        components:{
            slogan
        },
		data(){
			return {
                current:null,
                arr:[
                            {
                            	imgPath:"/static/images/about/gywm_ic_dz.png",
                            	text:{
                            		title:[
                                        "广东省深圳市前海深港合作区前湾一路1号A栋201室"
                                    ]
                            	}
                            },
                            {
                            	imgPath:"/static/images/about/gywm_ic_dh.png",
                            	text:{
                            		title:[
                                        "0755-40028888",
                                        "18938846906"
                                    ]
                            	}
                            },
                            {
                            	imgPath:"/static/images/about/gywm_ic_yx.png",
                            	text:{
                            		title:[
                                         "3610276855@qq.com"
                                    ]
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
		height: 31.3rem;
		background: #fff;
	}
	.transition_block .demand_classify{
		width: 100rem;
		height: 16rem;
		margin: 0 auto;
		display: flex;
		flex-flow:row wrap;
		justify-content: space-between;
	}
	.transition_block .demand_classify .demand_classify_navigator{
		width:22.5rem;
		height: 11rem;
		background:#fff;
		transition: all 1s;
	}
    .transition_block .demand_classify .demand_classify_navigator:hover{
        transform: scale(1.1);
    }
	.transition_block .demand_classify .demand_classify_navigator .demand_classify_img{
		width:22.5rem;
		height: 6.66rem;
	}
	.transition_block .demand_classify .demand_classify_navigator .demand_classify_img img{
		width: 6.66rem;
		height: 6.66rem;
		margin: 0 7.92rem;
	}
	.transition_block .demand_classify .demand_classify_navigator .demand_classify_text{
		width:22.5rem;
		height: 4rem;
	}
	.transition_block .demand_classify .demand_classify_navigator .demand_classify_text .demand_classify_text_title{
		width:22.5rem;
		height: 4rem;
		line-height: 2rem;
		text-align: center;
	}
	.transition_block .demand_classify .demand_classify_navigator .demand_classify_text .demand_classify_text_title i{
        display: inline-block;
        width:22.5rem;
		font-weight: bold;
		font-size: 16px;
		color:#333;
	}
</style>