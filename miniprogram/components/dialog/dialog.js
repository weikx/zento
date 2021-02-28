// components/dialog/dialog.js
Component({
  properties: {
    show: {
      type: Boolean,
      default: false
    },
    input: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    }
  },

  data: {
    inputValue: ''
  },

  methods: {
    closeDialog() {
      this.setData({
        show: false,
        inputValue: ''
      })
      this.triggerEvent('cancel', this.data.inputValue)
    },
    comfirmDialog() {
      this.setData({
        show: false,
        inputValue: ''
      })

      this.triggerEvent('comfirm', this.data.inputValue)
    }
  }
})
