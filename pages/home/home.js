// pages/home/home.js
Page({

  data: {
    lists: [
      { id: 1, text: "今天干了什么，明天干什么，后天干了什么", finished: true },
      { id: 2, text: "今天干了什么，明天干什么，后天干了什么", finished: true }
    ],
    visibleConfirm: false//输入框默认false
  },
  confirm(event) {

  },
  confirmCreate(event) {//创建任务
    let content = event.detail//获取输入内容
    // console.log(content)
    if (content) {
      let todo = [{ id: this.data.lists.length + 1, text: content, finished: false }]//获取TODO假数据
      // console.log(todo)
      this.data.lists = todo.concat(this.data.lists)//合并数据
      // console.log(this.data.lists)
      this.setData({ lists: this.data.lists })
      this.hideConfirm()
    }
  },
  destroyTodo(event) {
    // console.log(event)
    let index = event.currentTarget.dataset.index//获取列表内容第几项
    // console.log(index)
    this.data.lists[index].finished = true
    this.setData({ lists: this.data.lists })
  },
  hideConfirm() {//确定隐藏窗口
    this.setData({ visibleConfirm: false })
  },
  showConfirm() {//显示窗口
    this.setData({ visibleConfirm: true })
  }
})