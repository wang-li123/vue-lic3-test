import Vue from 'vue'
import Router from 'vue-router'
import Header from "./components/layout/Header";
import Footer from './components/layout/Footer';



Vue.use(Router)
Router.prototype.goBack = function (step = -1) {
    this.isBack = true;
    window.history.go(step);
}

Router.prototype.push = function (location, onSucc, onAbort) {
    this.isBack = false;
    this.history.push(location, onSucc, onAbort);
}

Router.prototype.replace = function (location, onSucc, onAbort) {
    this.isBack = false;
    this.history.replace(location, onSucc, onAbort);
}


export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            meta: {
                title: '首页',
                keepalive: false // 不需要缓存
            },
            components: {
                default: (resolve) => require(['./views/home/Home'],resolve),
                footer: Footer
            },

        },
        {
            path: '/about',
            name: 'About',
            meta: {
                title: '关于我们',
                keepalive: false // 不需要缓存
            },
            components: {
                default: (resolve) => require(['./views/About.vue'],resolve),
                header:Header
            }

        }
    ]
})
