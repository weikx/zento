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
    }
  },

  data: {

  },

  methods: {
    closeDialog() {
      this.setData({
        show: false
      })
    }
  }
})
