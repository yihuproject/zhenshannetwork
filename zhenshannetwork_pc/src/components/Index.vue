<template>
	<div class="index">
		<navbar></navbar>
		<banner></banner>
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
	import navbar from "@/components/index/Navbar"
	import banner from "@/components/index/Banner"
	import solution from "@/components/index/Solution"
	import demand from "@/components/index/Demand"
	import bulletinboard from "@/components/index/BulletinBoard"
	import servicesMap from "@/components/index/ServicesMap"
	import support from "@/components/index/Support"
	import cooperation from "@/components/index/Cooperation"
	import share from "@/components/index/Share"
	import register from "@/components/index/Register"
	import indexFooter from "@/components/index/IndexFooter"
	export default{
		data(){
			return {
				
			}
		},
		components: {
			navbar,
			solution,
			demand,
			banner,
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
