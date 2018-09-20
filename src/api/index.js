import i18n_lang from 'utils/i18n_lang'

export default {
  install(Vue) {
    const fns = {
      api(name) {
        const urljson = {
          login: 'user/login',
          orders: 'commodity/retrive',
          orderInfo: 'commodity/msg',
          carts: 'cart/retrive',
          addCart: 'cart/add',
          removeCart: 'cart/remove',
          news: 'news/retrive'
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
            } else {
              switch (res.data.result) {
                case 'failure':
                  msg = '請求失敗，請聯繫管理員。'
                  break;
                case 'login':
                  msg = '需要登錄'
                  break;
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
