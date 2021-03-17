// pages/search-book/search-book.js
import callFunc from '../../utils/call_func'
import database from '../../utils/wx_database'

const App = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    refresherTriggered: false, // 停止刷新标志
    scrollViewHeight:
      App.globalData.windowHeight - App.globalData.navHeight - 65 - 55,
    booksList: [],
    checkedBook: {},
    keyboardHeight: 0,
    dialog: {
      show: false,
      title: '',
      message: ''
    },
    inputValue: ''
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
    wx.showToast({
      title: '功能即将开放',
      icon: 'none'
    })
    return
    wx.scanCode({
      scanType: ['barCode'],
      success(res) {
        console.log(res.result)
      }
    })
  },

  addBook(event) {
    const book = event.currentTarget.dataset.book
    this.setData({
      dialog: {
        show: true,
        title: '将要创建书籍',
        message: book.title
      },
      checkedBook: book
    })
  },

  search() {
    wx.showLoading({
      title: '搜索中~'
    })
    callFunc({
      callName: 'douban',
      data: {
        query: this.data.inputValue
      }
    }).then(res => {
      this.setData({
        booksList: res
      })
      wx.hideLoading()
    })
  },

  comfirm(e) {
    database
      .add('bookshelf', {
        ...this.data.checkedBook
      })
      .then(res => {
        wx.redirectTo({
          url: `/pages/add-note/add-note?book=${JSON.stringify(
            this.data.checkedBook
          )}`
        })
      })
  },

  addCustomerBook() {}
})
