<template>
<div>
    <navigation></navigation>
    <div class="pure-g">
        <div class="pure-u-1-2 carousel" id="tv" v-for="(tv,index) in tvOnShowList" v-show="index===tvPage">
            <transition name="fade">
            <img class="pureimg" v-bind:src="tv.onShowUrl" v-show="index===tvPage">
            </transition>               
            <button class="pure-button  carousel-button carousel-button-left"><a v-bind:href="'/tv/'+tv._id">查看详情</a></button>
            <p class="post-info post-info-left">{{ tv.description }}</p>
            <div class="circle" id="red-circle">
            <a href="/tv">美剧</a>
            </div>
        </div> 
        <div class="pure-u-1-2 carousel" id="movie" v-for="(movie,index) in movieOnShowList" v-show="index===moviePage">
            <transition name="fade">
            <img class="pureimg" v-bind:src="movie.onShowUrl" v-show="index===moviePage">
            </transition>
            <button class="pure-button  carousel-button carousel-button-right"><a v-bind:href="'/movie/'+movie._id">查看详情</a></button>
            <p class="post-info post-info-right">{{ movie.description }}</p>
            <div class="circle" id="blue-circle">
                <a href="/movie">电影</a>
            </div>
        </div> 
        <div class="pure-u-1-2" id="news">
            <div id="news-area">
                <news></news>
            </div>
            <div class="circle" id="yellow-circle">
                <a href="/news">资讯</a>               
            </div>
        </div>
        <div class="pure-u-1-2" id="trailer">
            <div id="news-area">
                <trailer></trailer>
            </div>
            <div class="circle" id="green-circle">
                <a href="#">预告</a>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import navigation from './common/navigation'
import news from './common/news'
import trailer from './common/trailer'
import tvApi from '../../api/tv'
import movieApi from '../../api/movie'
export default {
  components: {
    'navigation': navigation,
    'news': news,
    'trailer': trailer
  },
  data () {
    return {
      tvOnShowList: [],
      movieOnShowList: [],
      moviePage: 0,
      tvPage: 0
    }
  },
  created () {
    movieApi.getMovieOnShow().then(res => {
      this.movieOnShowList = res.data.movieList
    })
    tvApi.getTVOnShow().then(res => {
      this.tvOnShowList = res.data.tvList
    })
  },
  mounted () {
    setInterval(() => {
      if (this.moviePage === this.movieOnShowList.length - 1) this.moviePage = 0
      else this.moviePage = this.moviePage + 1
      if (this.tvPage === this.tvOnShowList.length - 1) this.tvPage = 0
      else this.tvPage = this.tvPage + 1
    }, 4000)
  }
}
</script>
<style>
.pure-g {
    height: 95vh !important;
}
.pure-u-1-2 {
    height: 47.5vh !important;
    position: relative;
    overflow: hidden;
}
#tv {
    background-color: black;
}
#movie {
    background-color: black;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .8s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.circle {
    z-index: 2;
    width: 120px;
    height: 120px;
    position: absolute;
}
.circle > a {
    text-decoration: none;
    color: white;
}

.pureimg {
    height: 100% !important;
    width: 100%
}
.post-info {
    background-color: rgba(0,0,0,0.8);
    position: absolute;
    color: white;
    margin-top: -50px;
    z-index: 3;
}
.post-info-left {
    bottom: -10px;
    left: 10px;
}
.post-info-right {
    bottom: -10px;
    right: 10px;
}
.carousel-button {
    font-size: 13px !important;
    background-color: #C13939 !important;
    position: absolute;
    z-index: 3;
}
.carousel-button > a {
    color: white;
    text-decoration: none !important;
}
.carousel-button-left {
    bottom: 40px;
    left: 10px;
}
.carousel-button-right {
    bottom: 40px;
    right: 10px;
}
#red-circle{
    bottom: -60px;
    right: -60px;
    border-radius: 50%;
    background-color: #01062E;
    border: solid 2px black;
}
#red-circle > a {
    position: absolute;
    right: 70px;
    bottom: 70px;
}
#blue-circle{
    bottom: -60px;
    left: -60px;
    border-radius: 50%;
    background-color: white;
    border: solid 2px black;
}
#blue-circle > a {
    position: absolute;
    left: 70px;
    bottom: 70px;
    color: black;
}
#yellow-circle{
    top: -60px;
    right: -60px;
    border-radius: 50%;
    background-color: white;
    border: solid 2px black;
}
#yellow-circle > a {
    position: absolute;
    right: 70px;
    top: 70px;
    color: black;
}
#green-circle{
    top: -60px;
    left: -60px;
    border-radius: 50%;
    background-color: #01062E;
    border: solid 2px black;
}
#green-circle > a {
    position: absolute;
    left: 70px;
    top: 70px;
}
#news {
    border-right: 0px dashed;
}
#news-area {
    height: 47.5vh;
    margin: 60px 40px 40px 40px;
}
.news-title{
    list-style: none;
    color: dimgray;
}
.news-title > a{
    color: black;
    text-decoration: none;
}
.hr0{ 
    height:1px;
    border:none;
    border-top:1.5px dashed gray;
}  

</style>
