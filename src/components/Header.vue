<template>
  <nav>
    <ul>
      <li>
        <!-- 用a标签是加载新页面，router-link相当于页面内跳转 -->
        <!-- <a href="/">首页</a> -->
        <!-- 写成这样，但是最后解析为a标签 -->
        <!-- exact 不加，点/add会检测到/ -->
        <router-link exact to="/">首页</router-link>
      </li>
      <li>
        <!-- <a href="/add">添加博客</a> -->
        <router-link exact to="/add">添加博客</router-link>
      </li>
      <!-- <li><a href="/"></a>显示所有博客</li> -->
    </ul>
  </nav>
</template>

<script>
export default {
  name: "app-header"
};
</script>

<style scoped>
ul {
  list-style-type: none;
  text-align: center;
  margin: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  text-decoration: none;
  color: #fff;
  padding: 6px 8px;
  border-radius: 10px;
}
nav {
  background: #444;
  padding: 14px 0;
  margin-bottom: 40px;
}
.router-link-active {
  background: #eee;
  color: #444;
}
</style>
