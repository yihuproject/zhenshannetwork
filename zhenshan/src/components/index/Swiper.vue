<template>
	<div class="banner">
        <navbar></navbar>
        <div class="swiper_container_box" :style="{height:swiperHeight}">
            <swiper :options="swiperOption" ref="mySwiper">
                <!-- slides -->
                <swiper-slide v-for="(item,index) in banner.imgPath">
                    <img :src="item" alt=""  :style="{height:swiperHeight}">
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
                    autoplay:true,
                    autoplay:{
                      delay:1000,
                        stopOnLastSlide:false,
                        disableOnInteraction:false
                    },
                    speed:1000,
                    grabCursor:true,
                    initialSlide:0,//初始化索引
                    pagination:{
                        el:'.swiper-pagination',
                        clickable:true
                    }
                },
				banner:{
					img:["1","2","3","4"],
                    imgPath:[
                        "/static/images/index/home_banner.png",
                        "/static/images/index/home_banner01.png",
                        "/static/images/index/home_banner02.png",
                        "/static/images/index/home_banner03.png",
                    ],
                    currentIndex:0
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
            console.log('this is current swiper instance object', this.swiper);
            this.swiper.slideTo(3, 1000, false);
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
