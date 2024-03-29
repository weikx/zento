class Database {
  // 封装简化小程序数据库方法
  add(collectionName, data) {
    data = {
      ...data,
      create_date: +new Date()
    }
    const db = wx.cloud.database()
    const collection = db.collection(collectionName)
    return new Promise((resolve, reject) => {
      collection
        .add({
          data
        })
        .then(resolve)
        .catch(err => {
          console.log(err, 'err')
          wx.showToast({
            title: '出了点问题~',
            icon: 'error'
          })
          reject(err)
        })
    })
  }
}

export default new Database()
