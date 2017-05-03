<template>
    <div id="body">
        <navigation></navigation>
        <div id="content">
            <img v-bind:src="movie.bigPic" alt="movie.name">
            <table class="pure-table">
                <tbody>
                    <tr>
                        <td>电影名</td>
                        <td>{{ movie.name }}</td>
                    </tr>
                    <tr class="pure-table-odd">
                        <td>发行公司</td>
                        <td>{{ movie.station }}</td>
                    </tr>
                    <tr>
                        <td>上映时间</td>
                        <td>{{ movie.broadcastTime }}</td>
                    </tr>
                    <tr class="pure-table-odd">
                        <td>导演</td>
                        <td>{{ movie.directors }}</td>
                    </tr>
                    <tr>
                        <td>编剧</td>
                        <td>{{ movie.scenarists }}</td>
                    </tr>
                    <tr class="pure-table-odd">
                        <td>主演</td>
                        <td>{{ movie.casts }}</td>
                    </tr>
                    <tr>
                        <td>类型</td>
                        <td>{{ movie.genres }}</td>
                    </tr>

                    <tr class="pure-table-odd">
                        <td>片长</td>
                        <td>{{ movie.movieLength }}分钟</td>
                    </tr>
                    <tr class="pure-table">
                        <td>下载链接</td>
                        <td><button class="pure-button download-button"><a v-bind:href="movie.downloadLink">度盘链接</a></button></td>
                    </tr>
                </tbody>
            </table>
            <h4>剧情介绍:</h4>
            <p>{{ movie.synopsis }}</p>
        </div>
    </div>
</template>
<script>
import navigation from './common/navigation'
import movieApi from '../api/movie'
export default {
  components: {
    'navigation': navigation
  },
  data () {
    return {
      movie: {}
    }
  },
  mounted () {
    movieApi.getMovie(this.$route.params.id).then(res => {
      this.movie = res.data.movie
    })
  }
}
</script>
<style scoped>
#body {
    background-color: #ECEDEF;
    padding-bottom: 20px;
}
#content {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    padding: 0 40px 20px 40px;
    background: #fff;
    border-radius: 2px 2px 2px 2px; 
    -webkit-box-shadow: 0 1px 4px 
    rgba(0, 0, 0, 0.3), 0 0 40px 
    rgba(0, 0, 0, 0.1) inset;
    -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
    box-shadow: 0 1px 4px 
    rgba(0, 0, 0, 0.3), 0 0 40px 
    rgba(0, 0, 0, 0.1) inset;
}
#content > img {
    width: 100%;
}
#content > table {
    width: 100%;
}
.download-button {
    background-color: #DAEAF2;
    border-radius: 8px;
}
.download-button > a {
    text-decoration: none;
    color: #8D92B9;
}
</style>
