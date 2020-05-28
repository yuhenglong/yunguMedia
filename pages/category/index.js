// 引入接口配置文件urlconfig
const interfaces = require('../../utils/urlconfig.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    navLeftItems: [],
    curIndex: 0,
    cityTitle:'广州云股',
    pointLocation:[{image:'https://www.longjinph.com/test/wx/zgs/guangzhou/1.png',title:'富力海珠城'},{image:'https://www.longjinph.com/test/wx/zgs/guangzhou/2.png',title:'海印又一城'},{image:'https://www.longjinph.com/test/wx/zgs/guangzhou/3.png',title:'五号停机坪'},{image:'https://www.longjinph.com/test/wx/zgs/guangzhou/4.png',title:'万科里'}],
    szTitle:"深圳云股",
    SZpoint:[{image:'https://www.longjinph.com/test/wx/zgs/shenzhen/1.png',title:'奥卡美广场'},{image:'https://www.longjinph.com/test/wx/zgs/shenzhen/2.png',title:'星城购物中心'},{image:'https://www.longjinph.com/test/wx/zgs/shenzhen/3.png',title:'悦方广场'},{image:'https://www.longjinph.com/test/wx/zgs/shenzhen/4.png',title:'资信广场'}],
    cdTitle:"成都云股",
    CDpoint:[{image:'https://www.longjinph.com/test/wx/zgs/chengdu/1.png',title:'蓝光·东方天地'},{image:'https://www.longjinph.com/test/wx/zgs/chengdu/2.png',title:'融创Nano'},{image:'https://www.longjinph.com/test/wx/zgs/chengdu/3.png',title:'上古天地'},{image:'https://www.longjinph.com/test/wx/zgs/chengdu/4.png',title:'同森金棕榈'}],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const self = this;
    wx.showLoading({
      title: '加载中...',
    })
    wx.request({
      url: interfaces.getCompanyData,
      header: {
        'content-type': 'application/json' // 默认值，返回的数据设置为json数组格式
      },
      success(res) {
        self.setData({
          navLeftItems: res.data[0].list
          // navRightItems: res.data.navRightItems
        })
        wx.hideLoading()
      }
    })
  },
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