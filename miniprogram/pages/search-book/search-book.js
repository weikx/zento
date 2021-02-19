// pages/search-book/search-book.js
const App = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    refresherTriggered: false, // 停止刷新标志
    scrollViewHeight: App.globalData.windowHeight - App.globalData.navHeight - 65 - 55,
    booksList: App.globalData.booksList,
    keyboardHeight: 0
  },

  onReady() {
    this.onKeyboardHeightChange()
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
  },

  onKeyboardHeightChange() {
    wx.onKeyboardHeightChange(res => {
      this.setData({
        keyboardHeight: res.height
      })
    })
  },

  scanCode() {
    wx.scanCode({
      scanType: ['barCode'],
      success (res) {
        console.log(res.result)
      }
    })
  }
})