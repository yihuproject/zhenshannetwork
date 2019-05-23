<template>
	<div class="banner">
        <navbar></navbar>
		<!-- <el-carousel :interval="5000"  height="55rem" arrow="hover">
            <el-carousel-item v-for="(item,index) in banner.img" :key="index">
                <img :src="banner.imgPath[index]" alt="">
            </el-carousel-item>
        </el-carousel> -->
	</div>
</template>

<script>
    import navbar from "@/components/public/Navbar"
	export default{
		data(){
			return {
				banner:{
					img:["1","2","3","4"],
                    imgPath:[
                        "/static/images/index/home_banner.png",
                        "/static/images/index/home_banner01.png",
                        "/static/images/index/home_banner02.png",
                        "/static/images/index/home_banner03.png",
                    ]
				}
			}
		},
        components: {
            navbar
        },
	}
</script>

<style scoped lang="stylus">
	.banner
		width: 100%;
		height: 55rem;
		position: relative;
</style>
