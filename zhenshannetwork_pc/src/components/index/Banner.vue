<template>
	<div class="banner">
		<div class="items">
			
		</div>
		<div class="toggle_items">
			<ul>
				<li :class="{active:bannerIndex == banner.current}" v-for="(bannerItem,bannerIndex) in banner.img" @click="choose(bannerIndex,bannerItem)" :key="bannerIndex"></li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				banner:{
					img:["1","2","3","4"],
					current:0
				}
			}
		},
		methods: {
			choose(bannerIndex,bannerItem) {
				this.banner.current = bannerIndex;
			}
		},
	}
</script>

<style scoped lang="stylus">
	.banner
		width: 100%;
		height: 600px;
		position: relative;
		.items
			width: 100%;
			height: 600px;
			background:url("/static/images/banner.png") no-repeat center;
			background-size:cover;
		.toggle_items
			position: absolute;
			bottom: 1.83rem;
			left: 40%;
			ul
			width: 20rem;
			height: 0.416rem;
			li
				width: 4.16em;
				height: 0.416rem;
				float: left;
				margin-right: 0.83rem;
				background: rgba(255,255,255,0.2);
				transition: background-color .8s;
				border-radius: 4px;
			li:hover
				width: 4.16em;
				height: 0.416rem;
				background: #fff;
			li.active
				width: 4.16em;
				height: 0.416rem;
				background: #fff;
</style>
