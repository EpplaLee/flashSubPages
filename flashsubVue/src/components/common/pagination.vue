<template>
    <div>
        <ul>
            <li @click="prevPage">前一页</li>
            <li v-for="page in allPage" @click="switchPage(page)" :class="{'active':page===curPage}">{{ page }}</li>
            <li @click="nextPage">后一页</li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'pagination',
  data () {
    return {}
  },
  props: {
    curPage: {
      type: Number,
      required: true
    },
    allPage: {
      type: Number,
      required: true
    }
  },
  methods: {
    prevPage () {
      if (this.curPage <= 1) {
        return
      }
      this.$emit('changePage', this.curPage - 1)
    },
    nextPage () {
      if (this.curPage >= this.allPage) {
        return
      }
      this.$emit('changePage', this.curPage + 1)
    },
    switchPage (page) {
      console.log(page)
      // 触发父组件的changePage方法，实现从父组件再修改props,单向数据流
      this.$emit('changePage', page)
    }
  }
}
</script>
<style scoped>
div {
    text-align: center;
}
li {
    border: solid 1px #8a8a8a;
    padding-left: 8px;
    padding-right: 8px;
    display: inline;
}
li:hover { 
    background-color: #8a8a8a;
    color: white;
}
.active {
    background-color: black;
    color: white;
}
li:hover {
    cursor: pointer;
}
</style>
