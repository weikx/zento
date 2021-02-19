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
    booksList: App.globalData.booksList
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

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {
    console.log(this.data.scrollViewHeight)

    this.getTabBar().setData({
      selected: 1
    })
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
      this.setData({
        refresherTriggered: false
      })
    }, 1000)
  }
})