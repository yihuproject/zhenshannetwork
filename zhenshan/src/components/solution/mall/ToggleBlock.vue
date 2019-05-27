<template>
        <div class="toggleblock">
            <ul class="toggleblock_items">
                <li data-all="all" v-for="(sitem,index) in obj.item" @mouseenter="handleHover(index,sitem)" :key="index" :class="{active:index == current}">
                    <div class="static_status">
                        <div class="static_status_img">
                            <img :src="sitem.static.img" alt="">
                        </div>
                        <div class="static_status_title">
                            {{sitem.static.title}}
                        </div>
                        <div class="static_status_ltitle">
                            {{sitem.static.detail}}
                        </div>
                        <ul class="static_status_li">
                            <li v-for="i in sitem.static.liArr">
                                {{i}}
                            </li>
                        </ul>
                    </div>
                    <div class="active_status">
                        <div class="active_status_head">
                            <p class="active_status_title">{{sitem.active.title}}</p>
                            <p class="active_status_ltitle">{{sitem.active.ltitle}}</p>
                        </div>
                        <ul class="active_status_li">
                            <li v-for="s in sitem.active.liArr">
                                    <div class="active_status_li_item_img">
                                        <img :src="s.img" alt="">
                                    </div>
                                    <div class="active_status_li_item_content">
                                        <p class="active_status_li_item_content_title">
                                            {{s.title}}
                                        </p>
                                        <p class="active_status_li_item_content_detail">
                                            {{s.detail}}
                                        </p>
                                    </div>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
</template>

<script>
    export default {
        props:{
            obj:{
                type:Object,
                default:""
            }
        }
        ,data(){
            return {
                current:0
            }
        },
        methods:{
            handleHover(index,el){
                this.current = index;
            }
        }
    }
</script>
<style scoped lang="stylus">
        .toggleblock
            width: 100%
            height: 72.75rem
            .toggleblock_items
                width: 100rem
                height: 57.45rem
                margin: 0 auto
                display:flex
                flex-flow:row nowrap
                justify-content:flex-start
                align-items:center
                li[data-all="all"]
                    width: 22.3rem
                    height: 41.83rem
                    position:relative
                    .static_status
                        width: 19.7rem
                        height:39.23rem
                        position:absolute
                        top: 0
                        left: 0
                        padding: 1.3rem
                        z-index:4
                        border:1px solid rgba(235, 235, 235, 1)
                        display:inline-block
                        .static_status_img
                            width: 19.7rem
                            height: 10rem
                            img
                                width: 6.83rem
                                height: 6.83rem
                                margin-top: 1.585rem
                                margin-left: 6.345rem
                        .static_status_title
                            width: 19.7rem
                            height: 4rem
                            line-height: 4rem
                            text-align:center
                            color:#333
                            font-size:24px
                        .static_status_ltitle
                            width: 19.7rem
                            height: 3rem
                            line-height: 3rem
                            text-align:center
                            color:#999
                            font-size:14px
                        .static_status_li
                            width: 19.7rem
                            height: 23.16rem
                        .static_status_li>li
                            width: 19.7rem
                            height: 5.79rem
                            line-height: 5.79rem
                            text-align:center
                            color:#333
                            font-size:18px
                    .active_status
                        width: 0
                        height: 100%
                        position:absolute
                        top: 0
                        left: 0
                        z-index:3
                        overflow:hidden
                        .active_status_head
                            width: 29.6rem
                            height: 5.96rem
                            line-height: 3rem
                            background:#FFB018
                            color:#fff
                            padding: 1.6rem
                            .active_status_title
                                width: 28.93rem
                                font-size:24px
                            .active_status_ltitle
                                width: 28.93rem
                                font-size:14px
                        .active_status_li
                            width: 29.7rem
                            height: 37.11rem
                            color:#fff
                            padding:1.2rem
                            opacity: 0
                            transition:all .5s ease-in
                            li
                                width: 29.7rem
                                height: 9.27rem
                                display:flex
                                flex-flow:row nowrap
                                justify-content:space-between
                                align-items:center
                                .active_status_li_item_img
                                    width: 4.67rem
                                    height: 4.67rem
                                    padding: 2.3rem
                                    img
                                        width: 4.67rem
                                        height: 4.67rem
                                .active_status_li_item_content
                                    width: 20rem
                                    height: 4.67rem
                                    padding: 2.3rem 0
                                    display:inline-block
                                    color:#000
                                    p
                                        text-align:left
                                        line-height: 2.5rem
                                    p:first-child
                                        font-size:18px
                                        color:#333
                                    p:last-child
                                        font-size:14px
                                        color:#999
                li[data-all="all"].active
                    width: 33rem
                    height: 48.67rem
                    border:1px solid #FFB018
                    box-sizing:border-box
                    padding:0
                    .static_status
                        z-index:3
                        display:none
                        border:none
                    .active_status
                        width: 100%
                        padding:0
                        z-index:4
                        transition:all .3s ease-in
                        .active_status_li
                            opacity: 1
</style>
