<template>
    <div>
    <navigation></navigation>
    <div id="news-area">
        <div class="news-item" v-for="(news,index) in newsList">
            <div id="gallery">
            <img v-bind:src="news.url" v-bind:alt="news.name">    
            </div>
            <div id="text-area">
                <h3>{{ news.name }}</h3>
                <hr class="hr0" />
                <div id="info">
                <p id="trans">翻译贡献者:{{ news.trans }}</p>
                <p id="time">{{ news.time }}</p>
                </div>
            </div>  
        </div>
    </div>  
    </div>
</template>
<script>
import navigation from './common/navigation'
import newsApi from '../../api/news.js'
export default {
  components: {
    'navigation': navigation
  },
  data () {
    return {
      allPage: 0,
      limit: 8,
      isloading: true,
      newsList: []
    }
  },
  mounted () {
    newsApi.getAllNews('', '', this.limit).then(res => {
      this.allPage = res.data.allPage
      this.newsList = res.data.newsList
      this.isloading = false
    })
  }
}
</script>
<style>
#news-area {
    width: 90%;
    margin: 20px auto 0;
}
.news-item {
    margin-bottom: 30px;
    display: flex;
    border-bottom: solid 2px rgba(128,128,128,0.2);
}
#gallery > img{
    margin-bottom: -5px;
    height: 120px;
    width: 120px;
}
#text-area {
    width: 80%;
    margin-left: 20px;
}
.hr0{ 
    height:1px;
    border:none;
    border-top:1.5px dashed gray;
}
#info {
    display: flex;
    justify-content: space-between;
}
#time {
    color: gray;
}
#trans {
    color: gray;
}
</style>
