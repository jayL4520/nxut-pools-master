/* eslint-disable no-useless-escape */
/* eslint-disable one-var */
/* eslint-disable prettier/prettier */
// import accounting from 'accounting'
import moment from 'moment'
import { Message } from 'element-ui';
import tableConfigs from "./tableConfig"
// 格式化金钱 $12,345,678.00
// export function parseMoney(val) {
//   if (!val) return ''
//   return accounting.formatMoney(val, '￥')
// }
export function formatAddress(address, length = 20) {
  if (address&&address.length>12) {
    if (address.length <= length) {
      return address
    }
    address = String(address)
    let startNum = Math.floor(length / 2)
    let endNum = length - startNum
    let start = address.substring(0, startNum)
    let end = address.substring(address.length - endNum, address.length)
    return start + "..." + end
  } else {
    return address
  }
}
// 格式化时间  YYYY/MM/DD HH:mm:ss
export function parseDate(val, format = 'YYYY-MM-DD HH:mm') {
  if (!val) return ''

  val = Number(val)
  if(Number(val)){
    val = new Date(val)
   
  }
  return moment(val).format(format)
}

// 格式化时间  YYYY/MM/DD HH:mm:ss
export function parseDatetime(val, format) {
  return parseDate(val, format || 'YYYY-MM-DD HH:mm:ss')
  
}

export function parseTime(time, cFormat) {

  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
      time = parseInt(time)
    }
    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  let time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  time_str = time_str === '0-0-0 0:0:0' ? '' : time_str
  return time_str
}
// 格式化时间  YYYY/MM/DD
export function parseDates(val, format) {

  return parseDate(val, format || 'YYYY-MM-DD')
}

// 深克隆
export const deepClone = obj => {
  if (obj === null) return null
  const clone = Object.assign({}, obj)
  Object.keys(clone).forEach(
    key =>
      (clone[key] =
        typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key])
  )
  return Array.isArray(obj) && obj.length
    ? (clone.length = obj.length) && Array.from(clone)
    : Array.isArray(obj)
    ? Array.from(obj)
    : clone
}

// 节流
export const throttle = (fn, wait) => {
  let inThrottle, lastFn, lastTime
  return function () {
    const context = this,
      args = arguments
    if (!inThrottle) {
      fn.apply(context, args)
      lastTime = Date.now()
      inThrottle = true
    } else {
      clearTimeout(lastFn)
      lastFn = setTimeout(function () {
        if (Date.now() - lastTime >= wait) {
          fn.apply(context, args)
          lastTime = Date.now()
        }
      }, Math.max(wait - (Date.now() - lastTime), 0))
    }
  }
}

// 防抖
export const debounce = (fn, ms = 0) => {
  let timeoutId
  return function (...args) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn.apply(this, args), ms)
  }
}

/**
 *@description 去除页面路径中的参数
 * @param {*} path
 */
export const parsePath = path => {
  let res = path
  if (path && path.includes('?')) {
    res = path.split('?')[0]
  }
  return res
}

/**
 * @description 递归查询路径
 * @param {array} routers
 * @param {string} path
 */
export const findPath = (routers, path) => {
  const originPath = parsePath(path)
  let res = ''
  function f(routers, originPath) {
    for (let index = 0; index < routers.length; index++) {
      const item = routers[index]
      const itemPath = parsePath(item.path)
      if (typeof res === 'object') {
        return res
      }
      if (itemPath === originPath) {
        res = item
        return res
      }
      if (item.children) {
        f(item.children, originPath)
      }
    }
  }
  f(routers, originPath)
  return res
}

/**
 * @description 生成面包屑
 * @param {array} params
 */
export const generateRouter = (params, routers) => {
  const length = params.length
  const breadcrumb = []
  for (let index = length; index > 0; index--) {
    const temp = params.slice(0, index)
    const path = temp.reduce((pre, cur) => {
      return pre + '/' + cur
    })
    breadcrumb.push({ path: '/' + path })
  }
  const res = breadcrumb.map(item => {
    const name = item.path.slice(item.path.lastIndexOf('/') + 1)
    return { ...item, name }
  })
  // 根据配置查询配置项
  const reverse = res.reverse().map(item => {
    const { icon, hidden, noBreadcrumb, redirect, name } = findPath(
      routers,
      item.path
    )
    return { ...item, icon, hidden, noBreadcrumb, redirect, name }
  })
  // 过滤面包屑
  const filterData = reverse.filter(item => !item.noBreadcrumb)
  return filterData
}

