import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import detail from '@/components/detail'
import about from '@/components/about'

Vue.use(Router)


const router= new Router({
  linkActiveClass: 'nav_active',
  routes: [
    {
        path:'/',
        redirect:index
    },
    {
      path: '/index',
      name: 'index',
      meta:{"title":"MrZhou"},
      component: resolve=>require(['@/components/index'],resolve)
    },
    {
      path: '/detail',
      name: 'detail',
      meta:{"title":"博客详情"},
      component: resolve=>require(['@/components/detail'],resolve)
    }, {
      path: '/about',
      name: 'about',
      meta:{"title":"关于我"},
      component: resolve=>require(['@/components/about'],resolve)
    },
    
  ]
})
router.beforeEach((to,form,next) =>{
    /*路由变化修改title*/
    if(to.meta.title){ 
        document.title=to.meta.title
    } 
    next(); 
})

export default router