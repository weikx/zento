// miniprogram/pages/add-note/add-note.js
import database from '../../utils/wx_database'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    showExperience: false,
    experience: '',
    note: '',
    position: null,
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
  },

  publish() {
    database.add('notes', {
      book_title: this.data.book.title,
      note: this.data.note,
      experience: this.data.experience,
      position: this.data.position,
      date: new Date()
    }).then(res => {
      wx.showToast({
        title: '添加成功~',
        icon: 'none'
      })
    })
  }
})
