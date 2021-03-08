// 小程序云函数调用代码太啰嗦，封装一下
function callFunc(param) {
  return new Promise((resolve, reject) => {
    wx.cloud
      .callFunction({
        name: param.callName,
        data: param.data || {}
      })
      .then(res => {
        res = res.result
        resolve(res.data)
      })
      .catch(err => {
        reject('error')
      })
  })
}

export default callFunc
