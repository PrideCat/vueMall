import storage from 'good-storage'

const app = {
    state: {
        language: storage.get('language') || 'zh',
        menuI: 0,
        breadCrumbs: [],
        productCategories: [
            { name: "零售套餐", type: 0 },
            { name: "會員套餐", type: 1 },
            { name: "進階套餐", type: 2 },
            { name: "尊享套餐", type: 3 }
        ]
    },
    mutations: {
        SET_LANGUAGE: (state, language) => {
            state.language = language
            storage.set('language', language)
        },
        SET_MENU_I: (state, menuI) => {
            state.menuI = menuI
        },
        SET_BREAD_CRUMBS: (state, breadCrumbs) => {
            state.breadCrumbs = breadCrumbs
        },
    },
    actions: {
        setLanguage({ commit }, language) {
            commit('SET_LANGUAGE', language)
        },
        setMenuI({ commit }, setMenuI) {
            commit('SET_MENU_I', setMenuI)
        },
        setBreadCrumbs({ commit }, breadCrumbs) {
            commit('SET_BREAD_CRUMBS', breadCrumbs)
        },
    }
}

export default app