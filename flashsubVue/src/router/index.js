import home from '@/components/home'
import tv from '@/components/tv'
import movie from '@/components/movie'
import news from '@/components/news'
import tvPage from '@/components/tvPage'
import moviePage from '@/components/moviePage'
import newsPage from '@/components/newsPage'
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
    },
    {
      path: '/tv/:id',
      component: tvPage,
      name: 'tvPage'
    },
    {
      path: '/movie/:id',
      component: moviePage,
      name: 'moviePage'
    },
    {
      path: '/news/:id',
      component: newsPage,
      name: 'newsPage'
    }
  ]
})
