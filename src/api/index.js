export default {
    install(Vue) {

        const fns = {
            api(name) {
                const urljson = {
                    orders: 'commodity/retrive',
                    orderInfo: 'commodity/msg',
                    carts: 'cart/retrive',
                    addCart: 'cart/add',
                    removeCart: 'cart/remove',
                    news: 'news/retrive'
                }
                return urljson[name]
            },
            ajax({ type = 'post', apiName, data }) {
                return new Promise((resolve, reject) => {
                    this.axios({
                        method: type,
                        url: this.api(apiName),
                        data,
                        xhrFields: {
                            withCredentials: true
                        }
                    }).then(res => {
                        if (res.data.result === 'success')
                            resolve(res.data)
                        else
                            console.log(res.data.result)
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