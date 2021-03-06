// pages/home/index.js
// 引入接口配置文件urlconfig
const interfaces = require('../../utils/urlconfig.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    logos:[
    {image: "/image/yungu.png", title: "云股传媒",page:"about"},
    {image: "/image/3D.png", title: "裸眼3D",page:"luoyan"},
    {image: "/image/eyeSight.png", title: "视力纠正",page:'eyeSight'},
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
    show:false,
    name:'',
    phone:'',
    message:''
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
  },
  checkPhone(e){
    let phone = e.detail.value;
    let regPho = /^1[34578]\d{9}$/;
    console.log(phone);
    if(!phone){
      wx.showModal({
        title: '提示',
        content: '请输入手机号',
        showCancel: false,
      })
    }else if(!regPho.test(phone)){
      wx.showModal({
        title: '提示',
        content: '请填写正确手机号',
        showCancel: false,
      })
    }else{
      this.setData({
        phone:phone
      })
    }
  },
  checkName(e){
    let name = e.detail.value;
    if(!name){
      wx.showModal({
        title: '提示',
        content: '请输入姓名',
        showCancel: false,
      })
    }else{
      this.setData({
        name:name
      })
    }
  },
  getInput(e){
    let that = this;
    that.setData({
      message:e.detail.value
    })
  },
  connectUs(){
    if(this.data.name && this.data.phone){
      // console.log(this.data.name);
      // console.log(this.data.phone);
      // console.log(this.data.province);
      // console.log(this.data.city);
      // console.log(this.data.area);
      // console.log(this.data.message);
      const self = this;
      const sendData = {
        username : this.data.name,
        phone : this.data.phone,
        adress : this.data.province + this.data.city + this.data.area,
        message : this.data.message,
      };
      wx.request({
        url: interfaces.sendEmail,
        method: "POST",
        data: sendData,
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        success:function(res){
          if(res.statusCode ==200){
            wx.showModal({
              title: '提示',
              content: '提交成功，稍后将有专员为您来电!',
              showCancel: false,
            });
            self.setData({
              name:'',
              phone:'',
              province:'',
              city:'',
              area:'',
              message:''
            })
          }else{
            wx.showModal({
              title: '提示',
              content: '信息提交失败，请再试！',
              showCancel: false,
            });
          }
        }
      })
      
    }else{
      wx.showModal({
        title: '提示',
        content: '请输入必填信息',
        showCancel: false,
      })
    }
  }
})