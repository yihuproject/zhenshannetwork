<template>
    <div class="position">
        <div class="position_map">
            <baidu-map :ak="ak" :center="center" :zoom="zoom">
                    
                    <bm-marker :position="{lng:this.center.lng, lat: this.center.lat}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
                        <bm-info-window :position="{lng:this.center.lng, lat: this.center.lat}" title="深圳市富方科技有限公司" :show="true">
                            地址：深圳市宝安区新安三路28号海关大厦1610 <br>
                            邮箱：3610276855@qq.com
                        </bm-info-window>
                    </bm-marker>
            </baidu-map>
        </div>
    </div>
</template>
<script>
    import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
    import BmMarker from 'vue-baidu-map/components/overlays/Marker'
    import BmInfoWindow from 'vue-baidu-map/components/overlays/InfoWindow'
    
    export default{
        data(){
            return {
                ak:"efhNFs0eQd5NA9cLUnNeIt4XwK6xvBVW",
                zoom: 17,
                center:{lng: 113.9203223, lat: 22.57831}
            }
        },
        components:{
        	BaiduMap,
            BmMarker,
            BmInfoWindow
        }
    }
</script>

<style>
    .position{
        width: 100%;
        height: auto;
    }
    .position .position_map{
        width: 100rem;
        height: 32rem;
        margin: 0 auto;
        margin-bottom: 5rem;
    }
    .position .position_map>div{
        width: 100%;
        height: 100%;
    }
    .position .position_map .anchorBL{
        display: none;
    }
</style>
