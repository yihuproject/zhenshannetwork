<template>
    <div class="currentPosition">
        <div class="currentPosition">
                <div class="currentPosition_tags">
                        <span class="currentPosition_tags_title">当前位置：</span>
                        <span class="currentPosition_tags_link_item">首页></span>
                        <span class="currentPosition_tags_link_item">行业资讯></span>
                        <span class="currentPosition_tags_link_item">新闻详情</span>
                </div>
        </div>
    </div>
</template>
<script>
    import currentposition from "./currentPosition"
    export default{
        data(){
            return {
                
            }
        },
        components: {
            currentposition
        },
    }
</script>

<style>
    .currentPosition{
        width: 100%;
        height: auto;
    }
    .currentPosition .currentPosition{
        width: 100rem;
        height: auto;
        margin: 0 auto;
    }
    .currentPosition .currentPosition .currentPosition_tags{
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        margin-top: 4.83rem;
    }
    .currentPosition .currentPosition .currentPosition_tags span{
        font-size:14px;
        color:#999;
    }
    .currentPosition .currentPosition .currentPosition_tags .currentPosition_tags_title{
        border-left:4px solid #2E82FF;
        padding-left: 1rem;
    }
</style>
