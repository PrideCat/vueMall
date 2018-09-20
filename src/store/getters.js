const getters = {
    language: state => state.app.language,
    menuI: state => state.app.menuI,
    breadCrumbs: state => state.app.breadCrumbs,
    userInfo: state => state.app.userInfo,
    userStorage: state => state.app.userStorage,
    cartsLen: state => state.app.cartsLen,
}

export default getters