// pages/me/me.js
Page({
  data: {
    tab: 'tomato',
    lists: {
      "本周四": [
        { time: "14:00", text: "包含开发看法", id: 1 },
        { time: "14:00", text: "包含开发看法", id: 2 },
        { time: "14:00", text: "包含开发看法", id: 3 }
      ],
      "本周五":[
        { time: "14:00", text: "包含开发看法", id: 1 }
      ]
    }
  },
  onShow: function () {

  },
  changeTab(event) { //tab切换红条
    // console.log(event)
    let name = event.currentTarget.dataset.name
    // console.log(name)
    this.setData({ tab: name })
  }
})