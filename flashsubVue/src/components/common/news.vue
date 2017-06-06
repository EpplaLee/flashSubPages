<template v-if="newsList.length !== 0 && isLoading == false">
    <ul>
        <li v-for="(news, index) in newsList" class="news-title">
            <router-link v-bind:to="'news/'+news._id">{{ news.title }}</router-link>
            <hr class="hr0" />
        </li>
    </ul>
</template>
<script>
import newsApi from '../../api/news.js'
export default {
  data () {
    return {
      limit: 9,
      newsList: []
    }
  },
  mounted () {
    newsApi.getAllNews('', this.limit).then(res => {
      this.newsList = res.data.newsList
    })
  }
}
</script>
