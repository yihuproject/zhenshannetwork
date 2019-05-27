<template>
	<div class="services_map">
        <slogan title="遍布全国的销售网络提供本地化的服务" detail="无论你身在何处，均能享受本地化的服务体验"></slogan>
		<div class="services_map_account">
			<ul>
				<li v-for="(item,index) in servicesMap.account">
					<span class="number_container">
                        <span class="number">{{item.title}}</span>
                        <i class="number">{{item.symbol}}</i>
                    </span>
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
	export default {
		data(){
			return {
				servicesMap:{
						account:[
                            {
                                title:1500,
                                symbol:"+",
                                detail:"服务商户"
                            },
                            {
                                title:"7x24",
                                symbol:"h",
                                detail:"优质服务"
                            },
                            {
                                title:2200,
                                symbol:"+",
                                detail:"精品案例"
                            },
                            {
                                title:500,
                                symbol:"+",
                                detail:"每日新增客户数"
                            }
						]
				}
            }
		},
        components: {
            slogan
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
