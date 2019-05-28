<template>
	<div class="banner" :height="swiperHeight">
		<div class="items" :style="{background:img,backgroundSize:size,height:swiperHeight}">
            <router-link :style="{background:color,color:fcolor}" :to="bLink" class="banner_enter" v-show="isShow">{{text}}</router-link>
		</div>
	</div>
</template>
<script>
	export default{
        props: {
            objHeight: {
                type: String,
                default: "600"
            },
            img: {
                type: String,
                default: ""
            },
            isShow: {
                type: String,
                default: ""
            },
            text: {
                type: String,
                default: ""
            },
            bLink: {
                type: String,
                default: "/"
            },
            color: {
                type: String,
                default: ""
            },
            fcolor:{
                type: String,
                default: ""
            }
        },
		data(){
			return {
                size:"cover"
			}
		},
        computed: {
            swiperHeight() {
                return `${100*this.objHeight/1920}vw`;
            }
        }
	}
</script>

<style scoped>
	.banner{
        width:100%;
        height:auto;
		position:relative;
    }	
	.banner .items{
            width:100%;
			height:auto;
        }	
    .banner .items .banner_enter{
                position:absolute;
                bottom: 6.58vw;
                left: 19.5vw;
                width: 9vw;
                height: 3vw;
                line-height: 3vw;
                text-align: center;
                font-size: 16px;
                display: inline-block;
                color:#fff;
            }     
</style>