<template>
  <div class="navbar">
	<div class="navbar_hover_back">
		<div class="container">
			<div class="logo">
				<router-link to="/">{{header.logo.text}}</router-link>
			</div>
			<div class="menu">
				<router-link to="/" class="navigator"><i>首页</i></router-link>
				<router-link to="/solution" class="navigator" >
                    <i>解决方案</i>
                    <div class="navigator_level2">
                        <router-link to="/" class="navigator">微官网</router-link>
                        <router-link to="/" class="navigator">微商城</router-link>
                        <router-link to="/" class="navigator">微分销</router-link>
                        <router-link to="/" class="navigator">微会员</router-link>
                    </div>
                    </router-link>
				<router-link to="/cases" class="navigator"><i>经典案例</i></router-link>
				<router-link to="/parter" class="navigator"><i>代理加盟</i></router-link>
				<router-link to="/product" class="navigator"><i>产品套餐</i></router-link>
				<router-link to="/news" class="navigator"><i>行业资讯</i></router-link>
				<router-link to="/about" class="navigator"><i>关于我们</i></router-link>
			</div>
			<div class="func">
				<router-link class="navigator" :to="header.func.href[index]" v-for="(fun,index) in header.func.text" :key="index"><i>{{fun}}</i></router-link>
			</div>
		</div>
	</div>
  </div>
</template>
<script>
export default {
  data(){
	  return {
		  header:{
		  	  logo:{
		  		  text:"臻善网络"
		  	  },
			  func:{
				  text:["用户登录","免费注册","管理中心"],
				  href:["/","/","/","/"]
			  }
		  }
	  }
  },
}
</script>

<style>
.navbar{
	width: 100%;
	height: 5rem;
	font-family: "microsoft yahei";
	background:none;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
}
.navbar .navbar_hover_back{
	width: 100%;
	height: 5rem;
	background:none;
	transition: background-color .8s;
}
.navbar .navbar_hover_back:hover{
	background:rgba(0,0,0,0.15);
}
.navbar .container{
	width: 100rem;
	height: 5rem;
	color:#fff;
	display: flex;
	margin: 0 auto;
	flex-flow: row nowrap;
	justify-content: space-between;
	align-items: center;
}
.navbar .container .logo{
	width: 8rem;
	font-size: 24px;
	text-align: left;
	height: 5rem;
	line-height: 5rem;
    color:#fff;
}
.navbar .container .logo a,.navbar .container .logo:hover a{
    color:#fff;
}
.navbar .container .menu{
	width: 60rem;
	height: 5rem;
}
.navbar .container .menu>.navigator:first-child{
	margin-left: 8.6rem;
}
.navbar .container .menu>.navigator{
    display: inline-block;
	width: auto;
	height: 5rem;
	line-height: 5rem;
	color:#fff;
	float: left;
	font-size: 14px;
	padding: 0 1.5rem;
    position: relative;
}
.navbar .container .menu>.navigator:hover .navigator_level2{
    width: 5rem;
    height: 25rem;
    line-height: 5rem;
    background: rgba(0,0,0,0.15);
}
.navbar .container .menu>.navigator:hover .navigator_level2 a{
    display: inline-block;
    width: auto;
    color:#fff;
    float: left;
    font-size: 14px;
    /* padding: 0 1.5rem; */
    position: relative;
}
.navbar .container .menu>.navigator .navigator_level2{
    position: absolute;
    top: 5rem;
    left: 0;
    height: 0;
    overflow: hidden;
    transition:  all .5s ease-in;
}
.navbar .container .func{
	width: 23.49rem;
	height: 3.75rem;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	align-items: center;
}
.navbar .container .func .navigator{
	width: 5.83rem;
	height: 2.5rem;
	line-height: 2.5rem;
	font-size: 14px;
	padding: 0;
	margin: 2.5rem 0;
	margin-left: 2rem;
	border:1px solid #fff;
	text-align: center;
	color:#fff;
	background:none;
	transition: all .8s;
}
.navbar .container .func .navigator:nth-child(2){
	border:1px solid #fff;
	background:#fff;
	color:#2F5CFF;
}
.navbar .container .func .navigator:hover{
	border:1px solid #fff;
	background:#fff;
	color:#2F5CFF;
}
</style>
