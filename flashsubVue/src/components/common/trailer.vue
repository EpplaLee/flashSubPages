<template v-if="trailerList.length !== 0 && isLoading == false">
    <ul>
        <li v-for="(trailer, index) in trailerList" class="news-title">
            <a v-bind:to="trailer.url">{{ trailer.title }}</a>
            <hr class="hr0" />
        </li>
    </ul>
</template>
<script>
import trailerApi from '../../api/trailer.js'
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
      this.allPage = res.data.allPage
      this.trailerList = res.data.trailerList
      this.isLoading = false
    })
  }
}
</script>
