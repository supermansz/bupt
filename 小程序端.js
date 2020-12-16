Page({
  data: 
  {
    input: "8",//输入框无数据时keycode为8，方便重置
    output: "-1",//初始值判断
    output2:"-1",
    input1:"",
  },

  tab: function (e)//先将输入框数据传至data .input
  {
    var data = e.detail.keyCode //获取输入框内数据
    this.setData
    ({
      input1: data,
    })
      console.log(e)
  },

  //页面跳回
  backBtn: function () {
    wx.navigateBack()
  },

  getdata:function(e) 
  {
    var data2=this.data.input1;
    this.setData
    ({
     input: data2,
     })
  //获取data.input1的数据并更新input数据
    var self=this;
    wx.request
    ({

      url: `http://api.heclouds.com/devices/643797646/datastreams?datastream_ids=ssj`,
      header: 
      {
        "api-key": 'bTLHHD43B3gBkLir40q0YCzAaNI=',
        'content-type': 'application/json',
      },
      method:"GET",
      success(res) 
      {
        var name = res.data.data[0].current_value;
        self.setData
        ({
          output: name 
        })
        console.log(res); //请求成功返回数据
      },
    
      fail() { //请求失败
        wx.showToast({
          title: '与服务器通信失败',
          icon: 'fail',
          duration: 2000
        })
      }
    })//请求keycode为97用户在onenet上对应的违规数据

    wx.request({

      url: `http://api.heclouds.com/devices/643797646/datastreams?datastream_ids=dhy`,
      header: {
        "api-key": 'bTLHHD43B3gBkLir40q0YCzAaNI=',
        'content-type': 'application/json',
      },
      method:"GET",
      success(res) 
      {
       var name2 = res.data.data[0].current_value;
        self.setData
        ({
          output2: name2 
        })
         console.log(res); //请求成功返回数据
        
      },
    
      fail() { //请求失败
        wx.showToast({
          title: '与服务器通信失败',
          icon: 'fail',
          duration: 2000
        })
      }
    })//请求keycode为98用户在onenet上对应的违规数据
    console.log(e)
  }

})
