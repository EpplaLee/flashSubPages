<template>
    <div>
        <navigation></navigation>
        <template>
            <div id="movie-area">
                <div class="movie-item pure-u-1-4" v-for="(movie,index) in movieList">
                    <router-link v-bind:to="'movie/'+movie._id">
                    <img :src="movie.smallPic" v-bind:alt="movie.name">
                    <p>{{ movie.name }}</p>
                    </router-link>    
                </div>
            </div>
        </template>    
    </div>
</template>
<script>
import navigation from './common/navigation'
import movieApi from '../api/movie.js'
export default {
  components: {
    'navigation': navigation
  },
  data () {
    return {
      allPage: 0,
      limit: 16,
      isloading: true,
      movieList: []
    }
  },
  mounted () {
    movieApi.getAllMovie('', '', this.limit).then(res => {
      this.allPage = res.data.allPage
      this.movieList = res.data.movieList
      this.isLoading = false
    })
  }
}
</script>
<style scoped>
#movie-area {
    text-align: center;
    width: 90%;
    margin: 10px auto 0;
}
.movie-item {
    margin: 15px;
    height: 400px;
    width: 280px;
}
a > img {
    height: 380px;
    width: 280px;
}
a > p {
    display: block;
    text-decoration: none;
    margin-top: -5px;
    padding-top: 15px;
    padding-bottom: 5px;
    color: white;
    background-color: black;
}
</style>
