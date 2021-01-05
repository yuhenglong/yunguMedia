// pages/delPlcaeInfo/index.js
// 引入接口配置文件urlconfig
const interfaces = require('../../utils/urlconfig.js');
//引入本地json文件
const CDdata = require("../../utils/CDdata.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    district: "",
    info: "",
    population: "",
    equip: "",
    placeImg: "/image/yunguPG.png",
    specification: "",
    sort: "",
    area: "",
    content: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("传参" + options.navId);
    const navId = options.navId;
    wx.showLoading({
      title: "加载中..."
    });
    console.log(CDdata.CDdata[navId])
    const obj = CDdata.CDdata[navId];
    this.setData({
      district: obj.placeInfo.district,
      info: obj.placeInfo.info,
      population: obj.placeInfo.population,
      equip: obj.placeInfo.equip,
      specification: obj.placeInfo.specification,
      sort: obj.placeInfo.sort,
      area: obj.placeInfo.area,
      content: obj.label.content
    })
    wx.hideLoading()
    // wx.request({
    //   url: interfaces.getCdPlaceInfo,
    //   header: {
    //     'content-type': 'application/json' // 默认值，返回的数据设置为json数组格式
    //   },
    //   success(res) {
    //     if (res.data.code === 0) {
    //       console.log(res.data.data[navId])
    //       const obj = res.data.data[navId];
    //       self.setData({
    //         district: obj.placeInfo.district,
    //         info: obj.placeInfo.info,
    //         population: obj.placeInfo.population,
    //         equip: obj.placeInfo.equip,
    //         specification: obj.placeInfo.specification,
    //         sort: obj.placeInfo.sort,
    //         area: obj.placeInfo.area,
    //         content: obj.label.content
    //       })
    //       wx.hideLoading()
    //     }

    //   }
    // })
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