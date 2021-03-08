// miniprogram/pages/home.js
import callFunc from '../../utils/call_func'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: false,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    showDialog: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  WeChatOpenCommunity() {
    wx.showModal({
      title: 'Dear Developer',
      content: 'Happy new year'
    })
  },

  onReady: function () {
    // this.WeChatOpenCommunity()
  },

  onShow() {
    this.getTabBar().setData({
      selected: 0
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},

  scroll(e) {
    console.log(e)
  },
  change(e) {
    console.log(e)
    // wx.vibrateShort({
    //   type: 'heavy'
    // })
  },
  transition(e) {
    // console.log(e)
  },
  onShowDialog() {
    callFunc({
      callName: 'douban'
    }).then(res => {
      console.log(res)
    })
  },
  onDialogClose(e) {
    console.log(e)
  }
})
