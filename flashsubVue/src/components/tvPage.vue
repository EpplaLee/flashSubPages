<template>
    <div id="body">
        <navigation></navigation>
        <div id="content">
            <img v-bind:src="tv.bigPic" alt="tv.name">
            <table class="pure-table">
                <tbody>
                    <tr>
                        <td>剧名</td>
                        <td>{{ tv.name }}</td>
                    </tr>
                    <tr class="pure-table-odd">
                        <td>电视台</td>
                        <td>{{ tv.station }}</td>
                    </tr>
                    <tr>
                        <td>首播时间</td>
                        <td>{{ tv.firstBroadcastTime }}</td>
                    </tr>
                    <tr class="pure-table-odd">
                        <td>本季开播时间</td>
                        <td>{{ tv.curSeasonTime }}</td>
                    </tr>
                    <tr>
                        <td>导演</td>
                        <td>{{ tv.directors }}</td>
                    </tr>
                    <tr class="pure-table-odd">
                        <td>编剧</td>
                        <td>{{ tv.scenarists }}</td>
                    </tr>
                    <tr>
                        <td>主演</td>
                        <td>{{ tv.cast }}</td>
                    </tr>
                    <tr class="pure-table-odd">
                        <td>类型</td>
                        <td>{{ tv.geres }}</td>
                    </tr>
                    <tr>
                        <td>季数</td>
                        <td>{{ tv.seasonNum }}季</td>
                    </tr>
                    <tr class="pure-table-odd">
                        <td>本季集数</td>
                        <td>{{ tv.episodeNum }}集</td>
                    </tr>
                    <tr>
                        <td>单集片长</td>
                        <td>{{ tv.singleEpisodeTime }}分钟</td>
                    </tr>
                    <tr class="pure-table pure-table-bordered">
                        <td>下载链接</td>
                        <td><button class="pure-button download-button"><a v-bind:href="tv.downloadLink" target="_blank">{{ tv.code }}</a></button></td>
                    </tr>
                </tbody>
            </table>
            <h4>剧情介绍:</h4>
            <p>{{ tv.synopsis }}</p>
        </div>
    </div>
</template>
<script>
import navigation from './common/navigation'
import tvApi from '../api/tv'
export default {
  components: {
    'navigation': navigation
  },
  data () {
    return {
      tv: {}
    }
  },
  mounted () {
    tvApi.getTV(this.$route.params.id).then(res => {
      console.log(res.data)
      this.tv = res.data.tv
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
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    padding: 0 30px 20px 30px;
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
