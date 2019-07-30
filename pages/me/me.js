// pages/me/me.js
const { http } = require('../../lib/http')
Page({
  data: {
    tab: 'tomato',
    tomaoto: {},
    todos: {},
    me:{}
  },
  onShow: function () {
    this.fetchTomatoes()
    this.fetchTodos()
    this.setData({me:wx.getStorageSync('me')})
  },
  fetchTomatoes() {
    http.get('/tomatoes', { is_group: "yes" })
      .then(response => {
        this.setData({ tomatoes: response.data.resources })
      })
  },
  fetchTodos() {
    http.get('/todos', { is_group: "yes" })
      .then(response => {
        this.setData({ todos: response.data.resources })
      })
  },
  changeTab(event) { //tab切换红条
    // console.log(event)
    let name = event.currentTarget.dataset.name
    // console.log(name)
    this.setData({ tab: name })
  }
})