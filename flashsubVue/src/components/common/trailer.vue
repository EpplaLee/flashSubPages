<template v-if="trailerList.length !== 0">
    <ul>
        <li v-for="(trailer, index) in trailerList" class="news-title">
            <a v-bind:href="trailer.url" target="_blank">{{ trailer.title }}</a>
            <hr class="hr0" />
        </li>
    </ul>
</template>
<script>
import trailerApi from '../../api/trailer'
export default {
  data () {
    return {
      trailerList: []
    }
  },
  mounted () {
    trailerApi.getAllTrailer().then(res => {
      this.trailerList = res.data.trailerList
    })
  }
}
</script>