//  解决服务端获取cookie和用js-cookie 获取cookie导致的字符编码问题
function decode(s) {
  return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
}
/**
 * 解析服务端拿到的cookie
 * @param {*} cookie
 * @param {*} key
 */
export function getCookie(cookie, key) {
  if (!cookie) return
  const arrstr = cookie.split('; ')
  for (let i = 0; i < arrstr.length; i++) {
    const temp = arrstr[i].split('=')
    if (temp[0] === key) return decode(temp[1])
  }
}

// n月前
export function getDateRange(n = 1, type = 'month') {
  const now = moment()
  const start = n > 0 ? moment().subtract(n, type) : now
  return [parseDate(start, 'YYYY-MM-DD'), parseDate(now, 'YYYY-MM-DD')]
}

// n天前
export function getDateList(n = 30, type = 'day') {
  let range = []
  if (n > 0) {
    range = [...new Array(n + 1)]
      .map((item, index) =>
        parseDate(moment().subtract(index, type), 'YYYY-MM-DD')
      )
      .reverse()
  }
  return range
}
// n天前
export function toFixed(n) {

  let num = Number(n)&&Number(n).toFixed(4)||'--'
  console.log('num',num)
  return num 
}


// 2020-06-27T14:20:27.000000Z 时间格式转换成 2020-06-27 14:20:27
export const formatRTime = parseTime

// 判断日期是非法的
export function isInvalidDate(date) {
  return date instanceof Date && isNaN(date.getTime())
}

export function  copy(content, $message) {
  // 创建输入框元素
  const input = document.createElement('input');//不会保留文本格式
  //如果要保留文本格式，比如保留换行符，或者多行文本，可以使用  textarea 标签，再配和模板字符串 ` `
  //const input = document.createElement('textarea')
  // 将想要复制的值
  input.value = content;
  // 页面底部追加输入框
  document.body.appendChild(input);
  // 选中输入框
  input.select();
  // 执行浏览器复制命令
  document.execCommand('Copy');
  // 弹出复制成功信息
  Message.closeAll()
  Message.success('复制成功'+content);

 
  // 复制后移除输入框
  input.remove();
}
// http  to https
export function http2https(str) {
  if (!str || typeof str !== 'string') return str
  if (str.startsWith('https')) return str
  return str.replace('http', 'https')
}

// 校验链接地址
export function validateRegexUrl(url) {
  const regex = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  )
  return regex.test(url)
}

// 自定义Date工厂函数
export function DATE(val) {
  this.getTime = () => moment(val || new Date()).valueOf()
  if (!val) return new Date()
  return moment(val).toDate()
}

// 检验电话
export const verifyPhone = phone => {
  const reg = /^1(3[0-9]|4[0-1,4-9]|5[0-3,5-9]|6[2567]|7[0-8]|8[0-9]|9[0-3,5-9])\d{8}$/
  return reg.test(phone)
}

// 检验固定电话
export const verifyLocalPhone = localPhone => {
  const reg = /^\d{3}-\d{7,8}|\d{4}-\d{7,8}$/
  return reg.test(localPhone)
}
// 检验邮箱
export const verifyEmail = mail => {
  const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
  return reg.test(mail)
}

export const keyOpt = {
   liumsg:{
      time:"时间",
      memo:"备注",
      money:"收益",
      hashid:"哈希"
    },
    dayMsg:{
      timedate:'日期',
      money:'收益',
      total:'总额',
      // id:'id',
    },
    msg:{
      "time": 1699288139 ,
      "higt": "4482907",
      "num": "1.89521093173600000000", 
      "id": 85,
      "hash": "293981e9875dcd2608a5979f50cbfbdf4a63b1cf30e89421ee53d5809de5e6e9", 
    
        // "state": 1, 
    },
    list:{
      id: 1,name: "测试矿池",type: 0,user: "ghostoooo1",
      addr: "https://pool.space/account/ghostoooo1",

   }
}

export const tableConfig  = tableConfigs
// 检验邮箱
export const opt = {
  
  bili: "比例",
  id:'id',
  kou: "手续费",
  money : "资产",
  name : "名称",
  plot  : "资产",
  iconme :'收益',
  total:"总额",
    day:'日期',
  wxid:"wxid",
  user:'账号',
  addr:"地址",
  type:"类型",
  hash:"hash",
  hashid:"HashId",
  memo:"备注",
  // state :"资产",
  higt:"最高",
  num:'数量',
  time:"时间",
  type:"类型",
  kid:'kid',

  // return reg
}

// 检验邮箱
export const typeOpt = keys => {
  const reg = {bili: "比例",
  0:"--",
  1:"--"

}
  return reg
}
