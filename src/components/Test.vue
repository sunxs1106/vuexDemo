<template>
  <div id="test-app">
    <div :class="{errMsg: isActive}"></div>
    <button @click="switchover">切换显示div样式</button>
    <br>
    <router-link to="/index">跳转helloWord</router-link>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "Test",
  data () {
    return {
      // isActive: false,
    }
  },
  methods: {
    switchover () {
      this.isActive = !this.isActive;
    }
  },
  computed: {
    ...mapState(['isActive']),
  }
}
</script>

<style scoped>
  .errMsg{
    width: 200px;
    height: 500px;
    border: 1px solid #f00;
  }
</style>
