//logs.js
//const util = require('../../utils/util.js')

Page({
  data: {
    sum: 0
    // list: [
    //     {name:'苹果',age: 'aprise'},
    //     {name:'香蕉',age: 'bprise'},
    //     {name:'火龙果',age: 'dprise'}
    //   ]
  },
   onLoad: function (option) {
     console.log(option.total)
     this.setData({
       sum: option.total
     })
    }
  //   this.setData({
  //     logs: (wx.getStorageSync('logs') || []).map(log => {
  //       return util.formatTime(new Date(log))
  //     })
  //   })
  // }
})
