<template>
    <div class="system" style="background:url(/static/images/system/bnt.png) no-repeat center">
        <router-view></router-view>
    </div>
</template>
<script>
</script>
<style>
    .system{
        width: 100%;
        height: 100vh;
        background-size: cover;
        overflow: hidden;
    }
    .system .el-row{
        line-height: 2.5vw;
    }

</style>
