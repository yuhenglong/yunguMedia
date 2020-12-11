// pages/me/index.js
//获取应用实例
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    loginOut:false,
    showaddress:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
        loginOut:true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
          loginOut:true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true,
            loginOut:true
          })
        }
      })
    }
  },
  // 获取用户信息
  getUserInfo(e){
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
      loginOut:true
    })
  },
  // 退出用户登录
  loginOut(){
    app.globalData.userInfo = null;
    this.setData({
      loginOut:false
    })
    wx.reLaunch({url:"/pages/me/index"})
  },
  getScancode(){
    wx.scanCode({
      onlyFromCamera: true,
      success(res) {
        console.log("scan", res)
        var result = res.result
        console.log('sssssssssss', result)
        wx.setStorageSync('scan', result)
        //注意，此处如果不用缓存带链接去界面，可能会发生链接无法带参的情况。
        wx.navigateTo({
          url: '/pages/scanUrl/index?result=' + result,
        })
      },
      complete(res) {
        console.log("complete", res)
      }
    })
  },
  // 折叠面板
  showAddress(){
    if(this.data.showaddress){
      this.setData({
        showaddress:false
      })
    }else{
      this.setData({
        showaddress:true
      })
    }
  },
  //获取地理位置
  getAdress(){
    
  },
  // 页面跳转
  linkTo(){
    wx.navigateTo({
      url: '/pages/BMap/index',
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
    return {
      title:"欢迎分享-云股传媒",
      path:"/pages/home/index"
    }
  }
})