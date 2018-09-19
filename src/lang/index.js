import Vue from 'vue'
import VueI18n from 'vue-i18n'
import i18n_lang from 'utils/i18n_lang'
import store from 'store'

Vue.use(VueI18n)

const i18n = new VueI18n({
    locale: store.state.app.language,
    messages: i18n_lang
})

export default i18n