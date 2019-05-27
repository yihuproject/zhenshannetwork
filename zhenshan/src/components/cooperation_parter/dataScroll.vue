<template>
	<div class="services_map" :style="{background:color}">
		<div class="services_map_account">
			<ul>
				<li v-for="(item,index) in servicesMap.account">
					<span class="number_container">
                        <number class="number" startNum="0" :endNum="item.title" speed="15" times="100"></number>
                        <i class="number">{{item.symbol}}</i>
                    </span>
					<i class="number_detail">{{item.detail}}</i>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
    import number from "../public/number"
	export default {
        props: {
            color: {
                type: String,
                default: ""
            }
        },
		data(){
			return {
				servicesMap:{
						account:[
                            {
                                title:0,
                                symbol:"+",
                                detail:"服务商户"
                            },
                            {
                                title:0,
                                symbol:"%",
                                detail:"城市覆盖率"
                            },
                            {
                                title:0,
                                symbol:"+",
                                detail:"已生成小程序"
                            },
                            {
                                title:0,
                                symbol:"+",
                                detail:"已研发精品模板"
                            }
						]
				}
            }
		},
        components: {
            number
        },
        mounted(){
             window.addEventListener("scroll",()=>{
                var scroll = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
                if(scroll>1700){
                    this.servicesMap.account[0].title = 1500;
                    this.servicesMap.account[1].title = 99;
                    this.servicesMap.account[2].title = 10000;
                    this.servicesMap.account[3].title = 500;
                }
            },true);
        }
	}
</script>
<style scoped>
	.services_map{
		width: 100%;
		height: 13.3rem;
	}
    .services_map .services_map_account{
        width: 100rem;
        height: 13.3rem;
        margin: 0 auto;
    }
    .services_map .services_map_account ul{
        width: 85rem;
        height: 13.3rem;
        margin: 0 auto;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
    }
    .services_map .services_map_account ul>li{
        width: 12.5rem;
        height: 7rem;
        float: left;
    }
    .services_map .services_map_account ul>li span.number_container{
        width: 12.5rem;
        height: 6rem;
        color:#2E82FF;
        font-size: 36px;
        text-align: center;
        display:inline-block;
    }
    .services_map .services_map_account ul>li span>.number{
        color:#2E82FF;
        font-size: 36px;
    }
    .services_map .services_map_account ul>li i.number_detail{
        width: 12.5rem;
        height: 3rem;
        float: left;
        color:#666;
        font-size: 16px;
        text-align: center;
        display:inline-block;
    }
</style>
