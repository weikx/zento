// miniprogram/pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    totalNotes: 0
  },

  onShow () {
    this.getTabBar().setData({
      selected: 2
    })
    this.getData()
  },

  getData () {
    const db = wx.cloud.database()
    const collection = db.collection('notes')
    collection.count().then(res => {
      this.setData({
        totalNotes: res.total
      })
    })
  }

})