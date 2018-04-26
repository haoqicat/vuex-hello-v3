<template>
  <div class="wrap">
    {{ title }}
  </div>
</template>

<script>
export default {
  props: ['title'],
  name: 'PostBody'
}
</script>

<style scoped>
.wrap {
  height: 200px;
  margin: 20px auto;
  width: 400px;
  background-color: #fff;
}
</style>
