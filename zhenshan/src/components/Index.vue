<template>
	<div class="index">
		<swiper></swiper>
		<bulletinboard></bulletinboard>
		<solution></solution>
		<demand></demand>
		<services-map></services-map>
		<support></support>
		<cooperation></cooperation>
		<share></share>
		<register></register>
		<indexFooter></indexFooter>
	</div>
</template>

<script>
	import swiper from "@/components/index/Swiper"
	import solution from "@/components/index/Solution"
	import demand from "@/components/index/Demand"
	import bulletinboard from "@/components/index/BulletinBoard"
	import servicesMap from "@/components/index/ServicesMap"
	import support from "@/components/index/Support"
	import cooperation from "@/components/index/Cooperation"
	import share from "@/components/index/Share"
	import register from "@/components/index/Register"
	import indexFooter from "@/components/public/IndexFooter"
	export default{
		data(){
			return {
				
			}
		},
		components: {
			solution,
			demand,
			swiper,
			bulletinboard,
			servicesMap,
			support,
			cooperation,
			share,
			register,
			indexFooter
		},
	}
</script>

<style>
</style>
