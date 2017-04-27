import home from '@/components/home'
import tv from '@/components/tv'
import movie from '@/components/movie'
import news from '@/components/news'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
// 非单页应用模式
  mode: 'history',
  routes: [
    {
      path: '/',
      component: home,
      name: 'home'
    },
    {
      path: '/tv',
      component: tv,
      name: 'tv'
    },
    {
      path: '/movie',
      component: movie,
      name: 'movie'
    },
    {
      path: '/news',
      component: news,
      name: 'news'
    }
  ]
})
