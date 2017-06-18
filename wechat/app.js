App({
  globalData: {
    students: ['01 龚哲敏', '02 龚芷墨', '03 龚皓玉', '04 黄可欣', '05 蒋兴悦', '06 柯杨', '07 黎柯艺', '09 孙艺鸣', '10 谭馨月', '11 张国铃', '41 田智康'],

    guardians: ['妈妈', '爸爸', '爷爷', '奶奶', '外公', '外婆', '阿姨(及其他监护人)'],


    studentIndex: -1,
    guardianIndex: -1,
    hasLogin: false
  },

  onLaunch: function () {
    var storageData = wx.getStorageSync("studentIndex");
    var s2 = wx.getStorageSync( "guardianIndex" );

    if (storageData === "" || s2==="") {
      
        this.globalData.studentIndex= -1;
        this.globalData.guardianIndex = -1;
        this.globalData.hasLogin =false;
    }
    else {
      this.globalData.studentIndex = storageData;
      this.globalData.guardianIndex = s2;
      this.globalData.hasLogin = true;
    }
    console.log('App Launched' + this.globalData.studentIndex + '  ' + this.globalData.guardianIndex );
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },


  getStrDate: function (today) {
    
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd
    }

    if (mm < 10) {
      mm = '0' + mm
    }
    return yyyy + '-' + mm + '-' + dd;
  },

  getStudent : function() {
    if ( this.globalData.studentIndex >= 0 
      && this.globalData.studentIndex < this.globalData.students.length ) {
        return this.globalData.students[this.globalData.studentIndex]
      }
      return null
  },

  login: function (sIdx, gIdx) {
    this.globalData.studentIndex = sIdx;
    this.globalData.guardianIndex = gIdx;
    wx.setStorageSync("studentIndex", this.globalData.studentIndex);
    wx.setStorageSync("guardianIndex", this.globalData.guardianIndex);
    this.globalData.hasLogin = true;
    console.log('Customer logined, the sId:' + this.globalData.studentIndex + '  ' + this.globalData.guardianIndex);
  }
});