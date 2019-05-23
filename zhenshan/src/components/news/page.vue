<template>
    <div class="page">
        <div class="page_content">
            <span class="prev">上一篇：<router-link to="prev">小程序微分销如何做？</router-link></span>
            <span class="next">下一篇：<router-link to="next">没有实体店如何微信开店？</router-link></span>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                
            }
        }
    }
</script>

<style>
    .page{
        width: 100%;
        height: 6.83rem;
    }
    .page .page_content{
        width: 100rem;
        height: 6.83rem;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
    }
    .page .page_content span{
        color:#333;
    }
    .page .page_content span a{
        color:#2E82FF;
    }
</style>
