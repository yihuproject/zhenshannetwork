<template>
  <div class="navbar">
	<div class="navbar_hover_back">
		<div class="container">
			<div class="logo">
				<router-link to="/"><img v-lazy="img1" alt=""></router-link>
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
          img1:"/static/images/index/logo.png",
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
  @media screen and (max-width:1200px) {
    
  }
    @keyframes navbar{
        0%{
            width: 100%;
            min-height:0;
            background: #fff;
            position: absolute;
            top: 15px;
            left: 0;
            height: 0;
            overflow: hidden;
            opacity: 0;
        }
        100%{
            width: 100%;
            height: auto;
            top: 5px;
            opacity: 1;
        }
    }
.navbar{
	width: 100%;
	height: 60px;
	font-family: "microsoft yahei";
	background:none;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
}
.navbar .navbar_hover_back{
	width: 100%;
	height: 60px;
	background:none;
	transition: background-color .8s;
}
.navbar .navbar_hover_back:hover{
	background:rgba(0,0,0,0.15);
}
.navbar .container{
	width: 1200px;
	height: 60px;
	color:#fff;
	display: flex;
	margin: 0 auto;
	flex-flow: row nowrap;
	justify-content: space-between;
	align-items: center;
}
.navbar .container .logo{
	width: 150px;
	font-size: 24px;
	text-align: left;
	height: 39.6px;
  color:#fff;
  margin-top: 11px;
}
.navbar .container .logo img,.navbar .container .logo a{
	width: 150px;
	height: 39.6px;
}
.navbar .container .menu{
	width: 720px;
	height: 60px;
}
.navbar .container .menu>.navigator:first-child{
	margin-left: 104px;
}
.navbar .container .menu>.navigator{
  display: inline-block;
	width: auto;
	height: 60px;
	line-height: 60px;
	color:#fff;
	float: left;
	font-size: 14px;
	padding: 0 18px;
    position: relative;
}
.navbar .container .menu>.navigator .navigator_level2{
    width: 100%;
    min-height:0;
    background: #fff;
    position: absolute;
    top: 180px;
    left: 0;
    height: 0;
    overflow: hidden;
    opacity: 0;
}
.navbar .container .menu>.navigator:hover .navigator_level2{
    width: 100%;
    height: auto;
    top: 60px;
    opacity: 1;
    animation: navbar .5s ease-in 1;
}
.navbar .container .menu>.navigator .navigator_level2 .navigator_level2_center{
    width: 100%;
    height: auto;
    line-height: 42px;
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
	width: 282px;
	height: 45px;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	align-items: center;
}
.navbar .container .func .navigator{
	width: 70px;
	height: 30px;
	line-height: 30px;
	font-size: 14px;
	padding: 0;
	margin: 30px 0;
	margin-left: 2px;
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
