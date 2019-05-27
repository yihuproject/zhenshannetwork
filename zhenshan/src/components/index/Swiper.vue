<template>
	<div class="banner">
        <navbar></navbar>
        <div class="swiper_container_box" :style="{height:swiperHeight}">
            <swiper :options="swiperOption" ref="mySwiper">
                <!-- slides -->
                <swiper-slide>
                    <img src="/static/images/index/home_banner.png"  :style="{height:swiperHeight}">
                    <router-link to="/solution_index" class="enter enter1">免费体验</router-link>
                </swiper-slide>
                <swiper-slide>
                    <img src="/static/images/index/home_banner01.png"  :style="{height:swiperHeight}">
                    <router-link to="/solution_member" class="enter enter2">立即体验</router-link>
                </swiper-slide>
                <swiper-slide>
                    <img src="/static/images/index/home_banner02.png"  :style="{height:swiperHeight}">
                    <router-link to="/solution_distribution" class="enter enter3">立即体验</router-link>
                </swiper-slide>
                <swiper-slide>
                    <img src="/static/images/index/home_banner03.png"  :style="{height:swiperHeight}">
                    <router-link to="/solution_mall" class="enter enter4">立即体验</router-link>
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
	</div>
</template>
<script>
    import navbar from "@/components/public/Navbar"
	export default{
		data(){
			return {
                swiperOption:{
                    notNextTick:true,
                    loop:true,
                    autoplay:false,
                    // autoplay:{
                    //   delay:1000,
                    //     stopOnLastSlide:false,
                    //     disableOnInteraction:false
                    // },
                    speed:1000,
                    grabCursor:true,
                    initialSlide:0,//初始化索引
                    pagination:{
                        el:'.swiper-pagination',
                        clickable:true
                    }
                }
			}
		},
        components: {
            navbar
        },
        computed: {
            swiperHeight() {
                return `${100*660/1920}vw`;
            },
            swiper() {
                return this.$refs.mySwiper.swiper;
              }
        },
        mounted(){
            this.swiper.slideTo(3,1000, false);
        }
	}
</script>
<style scoped>
	.banner{
        width: 100%;
		height: auto;
		position:relative;
    }
    .swiper_container_box{
        width: 100%;
        margin: 0 auto;
    }
    .banner>>> .swiper-slide{
        position: relative;
    }
    .banner>>> .swiper-slide .enter{
        position: absolute;
        bottom: 6.58vw;
        left: 19.5vw;
        width: 9vw;
        height: 3vw;
        line-height: 3vw;
        text-align: center;
        font-size: 16px;
        display: inline-block;
        color:#fff;
        background: #FFBB18;
    }
   .banner>>> .swiper_container_box .swiper-pagination .swiper-pagination-bullet{
       width: 4.167rem;
       height: 0.5rem;
       background:rgba(255,255,255,0.4);
       border-radius:2px;
   }             
   .banner>>> .swiper_container_box .swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active{
       background:rgba(255,255,255,0.9);
   }
</style>
