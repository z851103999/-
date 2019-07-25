Page({

    data: {
        defalutSecond: 1500,    //默认秒数 25分钟*60秒
        time: "",     //渲染的字符串
        timer: null,    //定时器数字
        timerStatus: 'stop',
        confirmVisible: false,
        againButtonVisible: false, //再来一组默认false
        finishConfirmVisible: false//弹窗默认隐藏
    },

    onShow: function () {
        this.startTimer()
    },

    startTimer() {
        this.setData({ timerStatus: 'start' })
        this.changeTime()
        this.timer = setInterval(() => {
            this.data.defalutSecond = this.data.defalutSecond - 1;     //每过一秒减去一
            this.changeTime();     //调用方法输出字符串
            if (this.data.defalutSecond <= 0) {     //如果等于00:00清除定时器
                this.setData({ againButtonVisible: true })//如果时间等于0触发再来一组
                this.setData({ finishConfirmVisible: true })//时间结束出弹框
                return this.clearTimer()
            }
        }, 1000)
    },

    clearTimer() {     //清除定时器
        clearInterval(this.timer)
        this.data.timer = null
        this.setData({ timerStatus: 'stop' })
    },

    changeTime() { //输出时间模块
        let m = Math.floor(this.data.defalutSecond / 60);
        let s = Math.floor(this.data.defalutSecond % 60);
        if (s === 0) {
            s = '00';
        }
        if ((s + "").length === 1) {
            s = "0" + s
        }
        if ((m + "").length === 1) {
            m = "0" + m
        }
        this.setData({ time: `${m}:${s}` });
    },
    showConfirm() { //放弃弹框
        this.setData({ confirmVisible: true })
        this.clearTimer()//暂停时间
    },
    hideConfirm() { //放弃弹框
        this.setData({ confirmVisible: false })
    },
    againTimer() { //放弃按钮
        this.data.defalutSecond = 1500
        console.log(this.data.defalutSecond)
        this.setData({ againButtonVisible: false })
        this.startTimer()
    },
    confirmAbandon(event){
        let content = event.detail
        wx.navigateBack({
            to: -1
        });
    },
    confirmFinish(event) {
         let content = event.detail
    },
    confirmCancel() {
        this.setData({finishConfirmVisible: false})
    }

});

