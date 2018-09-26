import i18n_lang from 'utils/i18n_lang'

export default {
    install(Vue) {
        const fns = {
            api(name) {
                const urljson = {
                    address: 'address/list',
                    login: 'user/login',
                    commoditys: 'commodity/retrive',
                    commodityInfo: 'commodity/msg',
                    carts: 'cart/retrive',
                    addCart: 'cart/add',
                    removeCart: 'cart/remove',
                    news: 'news/retrive',
                    addOrder: 'commodity/order/add',
                    favorites: 'favorite/retrive',
                    addFavorite: 'favorite/add',
                    removeFavorite: 'favorite/remove',
                    pay: 'commodity/order/pay',
                    questions: 'question/retrive',
                    addQuestion: 'question/add',
                    removeQuestion: 'question/remove'
                }
                return urljson[name]
            },
            ajax({
                type = 'post',
                apiName,
                data
            }) {
                return new Promise((resolve, reject) => {
                    // console.log(this.api(apiName), data);
                    this.axios({
                        method: type,
                        url: this.api(apiName),
                        data,
                        xhrFields: {
                            withCredentials: true
                        }
                    }).then(res => {
                        let msg;
                        if (res.data.result === 'success') {
                            resolve(res.data)
                        } else if (res.data.result === 'login') {
                            if (!this.$store.state.app.userInfo) {
                                window.sessionStorage.setItem("inMellToLogin", 1);
                                window.location.href = "../../member/dist/index.html";
                            }
                        } else {
                            switch (res.data.result) {
                                case 'failure':
                                    msg = '請求失敗，請聯繫管理員。'
                                    break;
                                    // case 'login':
                                    //   msg = '需要登錄'
                                    //   break;
                                case 'user':
                                    msg = '用戶不存在'
                                    break;
                                case 'commodity':
                                    msg = '商品不存在'
                                    break;
                                case 'cart':
                                    msg = '購物車商品不存在'
                                    break;
                                case 'type':
                                    msg = '當前用戶不支持購買該套餐'
                                    break;
                                case 'order':
                                    msg = '商品訂單不存在'
                                    break;
                                case 'owner':
                                    msg = '非訂單用戶'
                                    break;
                                case 'trace':
                                    msg = '訂單交易狀態異常'
                                    break;
                                case 'password':
                                    msg = '密碼錯誤'
                                    break;
                                case 'less':
                                    msg = '餘額不足'
                                    break;
                            }
                            this.$message.error({
                                message: i18n_lang[this.$store.state.app.language][msg]
                            })
                        }
                    }).catch(error => {
                        reject(error)
                    })
                })
            }
        }

        for (let key in fns) {
            Vue.prototype[key] = fns[key]
        }

    }
}