// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const db = cloud.database()
  const collection = db.collection('bookshelf')
  const _ = db.command
  const data = await collection
    .where(
      _.or([
        {
          author_name: '知了笔记团队'
        },
        {
          _openid: wxContext.OPENID
        }
      ])
    )
    .get()
    return {
      code: 2000,
      msg: 'ok',
      data: data.data
    }
}