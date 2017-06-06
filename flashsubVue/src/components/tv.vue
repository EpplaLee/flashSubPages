<template>
    <div>
        <navigation></navigation>
        <template>
            <div id="tv-area">
                
                <div class="tv-item pure-u-1-4" v-for="(tv,index) in tvList">
                    <router-link v-bind:to="'tv/'+tv._id">
                    <img :src="tv.smallPic" v-bind:alt="tv.name">
                    <p>{{ tv.name }}</p> 
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
import tvApi from '../api/tv.js'
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
      curPage: 1,
      allPage: 0,
      limit: 6,
      isloading: true,
      tvList: []
    }
  },
  mounted () {
    tvApi.getAllTV('', this.limit).then(res => {
      this.allPage = res.data.allPage
      this.tvList = res.data.tvList
      this.isLoading = false
    })
  },
  methods: {
    changePage (cur) {
      tvApi.getAllTV(cur, this.limit).then(res => {
        this.allPage = res.data.allPage
        this.tvList = res.data.tvList
        this.curPage = cur
      })
    }
  }
}
</script>
<style scoped>
#tv-area {
    text-align: center;
    width: 90%;
    height: auto;
    min-width: 700px;
    min-height: 88vh;
    margin: 10px auto 0;
}
.tv-item {
    margin: 15px;
    height: 400px;
    width: 280px;
    transition: all .3s;
}
.tv-item:hover {
    box-shadow: 0 0 1em;
    transform: scale(1.05);
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
