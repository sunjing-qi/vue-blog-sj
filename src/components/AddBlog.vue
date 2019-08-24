<template>
  <div class="add-blog">
    <h2>添加新博客</h2>
    <!-- 写博客 -->
    <form v-if="!submitted">
      <label for>博客标题</label>
      <!-- 懒加载，等输入的标签失去光标，下面的才会更新 -->
      <input type="text" v-model.lazy="blog.title" required />
      <label for>博客内容</label>
      <textarea v-model.lazy="blog.content"></textarea>
      <!-- 分类 -->
      <div id="checkboxes">
        <label for>Vue.js</label>
        <input type="checkbox" value="vue" v-model="blog.categories" />
        <label for>React.js</label>
        <input type="checkbox" value="react" v-model="blog.categories" />
        <label for>Angular.js</label>
        <input type="checkbox" value="angular" v-model="blog.categories" />
        <label for>微信小程序</label>
        <input type="checkbox" value="wechat" v-model="blog.categories" />
      </div>
      <!-- 选项 -->
      <label for>作者</label>
      <!-- blog.author!=下面遍历出来的author -->
      <select v-model="blog.author">
        <option v-for="(author,index) in authors" :key="index">{{author}}</option>
      </select>
      <br />
      <!-- 数据请求 -->
      <button @click.prevent="handlePost">添加博客</button>
    </form>
    <div v-if="submitted">
      <h3>您的博客已经添加成功...</h3>
    </div>

    <!-- 预览 -->
    <div id="preview">
      <h3>博客预览</h3>
      <p>标题预览：{{blog.title}}</p>
      <p>内容预览：</p>
      <p>{{blog.content}}</p>
      <p>技术分类:</p>
      <ul>
        <li v-for="(category,index) in blog.categories" :key="index">{{category}}</li>
      </ul>
      <p>作者：{{blog.author}}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AddBlog",
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: "刘慈欣"
      },
      authors: ["金庸", "余华", "莫言", "刘慈欣"],
      submitted: false
    };
  },
  methods: {
    handlePost() {
      // console.log(this.blog);
      // axios
      //   .get("http://jsonplaceholder.typicode.com/posts")
      //   .then(function(res) {
      //     console.log(res.data);
      //   })
      //   .catch(err => console.log("接口出错"));
      // 箭头函数没有改变this指向，如果then里面写的function(){},那么需要下面这句话
      // const self = this;
      this.$axios
        .post("/posts", {
          title: this.blog.title,
          body: this.blog.content,
          userId: 1
        })
        .then(res => {
          this.submitted = true;
        });
    }
  }
};
</script>

<style scoped>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
#preview {
  padding: 10px 20px;
  border: 1px solid #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label {
  display: inline-block;
}
</style>
