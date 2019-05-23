<template>
    <div class="items_container" :style="{background:bgcolor}">
        <div class="item_content" :style="{flexDirection:direction,flexWrap: wrap}">
            <div class="item_img">
                <img :src="img">
            </div>
            <div class="item_text">
                    <p class="item_text_ltitle">{{ltitle}}</p>
                    <p class="item_text_title">{{title}}</p>
                    <p class="item_text_detail" v-for="i in detail">{{i}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        props: {
            bgcolor: {
                type: String,
                default: ""
            },
            direction:{
                type:String,
                default:"row"
            },
            title:{
                type:String,
                default:""
            },
            ltitle:{
                type:String,
                default:""
            },
            detail:{
                type:Array,
                default:""
            },
            img:{
                type:String,
                default:""
            },
            wrap:{
                type:String,
                default:"nowrap"
            }
        },
    }
</script>
<style scoped lang="stylus">
    .items_container
        width: 100%
        height: 50.834rem
        .item_content
            width: 100rem
            height: 50.834rem
            margin: 0 auto
            display:flex
            justify-content:space-between
            align-items:center
            .item_img
                width: 50%
            .item_text
                width: 35%
                height: auto
                line-height: 2.4rem
                text-align:justify
                p.item_text_ltitle
                    color:#333
                    font-size:24px
                    padding: 1rem
                p.item_text_title
                    color:#333
                    font-size:36px
                    padding: 1rem
                p.item_text_detail
                    color:#666
                    font-size:16px
                    padding: 1rem
</style>
