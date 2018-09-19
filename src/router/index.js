import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'index',
        redirect: '/home',
        children: [{
            path: '/home',
            name: 'home',
            component: r => require(["views/home"], r)
        }, {
            path: '/product',
            name: 'product',
            component: r => require(["views/product"], r)
        }, {
            path: '/products',
            name: 'products',
            component: r => require(["views/products"], r)
        }, {
            path: '/productInfo',
            name: 'productInfo',
            component: r => require(["views/productInfo"], r)
        }, {
            path: '/shoppingCart',
            name: 'shoppingCart',
            component: r => require(["views/shoppingCart"], r)
        }, {
            path: '/news',
            name: 'news',
            component: r => require(["views/news"], r)
        }, {
            path: '/newsDetail',
            name: 'newsDetail',
            component: r => require(["views/newsDetail"], r)
        }, {
            path: '/faq',
            name: 'faq',
            component: r => require(["views/faq"], r)
        }],
        component: r => require(["views/index"], r)
    }]
})