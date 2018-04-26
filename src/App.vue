<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import Post from './components/Post'
export default {
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
