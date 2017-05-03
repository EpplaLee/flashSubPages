<template v-if="newsList.length !== 0 && isLoading == false">
    <ul>
        <li v-for="(news, index) in newsList" class="news-title">
            <router-link v-bind:to="'news/'+news._id">{{ news.name }}</router-link>
            <hr class="hr0" />
        </li>
    </ul>
</template>
<script>
import newsApi from '../../api/news.js'
export default {
  data () {
    return {
      allPage: 0,
      limit: 8,
      isLoading: true,
      newsList: []
    }
  },
  mounted () {
    newsApi.getAllNews('', '', this.limit).then(res => {
      console.log(res)
      this.allPage = res.data.allPage
      this.newsList = res.data.newsList
      this.isLoading = false
    })
  }
}
</script>
