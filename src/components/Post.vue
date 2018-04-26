<template>
  <div class="post">
    <div class="upper">
      {{ postId }}
      <PostBody :title="title" />
    </div>
    <div class="bottom">
      <CommentBox />
    </div>
  </div>
</template>

<script>
import PostBody from './PostBody'
import CommentBox from './CommentBox'
export default {
  name: 'Post',
  data: () => ({
    title: 'Git Tricks'
  }),
  components: {
    PostBody,
    CommentBox
  },
  computed: {
    postId: function() {
      return this.$route.params.id
    }
  }
}
</script>

<style scoped>
.post {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.upper {
  display: flex;
  background-color: #53a6ae;
}
.bottom {
  flex-grow: 1;
  background-color: #fff;
}
</style>
