// enroll.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      globalData : {},
      backHome: "17:10",
      records : [],
      student : '',
      applied : false,
      currentDay: '',
      today : '',
      yesterday : ''
  },

  toBind: function(e) {
    wx.navigateTo({
      url: '/bind',
    })
  },

  onEnroll : function(e) {
    var that = this
    console.log( 'on enroll' )
    wx.request({
      url: 'https://95858511.qcloud.la/enrolles/backhome/items',
      method: 'POST',
      data : {
        school: '深圳外国语初中部',
        banji:   '初二(3)班',
        student: this.data.student,
        backtime: this.data.backHome,
        applyby: this.data.globalData.guardians[this.data.globalData.guardianIndex ]        
      },
      success: function (res) {
        that.onLoad(undefined)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var s = getApp().getStudent();
    this.setData({student:s } )

    var d = new Date();
    d.setDate( d.getDate() -1);

    this.setData( {
      globalData: getApp().globalData,

      today : getApp().getStrDate(new Date()),
      currentDay: getApp().getStrDate(new Date()),
      yesterday : getApp().getStrDate(d),

      backHome: d.getHours() + ":" + d.getMinutes()
    });
    
    wx.request({
      url: 'https://95858511.qcloud.la/enrolles/backhome/items?date=' + this.data.today,
      method: 'GET',
      success: function (res) {
         that.setData( {records: res.data})
         that.data.records.forEach( function(item) {
             if (item.student == s )
             {
                that.setData( {applied : true})
             }
         })
      }
    })
  },

  history: function (hdate)
  {
    console.log( hdate )
    var that = this;
    this.setData({
      currentDay : hdate
    })
    wx.request({
      url: 'https://95858511.qcloud.la/enrolles/backhome/items?date=' + hdate,
      method: 'GET',
      success: function (res) {
        that.setData({ records: res.data })
      }
    })
  },

  onPriorDay : function() 
  {
    this.history( this.data.yesterday )
  },

  onToday : function()
  {
    this.history( this.data.today )
  },

  bindTimeChange : function(e)
  {
     this.setData ({
       backHome: e.detail.value
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