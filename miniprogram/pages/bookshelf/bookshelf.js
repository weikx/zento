// miniprogram/pages/bookshelf/bookshelf.js
const App = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkedTab: 0,
    refresherTriggered: false,
    scrollViewHeight: App.globalData.windowHeight - App.globalData.navHeight - 65 - 55, // 55 = 输入框高度
    inputDisTop: App.globalData.navHeight,
    booksList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getBooks()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {
    this.getTabBar().setData({
      selected: 1
    })
    this.getBooks()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  toBookDetail(e) {
    console.log(e)
    wx.navigateTo({
      url: `/pages/book-detail/book-detail?book=${JSON.stringify(e.currentTarget.dataset.book)}`
    })
  },

  switchTab(e) {
    this.setData({
      checkedTab: e.target.dataset.index
    })
  },

  refresh(e) {
    wx.vibrateShort({
      type: 'heavy'
    })
    setTimeout(() => {
      this.getBooks()
    }, 1000)
  },

  getBooks() {
    const db = wx.cloud.database()
    const collection = db.collection('bookshelf')
    collection.where({
      _openid: '{openid}'
    }).get().then(res => {
      this.setData({
        booksList: res.data,
        refresherTriggered: false
      })
    })
  }
})