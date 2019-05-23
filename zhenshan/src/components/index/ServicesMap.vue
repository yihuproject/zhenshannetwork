<template>
	<div class="services_map">
        <slogan title="遍布全国的销售网络提供本地化的服务" detail="无论你身在何处，均能享受本地化的服务体验"></slogan>
		<div class="services_map_account">
			<ul>
				<li v-for="(item,index) in servicesMap.account">
                     
					<span class="number_container"><number class="number" startNum="0" :endNum="item.title" speed="15" times="100"></number><i class="number">{{item.symbol}}</i></span>
					<i class="number_detail">{{item.detail}}</i>
				</li>

			</ul>
		</div>
		<div class="services_map_img">
			<div class="map">
            </div>
		</div>
	</div>
</template>
<script>
    import slogan from "../public/title"
    import number from "../public/number"
	export default {
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
                                symbol:"h",
                                detail:"优质服务"
                            },
                            {
                                title:0,
                                symbol:"+",
                                detail:"精品案例"
                            },
                            {
                                title:0,
                                symbol:"+",
                                detail:"每日新增客户数"
                            }
						]
				}
            }
		},
        components: {
            slogan,
            number
        },
        mounted(){
            console.log(this.servicesMap.account[0].title);
             window.addEventListener("scroll",()=>{
                var scroll = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
                if(scroll>1800){
                    this.servicesMap.account[0].title = 1500;
                    this.servicesMap.account[1].title = "7x24";
                    this.servicesMap.account[2].title = 2200;
                    this.servicesMap.account[3].title = 500;
                    console.log(this.servicesMap.account[1].title);
                }
            },true);
        }
	}
</script>
<style scoped>
	.services_map{
		width: 100%;
		height: 109.5rem;
	}
	.services_map .services_map_slogan{
		width: 100rem;
		height: 10rem;
		padding: 3.5rem 0 1.5rem 0;
		margin: 0 auto;
	}
	.services_map .services_map_slogan .services_map_slogan_title{
		width: 100rem;
		text-align: center;
		font-size: 32px;
		color: #333;
	}
	.services_map .services_map_slogan .services_map_slogan_detail{
		width: 100rem;
		text-align: center;
		font-size: 16px;
		margin-top: 1.67rem;
		color: #666;
	}
    .services_map .services_map_account{
        width: 100rem;
        height: 12.9rem;
        margin: 0 auto;
    }
    .services_map .services_map_account ul{
        width: 85rem;
        height: 12.9rem;
        margin: 0 auto;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
    }
    .services_map .services_map_account ul>li{
        width: 12.5rem;
        height: 12.9rem;
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
        height: 6rem;
        float: left;
        color:#666;
        font-size: 16px;
        text-align: center;
        display:inline-block;
    }
    .services_map .services_map_img{
        width: 100rem;
        height: 12.9rem;
        margin: 0 auto;
    }
    .services_map .services_map_img .map{
        width: 75.34rem;
        height: 75.34rem;
        margin: 0 auto;
    	background: url(/static/images/index/bnt_ditu.png) no-repeat center;
        background-size: cover;
    }
</style>
