// miniprogram/pages/add-note/add-note.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    showExperience: false,
    book: {
      title: '快捷笔记'
    }
  },

  onLoad(options) {
    if (options.book) {
      this.setData({
        book: JSON.parse(options.book)
      })
    }
  },

  triggerExperience() {
    this.setData({
      showExperience: !this.data.showExperience
    })
  }
})
