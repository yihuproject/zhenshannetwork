import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Solution from '@/components/SolutionCases'
import About from '@/components/About'
//solution
import SolutionIndex from '@/components/solution/SolutionIndex'
import SolutionMember from '@/components/solution/Member'
import SolutionDistribution from '@/components/solution/Distribution'
import SolutionMall from '@/components/solution/Mall'
//news
import News from '@/components/News'
import NewsContent from '@/components/news/NewsContent'
import NewsMenu from '@/components/news/NewsMenu'
//cases
import Cases from '@/components/Cases'
import CasesList from '@/components/cases/casesList'
//cooperation_parter
import cooperationParter from '@/components/cooperationParter'
//product
import Product from '@/components/Product'
import ProductIndex from '@/components/product/ProductIndex'
import ProductMember from '@/components/product/ProductMember'
import ProductDistribution from '@/components/product/ProductDistribution'
import ProductMall from '@/components/product/ProductMall'
//system
import System from '@/components/System'
import Login from '@/components/system/Login'
import Register from '@/components/system/Register'
Vue.use(Router)
export default new Router({
  linkActiveClass:'pl_active',
  routes: [
    //index
    {
      path: '/',
      component: Index
    },
		{
		  path: '/index',
		  component: Index
		},
    //solution
    {
      path: '/solution',
      component: Solution,
      children:[
        {
          path:"/",
          component:SolutionIndex
        },
        {
          path:"/solution_index",
          component:SolutionIndex
        },
         {
          path:"/solution_member",
          component:SolutionMember
        },
        {
          path:"/solution_distribution",
          component:SolutionDistribution
        },
         {
          path:"/solution_mall",
          component:SolutionMall
        }
      ]
    },
    //about
    {
      path:"/about",
      component:About
    },
    //news
    {
      path:"/news",
      component:News,
      children:[
        {
          path:"/news_detail",
          component:NewsContent
        },
        {
          path:"/news_menu",
          component:NewsMenu
        },
         {
          path:"/",
          component:NewsMenu
        }
      ]
    },
    //cases
    {
      path:"/cases",
      component:Cases,
      children:[
        {
          path:"/",
          component:CasesList,
        },
        {
          path:"/cases_list",
          component:CasesList,
        }
      ]
    },
    //parter
    {
      path:"/parter",
      component:cooperationParter,
    },
    //product
    {
      path:"/product",
      component:Product,
      children:[
        {
          path:"/",
          component:ProductIndex
        },
        {
          path:"/product_index",
          component:ProductIndex
        },
        {
          path:"/Product_member",
          component:ProductMember
        },
        {
          path:"/Product_distribution",
          component:ProductDistribution
        },
        {
          path:"/Product_mall",
          component:ProductMall
        }
      ]
    },
    //system
    {
      path:"/system",
      component:System,
      children:[
        {
          path:"/",
          component:Login,
        },
        {
          path:"/login",
          component:Login,
        },
        {
          path:"/register",
          component:Register,
        }
      ]
    }
  ]
})