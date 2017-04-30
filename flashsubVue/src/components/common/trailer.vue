<template v-if="trailerList.length !== 0 && isLoading == false">
    <ul>
        <li v-for="(trailer, index) in trailerList" class="news-title">
            <router-link v-bind:to="'news/'+trailer._id">{{ trailer.name }}</router-link>
            <hr class="hr0" />
        </li>
    </ul>
</template>
<script>
import trailerApi from '../../../api/trailer.js'
export default {
  data () {
    return {
      allPage: 0,
      limit: 8,
      isLoading: true,
      trailerList: []
    }
  },
  mounted () {
    trailerApi.getAllTrailer('', '', this.limit).then(res => {
      console.log(res)
      this.allPage = res.data.allPage
      this.trailerList = res.data.trailerList
      this.isLoading = false
    })
  }
}
</script>
