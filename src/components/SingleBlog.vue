<template>
  <div id="single-blog">
    <button @click="$router.go(-1)">返回首页</button>
    <h1>{{blog.title}}</h1>
    <article>{{blog.body}}</article>
    <p>id:{{blog.id}}</p>
    <p>userId:{{blog.userId}}</p>
  </div>
</template>

<script>
export default {
  name: "SingleBlog",
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    };
  },
  created() {
    // console.log(this.$route.params.id);
    // es6用反引号，es5用“/posts/"+this.id"
    this.$axios.get(`/posts/${this.id}`).then(res => {
      this.blog = res.data;
    });
  }
};
</script>

<style scoped>
#single-blog {
  max-width: 960px;
  margin: 0 auto;
}
</style>
