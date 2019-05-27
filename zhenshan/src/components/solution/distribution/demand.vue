<template>
    <div class="d_demand">
        <slogan title="精美的界面，解决微商个性化需求" detail="多种分销特色模式，满足不同企业运营需求"></slogan>
        <div class="d_demand_swiper">
            <swiper :options="swiperOption" ref="mySwiper">
                <!-- slides -->
                <swiper-slide v-for="(item,index) in  dDemand">
                    <img :src="item" alt="">
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-button-prev"  slot="button-prev" ref="prev"><img src="/static/images/solution_cases/wfx_ic_jm_jtz.png"></div>
                <div class="swiper-button-next"  slot="button-next" ref="next"><img src="/static/images/solution_cases/wfx_ic_jm_jty.png"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
    import slogan from "../../public/title"
    export default {
        data(){
            return {
                swiperOption:{
                    effect : 'coverflow',
                    slidesPerView : 4,//可见个数
                    centeredSlides: true,
                    coverflowEffect: {
                        rotate: 0,
                        stretch: 0,
                        depth: 200,
                        modifier: 2,
                        slideShadows : false
                  },
                    notNextTick:true,
                    loopedSlides:6,//循环总数
                    loopAdditionalSlides:0,
                    autoplay:false,
                    grabCursor:true,
                    initialSlide:2,//默认显示第几个索引
                    navigation: {
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',
                    },
                },
               dDemand:[
                   "/static/images/solution_cases/wfx_ic_jm_1.png",
                   "/static/images/solution_cases/wfx_ic_jm_2.png",
                   "/static/images/solution_cases/wfx_ic_jm_3.png",
                   "/static/images/solution_cases/wfx_ic_jm_4.png",
                   "/static/images/solution_cases/wfx_ic_jm_5.png"
               ]
            }
        },
        components: {
            slogan
        },
        computed: {
            // swiperHeight() {
            //     return `${100*800/1920}vw`;
            // }
            swiper() {
                return this.$refs.mySwiper.swiper;
              }
        },
        mounted(){
            this.swiper.slideTo(2, 1000, false);
        },
    }
</script>

<style scoped>
    .d_demand{
        width: 100%;
        height: 78rem;
    }
    .d_demand .d_demand_swiper{
        width: 100%;
        height: 74.7rem;
        margin: 2rem auto;
        position: relative;
    }
    .d_demand>>> .d_demand_swiper .swiper-button-prev{
        position: absolute;
        left: 10rem;
    }
        .d_demand>>> .d_demand_swiper .swiper-button-next{
        position: absolute;
        right: 10rem;
    }
</style>