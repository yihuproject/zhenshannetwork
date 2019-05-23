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

Vue.use(Router)
export default new Router({
  linkActiveClass:'pl_active',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
		{
		  path: '/index',
		  name: 'Index',
		  component: Index
		},
    {
      path: '/solution',
      name: 'solution',
      component: Solution,
      children:[
        {
          path:"/",
          name:"solution",
          component:SolutionIndex
        },
        {
          path:"/solution_index",
          name:"solution",
          component:SolutionIndex
        },
         {
          path:"/solution_member",
          name:"solution_member",
          component:SolutionMember
        },
        {
          path:"/solution_distribution",
          name:"solution_distribution",
          component:SolutionDistribution
        },
         {
          path:"/solution_mall",
          name:"solution_mall",
          component:SolutionMall
        }
      ]
    },
    {
      path:"/about",
      name:"about",
      component:About
    },
    {
      path:"/news",
      name:"news",
      component:News,
      children:[
        {
          path:"/news_detail",
          name:"news_detail",
          component:NewsContent
        },
        {
          path:"/news_menu",
          name:"news_menu",
          component:NewsMenu
        },
         {
          path:"/",
          name:"news_menu",
          component:NewsMenu
        }
      ]
    },
    {
      path:"/cases",
      name:"cases",
      component:Cases,
      children:[
        {
          path:"/",
          name:"cases",
          component:CasesList,
        },
        {
          path:"/cases_list",
          name:"cases",
          component:CasesList,
        }
      ]
    },
    {
      path:"/parter",
      name:"parter",
      component:cooperationParter,
    },
    {
      path:"/product",
      name:"product",
      component:Product,
      children:[
        {
          path:"/",
          name:"product_index",
          component:ProductIndex
        },
        {
          path:"/product_index",
          name:"product_index",
          component:ProductIndex
        },
        {
          path:"/Product_member",
          name:"Product_member",
          component:ProductMember
        },
        {
          path:"/Product_distribution",
          name:"Product_distribution",
          component:ProductDistribution
        },
        {
          path:"/Product_mall",
          name:"Product_mall",
          component:ProductMall
        }
      ]
    }
  ]
})