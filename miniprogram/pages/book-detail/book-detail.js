// miniprogram/pages/book-detail/book-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    book: {},
    notes: [],
    orderBy: 'position',
    empty: true
  },

  onLoad: function (options) {
    this.setData({
      book: JSON.parse(options.book)
    })
    this.getNotes()
  },

  onShow() {
    this.getNotes()
  },

  getNotes() {
    wx.showLoading({
      title: '加载中~',
    })
    const db = wx.cloud.database()
    const collection = db.collection('notes')
    collection.where({
      book_title: this.data.book.title
    }).orderBy(this.data.orderBy, 'esc').get().then(res => {
      console
      wx.hideLoading()
      this.setData({
        notes: res.data,
        empty: res.data.length
      })
    })
  },

  switchOrder(e) {
    // 切换排序方式
    this.setData({
      orderBy: e.target.dataset.order
    })
    this.getNotes()
  }
})