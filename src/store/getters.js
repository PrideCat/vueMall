const getters = {
    language: state => state.app.language,
    menuI: state => state.app.menuI,
    breadCrumbs: state => state.app.breadCrumbs,
    userInfo: state => state.app.userInfo,
    userStorage: state => state.app.userStorage,
    cartsLen: state => state.app.cartsLen,
    isMobile: state => state.app.isMobile,
    mobileMenuIsShow: state => state.app.mobileMenuIsShow,
}

export default getters