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
        <pagination :curPage='curPage' :allPage='allPage' @changePage='changePage'></pagination>
        <foot></foot>    
    </div>
</template>
<script>
import navigation from './common/navigation'
import foot from './common/foot'
import pagination from './common/pagination'
import movieApi from '../api/movie.js'
export default {
  components: {
    'navigation': navigation,
    'foot': foot,
    'pagination': pagination
  },
  data () {
    return {
      allPage: 0,
      curPage: 1,
      limit: 6,
      isloading: true,
      movieList: []
    }
  },
  mounted () {
    movieApi.getAllMovie('', this.limit).then(res => {
      this.allPage = res.data.allPage
      this.movieList = res.data.movieList
      this.isLoading = false
    })
  },
  methods: {
    changePage (cur) {
      movieApi.getAllMovie(cur, this.limit).then(res => {
        this.allPage = res.data.allPage
        this.movieList = res.data.movieList
        this.curPage = cur
      })
    }
  }
}
</script>
<style scoped>
#movie-area {
    text-align: center;
    width: 90%;
    min-width: 706px;
    height: auto;
    min-height: 88vh;
    margin: 10px auto 0;
}
.movie-item {
    margin: 20px 15px 30px 15px;
    height: 400px;
    width: 280px;
    transition: all .3s;
}
.movie-item:hover {
    box-shadow: 0 0 1em;
    transform: scale(1.05);
}
a > img {
    z-index: 0;
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
