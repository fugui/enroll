// enroll.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      globalData : {},
      backHome: "17:10",
      records : []
  },

  toBind: function(e) {
    wx.navigateTo({
      url: '/bind',
    })
  },

  onEnroll : function(e) {
    console.log( 'on enroll' )
    wx.request({
      url: 'https://95858511.qcloud.la/enrolles/backhome/items',
      method: 'POST',
      data : {
        school: 'School Name',
        banji:  'Middle(3)',
        student: '01 Xijinpin',
        backtime: '17:20',
        applyby : '01 Mother'
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var d = new Date();
    this.setData( {
      globalData : getApp().globalData,
      backHome: d.getHours() + ":" + d.getMinutes()
    });
    
    wx.request({
      url: 'https://95858511.qcloud.la/enrolles/backhome/items?date=' + getApp().today(),
      method: 'GET',
      success: function (res) {
         that.setData( {
           
           records: res.data})
          console.log(that.data.records[0])
      }

    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})