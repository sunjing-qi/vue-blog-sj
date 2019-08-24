<template>
  <div class="show-blogs" v-theme:column="'wide'">
    <h1>所有博客</h1>
    <!-- search -->
    <input type="text" placeholder="search somthing..." v-model="search" />
    <div v-for="(blog,index) in filterBlogs" :key="index" class="single-blog">
      <router-link :to="'/blog/'+blog.id">
        <!-- 添加过滤器 -->
        <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
      </router-link>
      <article>{{blog.body | hundred}}</article>
    </div>
  </div>
</template>

<script>
import searchMixin from "../mixins/searchMixins";
export default {
  name: "ShowBlogs",
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  created() {
    this.$axios.get("/posts").then(res => {
      console.log(res.data);
      this.blogs = res.data.slice(0, 10);
    });
  },
  directives: {
    rainbow: {
      bind(el, binding, vnode) {
        // toString(16) 把数字转换为16进制
        el.style.color =
          "#" +
          Math.random()
            .toString(16)
            .slice(2, 8);
      }
    }
  },
  filters: {
    //   这种形式不常用
    // "to-uppercase": function(value) {
    //   return value.toUpperCase();
    // }
    toUppercase(value) {
      return value.toUpperCase();
    }
  },
  mixins: [searchMixin]
};
</script>

<style scoped>
.show-blogs {
  max-width: 800px;
  margin: 0 auto;
}
.single-blog {
  padding: 10px 20px 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background-color: #eee;
}
input[type="text"] {
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}
</style>
