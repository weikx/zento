//app.js
App({
  globalData: {},
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      })
    }

    // 参考 https://www.cnblogs.com/sese/p/9761713.html
    const menuButtonObject = wx.getMenuButtonBoundingClientRect()
    const systemInfo = wx.getSystemInfoSync()
    const statusBarHeight = systemInfo.statusBarHeight,
    navTop = menuButtonObject.top,
    windowHeight = systemInfo.windowHeight,
    navHeight = statusBarHeight + menuButtonObject.height + (menuButtonObject.top - statusBarHeight) * 2,
    navMainHeight = navHeight - statusBarHeight,
    customWidth = menuButtonObject.width,
    customHeight = menuButtonObject.height,
    customLeft = systemInfo.windowWidth -  menuButtonObject.right
    this.globalData = {
      navHeight,
      navTop,
      windowHeight,
      statusBarHeight,
      navMainHeight,
      customWidth,
      customHeight,
      customLeft
    }
    console.log(systemInfo, menuButtonObject)
  }
})
