// pages/category/index.js
// 引入接口配置文件urlconfig
// const interfaces = require('../../utils/urlconfig.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navLeftItems: ['云股总部','广州云股','成都云股','深圳云股','中山云股','泸州云股','武汉云股','江门云股','天门公司'],
    curIndex: 0,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  // onLoad: function (options) {
  //   const self = this
  //   wx.showLoading({
  //     title: '加载中...',
  //   })
  //   wx.request({
  //     url: interfaces.productions,
  //     header: {
  //       'content-type': 'application/json' // 默认值，返回的数据设置为json数组格式
  //     },
  //     success(res) {
  //       self.setData({
  //         navLeftItems: res.data.navLeftItems,
  //         navRightItems: res.data.navRightItems
  //       })
  //       wx.hideLoading()
  //     }
  //   })
  // },
  /*
  * 记录左侧点击的按钮下标 
  */
  switchRightTab(e) {
    let index = parseInt(e.currentTarget.dataset.index);
    this.setData({
      curIndex: index
    })
  },
})