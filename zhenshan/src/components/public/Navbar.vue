<template>
  <div class="navbar">
	<div class="navbar_hover_back">
		<div class="container">
			<div class="logo">
				<router-link to="/"><img src="/static/images/index/logo.png" alt=""></router-link>
			</div>
			<div class="menu">
                
				<router-link to="/" class="navigator home_active"><i>首页</i></router-link>
				<router-link to="/solution_index" class="navigator home_active" >
                    <i>解决方案</i>
                    <div class="navigator_level2">
                        <div class="navigator_level2_center">
                            <router-link to="/solution" class="navigator_item">微官网</router-link>
                            <router-link to="/solution_mall" class="navigator_item">微商城</router-link>
                            <router-link to="/solution_distribution" class="navigator_item">微分销</router-link>
                            <router-link to="/solution_member" class="navigator_item">微会员</router-link>
                        </div>
                    </div>
                    </router-link>
				<router-link to="/cases" class="navigator home_active"><i>经典案例</i></router-link>
				<router-link to="/parter" class="navigator home_active"><i>代理加盟</i></router-link>
				<router-link to="/product_index" class="navigator home_active">
                    <i>产品套餐</i>
                    </router-link>
				<router-link to="/news" class="navigator home_active"><i>行业资讯</i></router-link>
				<router-link to="/about" class="navigator home_active"><i>关于我们</i></router-link>
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
    @keyframes navbar{
        0%{
            width: 100%;
            min-height:0;
            background: #fff;
            position: absolute;
            top: 15rem;
            left: 0;
            height: 0;
            overflow: hidden;
            opacity: 0;
        }
        100%{
            width: 100%;
            height: auto;
            top: 5rem;
            opacity: 1;
        }
    }
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
	width: 12.5rem;
	font-size: 24px;
	text-align: left;
	height: 3.3rem;
    color:#fff;
    margin-top: 0.85rem;
}
.navbar .container .logo img,.navbar .container .logo a{
	width: 12.5rem;
	height: 3.3rem;
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
.navbar .container .menu>.navigator .navigator_level2{
    width: 100%;
    min-height:0;
    background: #fff;
    position: absolute;
    top: 15rem;
    left: 0;
    height: 0;
    overflow: hidden;
    opacity: 0;
}
.navbar .container .menu>.navigator:hover .navigator_level2{
    width: 100%;
    height: auto;
    top: 5rem;
    opacity: 1;
    animation: navbar .8s ease-in 1;
}
.navbar .container .menu>.navigator .navigator_level2 .navigator_level2_center{
    width: 100%;
    height: auto;
    line-height: 3.5rem;
    text-align: center;
}
.navbar .container .menu>.navigator .navigator_level2 .navigator_level2_center a:hover{
    color:#2F5CFF;
}
.navbar .container .menu>.navigator .navigator_level2 .navigator_level2_center a{
    display: inline-block;
    width: 100%;
    color:#666;
    font-size: 14px;
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
/*路由样式*/
.navbar .container .menu>.navigator .navigator_level2 .navigator_level2_center a.navigator_item.router-link-exact-active{
    color:#2F5CFF;
}
.navbar .navigator.router-link-exact-active.home_active.pl_active{
    border-bottom:3px solid #fff;
    box-sizing: border-box;
}
.navbar .container .menu:hover>.navigator.router-link-exact-active.pl_active{
    border:none;
}
.navbar .container .menu:hover>.navigator.pl_active:hover{
    border-bottom:3px solid #fff;
    box-sizing: border-box;
}
.navbar .container .menu>.navigator:hover{
    border-bottom:3px solid #fff;
    box-sizing: border-box;
}
</style>
