// bind.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    schools: ['深圳外国语初中部'],
    schoolIndex : 0,

    classes: ['初二（3）班'],
    classIndex: 0,

    globalData: {},

    sIdx : -1,
    gIdx : -1
  },

  onBind: function(e) {
    app.login( this.data.sIdx, this.data.gIdx );
    wx.redirectTo({ "url":"enroll" });
  },

  bindStudentChange: function (e) {
    this.setData ({
      sIdx: e.detail.value
    });    
  },

  bindGuardianChange: function(e) {
    this.setData ( {
      gIdx: e.detail.value
    });  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      globalData: getApp().globalData
    });
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