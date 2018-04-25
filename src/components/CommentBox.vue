<template>
  <div class="wrap">
    <div class="comment-form">
      <input placeholder="请填写评论" />
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
  },
  methods: {
    handleClick: () => {
      console.log('clicked')
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
