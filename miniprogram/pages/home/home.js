// miniprogram/pages/home.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  WeChatOpenCommunity () {
    wx.showModal({
      title: 'Dear Developer',
      content: 'Happy new year'
    })
  },

  onReady: function () {
    // this.WeChatOpenCommunity()
  },

  onShow () {
    this.getTabBar().setData({
      selected: 0
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

  scroll(e) {
    console.log(e)
  }
})