import Vue from 'vue'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
const utils = require('@/utils/')

Vue.prototype.$utils = utils
Vue.use(Element, { locale })
