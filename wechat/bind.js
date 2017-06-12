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

    students: ['01 龚哲敏', '02 龚芷墨', '03 龚皓玉', '04 黄可欣', '05 蒋兴悦', '06 柯杨', '07 黎柯艺', '09 孙艺鸣', '10 谭馨月', '11 张国铃', '41 田智康'],
    studentIndex: 0,

    guardians: ['妈妈', '爸爸', '爷爷', '奶奶','外公','外婆','阿姨(及其他监护人)'],
    guardianIndex: 0,


    date: '2016-09-01',
    time: '12:01'
  },

  onBind: function(e) {
    app.login( data.studentIndex, data.guardianIndex );
    wx.redirectTo({ "url":"enroll" });
  },

  bindStudentChange: function (e) {
    this.setData({
      studentIndex: e.detail.value
    })
  },

  bindGuardianChange: function(e) {
    this.setData({
      guardianIndex: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      
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