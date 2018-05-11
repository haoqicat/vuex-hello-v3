<template>
  <div class="wrap">
    <div v-if="show" class="title">
      {{ post.title }}
      评论数：{{ commentCount }}
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
    },
    commentCount() {
      return this.$store.getters.getComments(this.postId).length
    },
    show() {
      return this.post
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
