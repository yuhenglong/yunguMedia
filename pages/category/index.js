// 引入接口配置文件urlconfig
const interfaces = require('../../utils/urlconfig.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    navLeftItems: [],
    curIndex: 0,
    infoTotal: [{
        cityTitle: '广州云股',
        cityImg: "https://www.oxeyescat.com/test/wx/zgs/guangzhou/city.png",
        cityIntr: "广州云股传媒坐落于繁华的天河区，邻近广州塔、IFC等著名地标。阡陌交通、车水马龙；商贸往来，络绎不绝，欢迎与您沟通。",
        addr: "天河区黄埔大道西富力盈泰大厦A座1208",
        phone: "020-32547597",
        pointLocation: [{
          image: 'https://www.oxeyescat.com/test/wx/zgs/guangzhou/1.png',
          title: '富力海珠城'
        }, {
          image: 'https://www.oxeyescat.com/test/wx/zgs/guangzhou/2.png',
          title: '海印又一城'
        }, {
          image: 'https://www.oxeyescat.com/test/wx/zgs/guangzhou/3.png',
          title: '五号停机坪'
        }, {
          image: 'https://www.oxeyescat.com/test/wx/zgs/guangzhou/4.png',
          title: '万科里'
        }]
      },
      {
        cityTitle: '成都云股',
        cityImg: "https://www.oxeyescat.com/test/wx/zgs/chengdu/city.png",
        cityIntr: "成都云股位于成都市高新区。成都是一座历史悠久的文化古城，自古以来被誉为“天府之国”。立足成都，是希望展示其深厚的底蕴，弘扬优良文化。",
        addr: "四川省成都市高新区天府大道中段530号东方希望天祥广场B座4202",
        phone: "028-65586589",
        pointLocation: [{
          image: 'https://www.oxeyescat.com/test/wx/zgs/chengdu/1.png',
          title: '蓝光·东方天地'
        }, {
          image: 'https://www.oxeyescat.com/test/wx/zgs/chengdu/2.png',
          title: '融创Nano'
        }, {
          image: 'https://www.oxeyescat.com/test/wx/zgs/chengdu/3.png',
          title: '上古天地'
        }, {
          image: 'https://www.oxeyescat.com/test/wx/zgs/chengdu/4.png',
          title: '同森金棕榈'
        }]
      },
      {
        cityTitle: '深圳云股',
        cityImg: "https://www.oxeyescat.com/test/wx/zgs/shenzhen/city.png",
        cityIntr: "深圳云股位于深圳市中心福田区，毗邻香港，是珠三角重要的国际大都市。布局深圳，与城市共同发展是云股的初衷。",
        addr: "深圳市福田区福田街道岗厦社区金田路3038号现代国际大厦7楼703",
        phone: "0755-82780825",
        pointLocation: [{
          image: 'https://www.oxeyescat.com/test/wx/zgs/shenzhen/1.png',
          title: '奥卡美广场'
        }, {
          image: 'https://www.oxeyescat.com/test/wx/zgs/shenzhen/2.png',
          title: '星城购物中心'
        }, {
          image: 'https://www.oxeyescat.com/test/wx/zgs/shenzhen/3.png',
          title: '悦方广场'
        }, {
          image: 'https://www.oxeyescat.com/test/wx/zgs/shenzhen/4.png',
          title: '资信广场'
        }]
      },
      {
        cityTitle: '泸州云股',
        cityImg: "https://www.oxeyescat.com/test/wx/zgs/luzhou/city.png",
        cityIntr: "泸州云股位于历史文化名城--泸州。泸州是川滇黔渝结合部的区域中心城市，成渝经济圈重要的商贸物流中心。布局泸州，寄望于与泸州的历史文化一样源远流长。",
        addr: "四川泸州江阳佳乐金街1号401",
        phone: "0830-8583377",
        pointLocation: [{
          image: 'https://www.oxeyescat.com/test/wx/zgs/luzhou/1.png',
          title: '红星美凯龙商场'
        }, {
          image: 'https://www.oxeyescat.com/test/wx/zgs/luzhou/2.png',
          title: '摩尔国际广场'
        }, {
          image: 'https://www.oxeyescat.com/test/wx/zgs/luzhou/3.png',
          title: '红星美凯龙商场'
        }, {
          image: 'https://www.oxeyescat.com/test/wx/zgs/luzhou/4.png',
          title: '摩尔国际广场'
        }]
      },
      {
        cityTitle: '武汉云股',
        cityImg: "https://www.oxeyescat.com/test/wx/zgs/wuhan/city.png",
        cityIntr: "武汉是长江经济带核心城市，中部崛起战略支点、全面创新改革试验区，新一线城市。布局武汉，把脉新兴城市，探寻新兴城市发展机遇是云股发展壮大的必经之路。",
        addr: "湖北武汉市江汉民生路20号世纪中心写字楼",
        phone: "027-82807886",
        pointLocation: [{
          image: 'https://www.oxeyescat.com/test/wx/zgs/wuhan/1.png',
          title: '福莱中心'
        }, {
          image: 'https://www.oxeyescat.com/test/wx/zgs/wuhan/2.png',
          title: '水岸国际'
        }, {
          image: 'https://www.oxeyescat.com/test/wx/zgs/wuhan/3.png',
          title: '新世界百货'
        }, {
          image: 'https://www.oxeyescat.com/test/wx/zgs/wuhan/4.png',
          title: '印象城'
        }]
      },
      {
        cityTitle: '江门云股',
        cityImg: "https://www.oxeyescat.com/test/wx/zgs/jiangmen/city.png",
        cityIntr: "江门云股位于位于珠江三角洲西部，濒临南海，毗邻港澳的江门，而江门是广府文化的代表城市之一。落户江门，为全面布局珠三角起重要作用。",
        addr: "广东江门蓬江万达广场写字楼B座2814",
        phone: "0750-3910183",
        pointLocation: [{
          image: 'https://www.oxeyescat.com/test/wx/zgs/jiangmen/1.png',
          title: '奥园广场'
        }, {
          image: 'https://www.oxeyescat.com/test/wx/zgs/jiangmen/2.png',
          title: '奥园写字楼'
        }, {
          image: 'https://www.oxeyescat.com/test/wx/zgs/jiangmen/3.png',
          title: '荷塘中嘉广场'
        }, {
          image: 'https://www.oxeyescat.com/test/wx/zgs/jiangmen/4.png',
          title: '嘉美影院'
        }]
      },
      {
        cityTitle: '重庆云股',
        cityImg: "https://www.oxeyescat.com/test/wx/zgs/chongqing/city.png",
        cityIntr: "重庆，一方神奇土地，雄奇的山水和厚重的巴文化造就的城市。沿江的城市与村落大多是巴国的文明中心，或为重镇或为都城，但更是巴蜀文化的走廊。布局重庆，展望未来。",
        addr: "重庆市渝北区龙溪街道红锦大道92号中渝广场1幢17楼03号",
        phone: "0020-32547597",
        pointLocation: [{
          image: 'https://www.oxeyescat.com/test/wx/zgs/chongqing/1.png',
          title: '恒大中渝广场'
        }, {
          image: 'https://www.oxeyescat.com/test/wx/zgs/chongqing/2.png',
          title: '石桥广场'
        }, {
          image: 'https://www.oxeyescat.com/test/wx/zgs/chongqing/3.png',
          title: '奥园广场'
        }, {
          image: 'https://www.oxeyescat.com/test/wx/zgs/chongqing/4.png',
          title: '中国人寿大厦'
        }]
      }
    ],
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