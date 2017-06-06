<template>
    <div>
        <navigation></navigation>
        <div id="body">
            <h2>{{ news.title }}</h2>
            <p class="subtitle">{{ news.transTime }} By.{{ news.translator}}</p>
            <img v-bind:src="news.pic" v-bind:alt="news.title">
            <div>
                {{ news.content }}
            </div>
        </div>
    </div>
</template>
<script>
import navigation from './common/navigation'
import newsApi from '../api/news'
export default {
  components: {
    'navigation': navigation
  },
  data () {
    return {
      news: {}
    }
  },
  mounted () {
    newsApi.getNews(this.$route.params.id).then(res => {
      this.news = res.data.news
    })
  }
}
</script>
<style scoped>
#body {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    padding: 0 40px 20px 40px;
    background: #fff;
    border-radius: 2px 2px 2px 2px; 
    -webkit-box-shadow: 0 1px 4px 
    rgba(0, 0, 0, 0.3), 0 0 40px 
    rgba(0, 0, 0, 0.1) inset;
    -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
    box-shadow: 0 1px 4px 
    rgba(0, 0, 0, 0.3), 0 0 40px 
    rgba(0, 0, 0, 0.1) inset;
}
#body > h2 {
    text-align: center;
    margin-top: 20px;
    padding-top: 20px;
}
#body > img {
    width: 90%;
    display: block;
    margin:auto;
}
.subtitle {
    text-align: center;
    color: #A7968F;
    font-size: 14px;
}
</style>
