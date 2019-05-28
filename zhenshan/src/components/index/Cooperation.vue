<template>
	<div class="cooperation">
        <slogan title="品牌客户的合作" detail="用心服务过的优质客户"></slogan>
		<div class="cooperation_img">
			<ul>
				<li v-for="(item,index) in cooperation.liArr.img"  :class="{active:index == current}">
					<img :src="item.imgPath" ref="itemImg" @mouseover="changeImg(item,index)" @mouseleave="resetImg(item,index)">
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
                current:null,
				cooperation:{
					liArr:{
						img:[
                            {
                                imgPath:"/static/images/index/f9_anta1.png",
                                imgHoverPath:"/static/images/index/f9_anta.png"
                            },
                            {
                                imgPath:"/static/images/index/f9_bcw1.png",
                                imgHoverPath:"/static/images/index/f9_bcw.png"
                            },
                            {
                                imgPath:"/static/images/index/f9_dydq1.png",
                                imgHoverPath:"/static/images/index/f9_dydq.png"
                            },
                            {
                                imgPath:"/static/images/index/f9_fg1.png",
                                imgHoverPath:"/static/images/index/f9_fg.png"
                            },
                            {
                                imgPath:"/static/images/index/f9_lppz1.png",
                                imgHoverPath:"/static/images/index/f9_lppz.png"
                            },
                            {
                                imgPath:"/static/images/index/f9_jb1.png",
                                imgHoverPath:"/static/images/index/f9_jb.png"
                            },
                            {
                                imgPath:"/static/images/index/f9_yj1.png",
                                imgHoverPath:"/static/images/index/f9_yj.png"
                            },
                            {
                                imgPath:"/static/images/index/f9_xlk1.png",
                                imgHoverPath:"/static/images/index/f9_xlk.png"
                            },
                            {
                                imgPath:"/static/images/index/f9_wysj1.png",
                                imgHoverPath:"/static/images/index/f9_wysj.png"
                            },
                            {
                                imgPath:"/static/images/index/f9_sxjf1.png",
                                imgHoverPath:"/static/images/index/f9_sxjf.png"
                            }
						]
					}
				}
			}
		},
        components:{
            slogan
        },
        methods: {
            changeImg(item,index) {
                this.current = index;
                this.$refs.itemImg[index].src = this.cooperation.liArr.img[index].imgHoverPath;
            },
            resetImg(item,index){
                this.current = null;
                this.$refs.itemImg[index].src = this.cooperation.liArr.img[index].imgPath;
            }
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
        transition: all .5s ease-in;
	}
    .cooperation .cooperation_img ul li.active{
        transform: rotateY(360deg);
    }
	.cooperation .cooperation_img ul li>img{
		width: 16.4167rem;
		height: auto;
	}
</style>