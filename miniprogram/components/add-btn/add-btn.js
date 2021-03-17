// components/add-btn/add-btn.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    book: {
      type: Object,
      default: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    toAddNote() {
      wx.navigateTo({
        url: `/pages/add-note/add-note?book=${JSON.stringify(this.data.book)}`
      })
    }
  }
})
