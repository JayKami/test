import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Params from '@/components/params'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   // 多路由需要加s
    //   components: {
    //     default: HelloWorld,
    //     left: Hi1,
    //     right: Hi2,
    //   }
    // }, {
    //   path: '/jspang',
    //   name: 'HelloWorld',
    //   // 多路由需要加s
    //   components: {
    //     default: HelloWorld,
    //     left: Hi2,
    //     right: Hi1,
    //   }
    // }
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },{
      path:'/params/:newsId/:newsTitle',
      component: Params,
      // beforeEnter: (to, from, next) =>{
      //   console.log(to);
      //   console.log(from);
      //   // 跳转
      //   next({path:'/'});
      // }
    },{
      path: '/goHome',
      // 重定向
      redirect: '/',
    },{
      path:'/goParams/:newsId/:newsTitle',
      redirect:'/params/:newsId/:newsTitle'
    },{
      path:'/hi1',
      component: Hi1,
      //别名
      alias: '/jspang',
    },{
      path:'*',
      component:Error
    }
  ]
})
