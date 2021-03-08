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
        traceUser: true
      })
    }

    // 参考 https://www.cnblogs.com/sese/p/9761713.html
    const menuButtonObject = wx.getMenuButtonBoundingClientRect()
    const systemInfo = wx.getSystemInfoSync()
    const statusBarHeight = systemInfo.statusBarHeight,
      navTop = menuButtonObject.top,
      windowHeight = systemInfo.screenHeight,
      navHeight =
        statusBarHeight +
        menuButtonObject.height +
        (menuButtonObject.top - statusBarHeight) * 2,
      navMainHeight = navHeight - statusBarHeight,
      customWidth = menuButtonObject.width,
      customHeight = menuButtonObject.height,
      customLeft = systemInfo.windowWidth - menuButtonObject.right
    this.globalData = {
      navHeight,
      navTop,
      windowHeight,
      statusBarHeight,
      navMainHeight,
      customWidth,
      customHeight,
      customLeft,
      booksList: [
        {
          name: '怪诞故事集',
          author: '[美]奥加尔·托卡尔丘克',
          image:
            'https://img3.doubanio.com/view/subject/s/public/s33663520.jpg',
          year: '1982'
        },
        {
          name: '房思琪的初恋乐园',
          author: '房思琪',
          image:
            'https://img3.doubanio.com/view/subject/s/public/s29651121.jpg',
          year: '2017'
        },
        {
          name: '解忧杂货铺',
          author: '东野圭吾',
          image:
            'https://img3.doubanio.com/view/subject/s/public/s27264181.jpg',
          year: '2014'
        },
        {
          name: '平凡的世界',
          author: '作者',
          image: 'https://img3.doubanio.com/view/subject/s/public/s1144911.jpg',
          year: '2009'
        }
      ]
    }
    console.log(systemInfo, menuButtonObject)
  }
})
