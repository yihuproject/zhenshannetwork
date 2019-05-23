<template>
  <div class="navbar">
	<div class="navbar_hover_back">
		<div class="container">
			<div class="logo">
				{{header.logo.text}}
			</div>
			<div class="menu">
				<router-link class="navigator" :to="header.menu.href[index]" v-for="(navbar,index) in header.menu.text" :key="index"><i>{{navbar}}</i></router-link>
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
			  menu:{
				  text:["首页","解决方案","经典案例","代理加盟","产品套餐","行业资讯","关于我们"],
				  href:["/","/solution","/cases","/parter","/product","/news","/about"]
			  },
			  func:{
				  text:["用户登录","免费注册","管理中心"],
				  href:["#","#","#","#"]
			  }
		  }
	  }
  }
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
}
.navbar .container .menu{
	width: 60rem;
	height: 5rem;
}
.navbar .container .menu>.navigator:first-child{
	margin-left: 8.6rem;
}
.navbar .container .menu>.navigator{
	width: auto;
	height: 5rem;
	line-height: 5rem;
	color:#fff;
	float: left;
	font-size: 14px;
	padding: 0 1.5rem;
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
