// components/navbar/navbar.js
const App = getApp()

Component({
  options: {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
    addGlobalClass: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    defaultType: {
      type: Boolean,
      value: true
    },
    bgColor: {
      type: String,
      value: 'white'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    navHeight: App.globalData.navHeight,
    statusBarHeight: App.globalData.statusBarHeight,
    navMainHeight: App.globalData.navMainHeight,
    navTop: App.globalData.navTop,
    customWidth: App.globalData.customWidth,
    customHeight: App.globalData.customHeight,
    customLeft: App.globalData.customLeft
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
