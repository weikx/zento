// 云函数入口文件
const cloud = require('wx-server-sdk')
const axios = require('axios')
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  let data = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
  console.log(data)
  return {
    data
  }
}