<template>
  <div class="wrap">
    <div class="comment-form">
      <input v-model="msg" placeholder="请填写评论" />
      <button @click="handleClick">提交</button>
    </div>
   
    <div :key="comment.id" v-for="comment in reversedComments" >
      {{ comment.body }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommentBox',
  data: () => ({
    msg: ''
  }),
  computed: {
    comments() {
      return this.$store.state.comment.all
    },
    reversedComments() {
      return this.comments.slice().reverse()
    }
  },
  methods: {
    handleClick: function() {
      const comment = {
        id: (this.comments.length + 1).toString(),
        body: this.msg
      }
      this.$store.dispatch({ type: 'addComment', comment })
      this.msg = ''
    }
  }
}
</script>


<style scoped>
.wrap {
  height: 100px;
  width: 400px;
  margin: 20px auto;
  padding: 10px;
}

.comment-form {
  display: flex;
  margin-bottom: 20px;
}

.comment-form input {
  flex-grow: 1;
  border: 0;
  border-bottom: 1px solid lavender;
}

input:focus {
  border: 0;
  border-bottom: 1px solid #d47490;
  outline: 0;
}

.comment-form button {
  margin-left: 5px;
  color: white;
  background-color: #d47490;
  padding: 5px 10px;
}

button:focus {
  outline: 0;
}
</style>
