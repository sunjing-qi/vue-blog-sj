<template>
  <div id="app">
    <!-- <ShowBlogs />
    <ListBlogs />-->
    <Header></Header>
    <!-- 有了这个，再次切换到首页不用Post请求，因为缓存了 -->
    <!-- <keep-alive> -->
    <router-view></router-view>
    <!-- </keep-alive> -->
  </div>
</template>
<script>
import Header from "./components/Header";
export default {
  name: "app",
  components: {
    Header

    //   // AddBlog,
    //   ShowBlogs,
    //   ListBlogs
  }
};
</script>
<style>
</style>
