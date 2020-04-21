// pages/home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    logos:[
    {image: "/image/yungu.png", title: "云股传媒",page:"about"},
    {image: "/image/3D.png", title: "裸眼3D",page:"luoyan"},
    {image: "/image/save.png", title: "信息安全",page:'infoSave'},
    {image: "/image/face.png", title: "人脸识别",page:"face"}],
    swipers:[{image: "/image/home_one.jpg"},{image: "/image/home_two.jpg"},{image: "/image/home_thr.jpg"}],
    indicatorDots:true,
    vertical:false,
    autoplay: true,
    interval:3000,
    duration: 500,
    province:'',
    city:'',
    area:'',
    show:false
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

  },
  // 跳转页面
  showPage(e){
    console.log(e);
    let page = e.currentTarget.dataset.page;
    wx.navigateTo({
      url: '/pages/'+ page +'/index',
    })
  },
  // 电话联系
  call(e){
    let info = e.currentTarget.dataset.info;
    let phone;
    if(info == 'business'){
      phone = '4000-499-984';
    }else{
      phone = '020-32547597';
    }
    wx.makePhoneCall({
      phoneNumber: phone,
    })
  },
  scollBottom(){
    wx.createSelectorQuery().select('#home').boundingClientRect(function(rect){
      // 使页面滚动到底部
      wx.pageScrollTo({
        scrollTop: rect.height
      })
    }).exec()
  },
  sureSelectAreaListener:function(e){
    var that = this;
    that.setData({
      show: false,
      province: e.detail.currentTarget.dataset.province,
      city: e.detail.currentTarget.dataset.city,
      area: e.detail.currentTarget.dataset.area
    })
  },
  chooseAddress:function(){
    console.log("xuanzedizhi")
    var that = this;
    that.setData({
      show:true
    })
  }
})