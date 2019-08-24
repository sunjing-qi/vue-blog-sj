import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import VueRouter from "vue-router";
// 引入axios模块
import axios from "axios";
import myRouter from "./router";

Vue.config.productionTip = false

// 先在cmd输入 cnpm install vue-router --save下载，然后在这个里面引入
// 使用VueRouter
Vue.use(VueRouter);
// 实例化一个对象
const router = new VueRouter({
  // 去掉那个#
  mode: "history",
  routes: myRouter
})


axios.defaults.baseURL = "http://jsonplaceholder.typicode.com";
// 配置Vue原型（在任何组件中都可以使用全局的axios请求）
// $axios可以随便换成别的名字
Vue.prototype.$axios = axios;

// 封装自定义全局指令（无参数）
// Vue.directive("rainbow", {
//   bind(el, binding, vnode) {
//     // toString(16) 把数字转换为16进制
//     el.style.color = "#" + Math.random().toString(16).slice(2, 8);

//   }
// })
// 封装自定义全局指令（有参数）
Vue.directive("theme", {
  bind(el, binding, vnode) {
    if (binding.value == 'wide') {
      el.style.maxWidth = "1260px";
    } else if (binding.value == 'narrow') {
      el.style.maxWidth = "560px";
    }
    if (binding.arg == "column") {
      el.style.background = "#ddd";
      el.style.padding = '20px';
    }
  }
})
// 自定义一个全局过滤器
// 过滤器名，回调函数
// Vue.filter("to-uppercase", value => {
//   return value.toUpperCase();
// })
// 写一个过滤器，让博客内容只显示100个字符，剩下。。。
Vue.filter("hundred", value => {
  return value.slice(0, 100) + "...";
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
