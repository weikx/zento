Component({
  data: {
    selected: 0,
    color: "#868686",
    selectedColor: "#F9B198",
    list: [{
      pagePath: "/pages/home/home",
      iconPath: "./home2.png",
      selectedIconPath: "./home1.png",
      text: "首页"
    }, 
    {
      pagePath: "/pages/bookshelf/bookshelf",
      iconPath: "./bookshelf2.png",
      selectedIconPath: "./bookshelf1.png",
      text: "书架"
    },
    {
      pagePath: "/pages/profile/profile",
      iconPath: "./profile2.png",
      selectedIconPath: "./profile1.png",
      text: "我的"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})