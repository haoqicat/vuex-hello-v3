<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import Post from './components/Post'
export default {
  created: function() {
    this.$store.dispatch({ type: 'loadComments' })
  },
  components: {
    Post
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}
</style>
