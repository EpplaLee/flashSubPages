<template>
    <div>
    <navigation></navigation>
    <div id="news-area">
        <div class="news-item" v-for="(news,index) in newsList">
            <div id="gallery">
            <img v-bind:src="news.pic" v-bind:alt="news.title">    
            </div>
            <div id="text-area">
                <router-link v-bind:to="'news/'+news._id"><h3>{{ news.title }}</h3></router-link> 
                <hr class="hr0" />
                <div id="info">
                <p id="trans">翻译贡献者:{{ news.translator }}</p>
                <p id="time">{{ news.transTime }}</p>
                </div>
            </div> 
            
        </div>
    </div>
    <pagination :curPage='curPage' :allPage='allPage' @changePage='changePage'></pagination>
    <foot></foot>  
    </div>
</template>
<script>
import navigation from './common/navigation'
import newsApi from '../api/news.js'
import foot from './common/foot'
import pagination from './common/pagination'
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
      newsList: []
    }
  },
  mounted () {
    newsApi.getAllNews('', this.limit).then(res => {
      this.allPage = res.data.allPage
      this.newsList = res.data.newsList
      this.isloading = false
    })
  },
  methods: {
    changePage (cur) {
      newsApi.getAllNews(cur, this.limit).then(res => {
        this.allPage = res.data.allPage
        this.newsList = res.data.newsList
        this.curPage = cur
      })
    }
  }
}
</script>
<style>
#news-area {
    width: 90%;
    height: 120vh; 
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
#text-area > a {
    text-decoration: none;
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
