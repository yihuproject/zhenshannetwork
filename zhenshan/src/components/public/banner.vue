<template>
	<div class="banner" :height="swiperHeight">
		<div class="items" :style="{background:img,backgroundSize:size,height:swiperHeight}">
		</div>
	</div>
</template>
<script>
	export default{
        props: {
            img: {
                type: String,
                default: ""
            },
        },
		data(){
			return {
                size:"cover"
			}
		},
        computed: {
            swiperHeight() {
                return `${100*660/1920}vw`;
            }
        }
	}
</script>

<style scoped lang="stylus">
	.banner
		width:100%
        height:auto
		position:relative
		.items
			width:100%
			height:auto
			background-size:cover
            background-repeat:no-repeat
            background-position:center
		.toggle_items
			position:absolute
			bottom:1.83rem
			left:40%
</style>