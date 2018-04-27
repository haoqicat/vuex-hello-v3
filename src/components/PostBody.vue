<template>
  <div class="wrap">
    <div class="title">
      {{ post.title }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['postId'],
  name: 'PostBody',
  computed: {
    post() {
      const posts = this.$store.state.post.all
      return posts.find(t => t.id === this.postId)
    }
  }
}
</script>

<style scoped>
.wrap {
  height: 200px;
  margin: 20px auto;
  width: 400px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.title {
  height: 40px;
  line-height: 40px;
  text-align: center;
}
</style>
