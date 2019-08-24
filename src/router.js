import ShowBlogs from "./components/ShowBlog";
import AddBlog from "./components/AddBlog";
import ListBlog from "./components/ListBlogs";
import SingleBlog from "./components/SingleBlog";

export default [
    { path: "/", component: ShowBlogs },
    { path: "/add", component: AddBlog },
    { path: "/list", component: ListBlog },
    // 这里:hello,singleblog.vue的created里面就打印xxx.hello
    { path: "/blog/:id", component: SingleBlog },
]