<template>
  <div>
    <div :key="post.id" v-for="post in posts">
      <router-link :to="'post/' + post.id">{{ post.title }}</router-link>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Home',
  computed: {
    posts() {
      return this.$store.state.post.all
    }
  }
}
</script>
