Component({
    properties:{
        placeholder:{//输入框的文字，我完成了什么
            type:String,
            value:""
        }, 
        visible:{//显示输入框默认不显示
            type:Boolean,
            value:false
        },
        value:{
           type:String,
           value:""
        } 
    },
    data:{
        _value:""
    },
    methods: {
        confirm(){
            this.triggerEvent('confirm', this.data._value)
          },
          cancel(){
            this.triggerEvent('cancel', this.data._value)
          },
          watchValue(event){
            this.data._value = event.detail.value
          }
    }

})