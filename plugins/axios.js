
import { Message } from 'element-ui'

export default function ({ $axios, redirect, store, route, req }) {

  // 请求拦截器
  $axios.onRequest(config => {
    // const { token } = store.state
    // if (token) {
    //   config.headers.Authorization = token
    // }
    // const { locale } = store.state
    // config.headers['Content-Type'] = 'application/json'
    config.headers.Language = 'zh'
    // config.headers.platform = 'web'
    if(config.urlencoded){
       config.headers={
        'Content-type':"application/x-www-form-urlencoded"
       }
       var datas = ''
       Object.keys(config.data).map((el,i)=>{
        datas+=(i>0?'&':'')+el+'='+config.data[el]
       })
       config.data = datas
    }
    if(process.env.NODE_ENV !== 'production') config.baseURL = '/api'
    config.timeout = 120 * 1000

    return config
  })

  // 响应拦截器
  $axios.onResponse(response => {
    const res = response.data
    if (res) {
      return res
    }
    // 针对导出excel拿到blob数据时做特殊处理
    if (response.config.responseType === 'blob') {
      return response
    }
    return Promise.reject(response)
  })
let duration = 2.5 * 1000
  // 错误拦截器
  $axios.onError(error => {
    const { status, data } = error
    // 清除所有提示
    Message.closeAll()
    if (status === 200) {
      const code = data.code
      const message = data.msg
      if (code && (code === 'NOT_LOGIN' || code === 'TOKEN_EMPTY')) {
        // token过期了
        Message({
          message: '非法登录',
          type: 'error',
          duration,
          onClose: () => {
            // store.dispatch('logout')
          }
        })
        return
      }
      Message.duration =  0.2 * 1000
      // Message.error(message || '请求失败')
      Message({
        message: message || '请求失败',
        type: 'error',
        duration,
        onClose: () => {
        //   store.dispatch('logout')
        }
      })
      return
    }
    const errMsg = '请求失败'
    Message.error(errMsg || '请求失败')
  })
}
