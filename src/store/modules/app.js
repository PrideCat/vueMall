import storage from 'good-storage'

const app = {
    state: {
        language: storage.get('language') || 'zh',
        menuI: 0,
        breadCrumbs: [],
        productCategories: [{
                name: "零售套餐",
                type: 0
            },
            {
                name: "會員套餐",
                type: 1
            },
            {
                name: "進階套餐",
                type: 2
            },
            {
                name: "尊享套餐",
                type: 3
            }
        ],
        userInfo: sessionStorage.getItem("userInfoStorage"),
        userStorage: sessionStorage.getItem("userStorage"),
        cartsLen: 0,
        isMobile: 0,
        mobileMenuIsShow: 0
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
        SET_USER_INFO: (state, userInfo) => {
            state.userInfo = userInfo
        },
        SET_USER_STORAGE: (state, userStorage) => {
            state.userStorage = userStorage
        },
        SET_CARTS_LEN: (state, cartsLen) => {
            state.cartsLen = cartsLen
        },
        SET_IS_MOBILE: (state, isMobile) => {
            state.isMobile = isMobile
        },
        SET_MOBILE_MENU_IS_SHOW: (state, mobileMenuIsShow) => {
            state.mobileMenuIsShow = mobileMenuIsShow
        },
    },
    actions: {
        setLanguage({
            commit
        }, language) {
            commit('SET_LANGUAGE', language)
        },
        setMenuI({
            commit
        }, setMenuI) {
            commit('SET_MENU_I', setMenuI)
        },
        setBreadCrumbs({
            commit
        }, breadCrumbs) {
            commit('SET_BREAD_CRUMBS', breadCrumbs)
        },
        setUserInfo({
            commit
        }, userInfo) {
            commit('SET_USER_INFO', userInfo)
        },
        setUserStorage({
            commit
        }, userStorage) {
            commit('SET_USER_STORAGE', userStorage)
        },
        setCartsLen({
            commit
        }, cartsLen) {
            commit('SET_CARTS_LEN', cartsLen)
        },
        setIsMobile({
            commit
        }, isMobile) {
            commit('SET_IS_MOBILE', isMobile)
        },
        setMobileMenuIsShow({
            commit
        }, mobileMenuIsShow) {
            commit('SET_MOBILE_MENU_IS_SHOW', mobileMenuIsShow)
        },
    }
}

export default app