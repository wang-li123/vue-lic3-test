import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    modules: {
        base: require('./modules/base').default
        // home: require('./modules/home').default,
        // mine: require('./modules/mine').default,
        // cart: require('./modules/cart').default,
        // order: require('./modules/order').default,
        // store: require('./modules/store').default,
        // product: require('./modules/product').default,
        // category: require('./modules/category').default,
        // other: require('./modules/other').default,
        // pay: require('./modules/pay').default
    },
    plugins: [
        // store => {
        //     store.subscribe((mutation, {activeTabIndex, banner}) => {
        //         storage.setItem(STORAGE_KEY, JSON.stringify({activeTabIndex, banner}), event => {
        //             console.log('cache success');
        //         })
        //     })
        // }
    ]
})
export default store
