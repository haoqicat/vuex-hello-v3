<template>
  <div class="wrap">
    <div :key="comment.id" v-for="comment in reversedComments" >
      {{ comment.body }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommentBox',
  data: () => ({
    comments: [
      {
        id: '1',
        body: 'cool'
      },
      {
        id: '2',
        body: 'very cool'
      }
    ]
  }),
  computed: {
    reversedComments: function() {
      return this.comments.reverse()
    }
  }
}
</script>


<style scoped>
.wrap {
  border: 2px solid #53a6ae;
  height: 100px;
  width: 400px;
  margin: 20px auto;
  padding: 10px;
}
</style>
