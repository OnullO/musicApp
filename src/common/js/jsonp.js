import originJsonp from 'jsonp'

// 自己封装的       参数：url:请求地址   data：url的参数   option
export default function jsonp(url, data, option) {
  // 为了原生jsonp的需求，把参数拼接到url上  如果url本身带有参数就用&如果没有就用？连接
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

  return new Promise((resolve, reject) => {
    // 原生的    url地址是完整带参数的   option是原生的选项   第三个参数是回调（成功，失败）
    originJsonp(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

// 把自己封装时候传的url参数拼接到原生的url上  补全？&等连接符号提供给上面使用
export function param(data) {
  let url = ''
  for (var k in data) {
    // 如果是undefined就给空
    let value = data[k] !== undefined ? data[k] : ''
    // 将所有参数拼接
    url += '&' + k + '=' + encodeURIComponent(value)
  }
  // 因为是拼接到url地址后面，需要把第一个&连接符号删掉
  return url ? url.substring(1) : ''
}
