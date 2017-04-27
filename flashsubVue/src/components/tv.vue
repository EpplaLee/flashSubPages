<template>
    <div>
        <navigation></navigation>
        <template>
            <div id="tv-area">
                <div class="tv-item pure-u-1-4" v-for="(tv,index) in tvList">
                    <img :src="tv.url" v-bind:alt="tv.name">
                    <router-link v-bind:to="'tv/'+tv.id">{{ tv.name }}</router-link>    
                </div>
            </div>
        </template>    
    </div>
</template>
<script>
import navigation from './common/navigation'
import tvApi from '../../api/tv.js'
export default {
  components: {
    'navigation': navigation
  },
  data () {
    return {
      allPage: 0,
      limit: 16,
      isloading: true,
      tvList: []
    }
  },
  mounted () {
    tvApi.getAllTV('', '', this.limit).then(res => {
      this.allPage = res.data.allPage
      this.tvList = res.data.tvList
      this.isLoading = false
    })
  }
}
</script>
<style scoped>
#tv-area {
    text-align: center;
    width: 90%;
    margin: 10px auto 0;
}
.tv-item {
    margin: 15px;
    height: 400px;
    width: 280px;
}
.tv-item > img {
    height: 380px;
    width: 280px;
}
.tv-item > a {
    display: block;
    text-decoration: none;
    margin-top: -5px;
    padding-top: 15px;
    padding-bottom: 5px;
    color: white;
    background-color: black;
}
</style>
