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
    whTitle:"武汉云股",
    WHpoint:[{image:'https://www.longjinph.com/test/wx/zgs/wuhan/1.png',title:'福莱中心'},{image:'https://www.longjinph.com/test/wx/zgs/wuhan/2.png',title:'水岸国际'},{image:'https://www.longjinph.com/test/wx/zgs/wuhan/3.png',title:'新世界百货'},{image:'https://www.longjinph.com/test/wx/zgs/wuhan/4.png',title:'印象城'}],
    jmTitle:"江门云股",
    JMpoint:[{image:'https://www.longjinph.com/test/wx/zgs/jiangmen/1.png',title:'奥园写字楼'},{image:'https://www.longjinph.com/test/wx/zgs/jiangmen/2.png',title:'奥园广场'},{image:'https://www.longjinph.com/test/wx/zgs/jiangmen/3.png',title:'荷塘中嘉广场'},{image:'https://www.longjinph.com/test/wx/zgs/jiangmen/4.png',title:'嘉美影院'}],
    lzTitle:"泸州云股",
    LZpoint:[{image:'https://www.longjinph.com/test/wx/zgs/luzhou/1.png',title:'红星美凯龙商场'},{image:'https://www.longjinph.com/test/wx/zgs/luzhou/2.png',title:'摩尔国际广场'}],
    cqTitle:"重庆云股",
    CQpoint:[{image:'https://www.longjinph.com/test/wx/zgs/chongqing/1.png',title:'恒大中渝广场'},{image:'https://www.longjinph.com/test/wx/zgs/chongqing/2.png',title:'石桥广场'},{image:'https://www.longjinph.com/test/wx/zgs/chongqing/3.png',title:'奥园广场'},{image:'https://www.longjinph.com/test/wx/zgs/chongqing/4.png',title:'中国人寿大厦'}]
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