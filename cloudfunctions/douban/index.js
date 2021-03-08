// 云函数入口文件
const cloud = require('wx-server-sdk')
const rp = require('request-promise')
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    const query = encodeURIComponent(event.query),
          url = `https://book.douban.com/j/subject_suggest?q=${query}`,
          res = await rp(url)
    return {
      code: 2000,
      msg: 'ok',
      data: JSON.parse(res)
    }
  } catch (err) {
    return {
      code: 5001,
      msg: 'server_request_error'
    }
  }
}