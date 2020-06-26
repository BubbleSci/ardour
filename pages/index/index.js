//index.js
//获取应用实例
const app = getApp()
var aprise, bprise, dprise

Page({
  data:{
      focous:false,
      inputValue:''
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value,
    })
    console.log(e)
    switch(e.currentTarget.dataset.type){
      case "1": 
        aprise = e.detail.value*2
        console.log(aprise)
        break
      case "2":
        bprise = e.detail.value*5
        console.log(bprise)
        break
      case "3":
        dprise = e.detail.value*10
        console.log(dprise)
        break
    }
  },
  tapLogin:function(){
    wx.navigateTo({
      url: '/pages/logs/logs',
      
    })
  }
  }
  // getNum:function(){
  // var total = aprise +bprise +dprise ;
  // console.log (total);
  // }
  // }
      )