// miniprogram/pages/add-note/add-note.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    showExperience: false
  },

  triggerExperience() {
    this.setData({
      showExperience: !this.data.showExperience
    })
  }
})
