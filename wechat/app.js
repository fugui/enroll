App({
  globalData: {
    studentIndex: -1,
    guardianIndex: -1,
    hasLogin: false
  },
  
  onLaunch: function () {
    var storageData = wx.getStorageSync("studentIndex");
    var s2 = wx.getStorageSync( "guardianIndex" );

    if (storageData === "" || s2==="") {
      
        globalData.studentIndex= -1;
        globalData.guardianIndex = -1;
        globalData.hasLogin =false;
   
    }
    else {
      globalData.studentIndex = storageData;
      globalData.hasLogin = true;
    }
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },


  login: function (sIdx, gIdx) {
    wx.setStorageSync("studentIndex", sIdx);
    wx.setStorageSync("guardianIndex", gIdx);
    globalData.hasLogin = true;
    globalData.studentIndex = sIdx;
    globalData.guardianIndex = gIdx;
  }
});