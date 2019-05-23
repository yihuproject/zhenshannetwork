<template>
		<div class="title">
            <div class="title_slogan">
            	<div class="title_slogan_title" :style="{color:color}">
            		<i ref="title">{{title}}</i>
            	</div>
            	<div class="title_slogan_detail" :style="{color:color}">
            		<i ref="detail">{{detail}}</i>
            	</div>
            </div>
        </div>
</template>

<script>
    export default {
        props:["title","detail","color"],
        mounted(){
            if(this.color){
                this.$refs.title.style.color = this.color;
                this.$refs.detail.style.color = this.color;
            }
        }
    }
</script>

<style scoped lang="stylus">
    .title
        width: 100%;
        height: auto;
		.title_slogan
			width: 100rem;
			height: auto;
			padding: 4.17rem 0;
			margin: 0 auto;
			.title_slogan_title
				width: 100rem;
				height: auto;
				text-align: center;
				font-size: 32px;
				color: #333;
			.title_slogan_detail
				width: 100rem;
				height: auto;
				text-align: center;
				font-size: 16px;
				margin-top: 1.67rem;
				color: #666;
</style>
