// pages/news/index.js
var QQMapWX = require('../../utils/qqmap-wx-jssdk.js');

// 实例化API核心类
var qqmapsdk = new QQMapWX({
  key: 'ZTBBZ-OECLJ-6OVFB-KXO6K-CUA57-C6FAZ' // 必填
});

Page({
  /**
   * 页面的初始数据
   */
  data: {
    backfill: "",
    val: "",
    scale: 14,
    suggestion: [],
    showLabelTan: false,
    info:"",
    population: "",
    equip: "",
    longitude: "113.334925405",
    latitude: "23.126035809",
    newAdreObj: {},
    markers: [{
      iconPath: "/image/locationRed.png",
      id: 0,
      latitude: 23.126035809,
      longitude: 113.334925405,
      joinCluster: true,
      placeInfo: {
        info:"黄埔大道100号富力盈泰A座1208",
        population: "10000",
        equip: "0",
        placeImg: "/image/yungu.png"
      },
      label: {
        borderWidth: 1,
        borderColor: "#ffffff",
        borderRadius: 3,
        bgColor: '#ffffff',
        content: "云股传媒广州分公司"
      }
    }, {
      iconPath: "/image/location.png",
      id: 1,
      latitude: 23.148468466,
      longitude: 113.323370052,
      joinCluster: true,
      placeInfo: {
        info:"黄埔大道100号富力盈泰A座1208",
        population: "50000",
        equip: "8",
        placeImg: "/image/yungu.png"
      },
      label: {
        borderWidth: 1,
        borderColor: "#ffffff",
        borderRadius: 3,
        bgColor: '#ffffff',
        content: "保利中汇广场"
      }
    }, {
      iconPath: "/image/location.png",
      id: 2,
      latitude: 23.181443809,
      longitude: 113.320458405,
      joinCluster: true,
      placeInfo: {
        info:"广州市白云区广州大道北1419号",
        population: "30000",
        equip: "8",
        placeImg: "/image/yungu.png"
      },
      label: {
        borderWidth: 1,
        borderColor: "#ffffff",
        borderRadius: 3,
        bgColor: '#ffffff',
        content: "润佳广场"
      }
    }, {
      iconPath: "/image/location.png",
      id: 3,
      latitude: 23.146961,
      longitude: 113.362153,
      joinCluster: true,
      placeInfo: {
        info:"广州市天河区广园路科华街251号",
        population: "40000",
        equip: "5",
        placeImg: "/image/yungu.png"
      },
      label: {
        borderWidth: 1,
        borderColor: "#ffffff",
        borderRadius: 3,
        bgColor: '#ffffff',
        content: "乐天创意园 "
      }
    }]
  },
  labelTan: function (e) {
    const self = this;
    console.log(e.markerId)
    const num = e.markerId;
    const info = self.data.markers[num].placeInfo.info;
    const equipment = self.data.markers[num].placeInfo.equip;
    const population = self.data.markers[num].placeInfo.population;
    self.setData({
      showLabelTan: true,
      info: info,
      population: population,
      equip: equipment
    })
  },
  bindTap: function () {
    this.setData({
      showLabelTan: false,
    })
  },
  getAddress: function (e) {
    var _this = this;
    //调用关键词提示接口
    qqmapsdk.getSuggestion({
      //获取输入框值并设置keyword参数
      keyword: e.detail.value, //用户输入的关键词，可设置固定值,如keyword:'KFC'
      region: '广州', //设置城市名，限制关键词所示的地域范围，非必填参数
      page_size: 8,
      success: function (res) { //搜索成功后的回调
        _this.setData({
          val: e.detail.value
        })
        console.log(res);
        var sug = [];
        for (var i = 0; i < res.data.length; i++) {
          sug.push({ // 获取返回结果，放到sug数组中
            title: res.data[i].title,
            id: res.data[i].id,
            addr: res.data[i].address,
            city: res.data[i].city,
            district: res.data[i].district,
            latitude: res.data[i].location.lat,
            longitude: res.data[i].location.lng
          });
        }
        _this.setData({ //设置suggestion属性，将关键词搜索结果以列表形式展示
          suggestion: sug
        });

      }
    })
  },
  btnClick: function (e) {
    const self = this;
    console.log(this.data.val);
    qqmapsdk.getSuggestion({
      keyword: this.data.val,
      success: function (res) {
        const arr = [];
        arr.push({ // 获取返回结果，放到sug数组中
          title: res.data[0].title,
          iconPath: "/image/locationRed.png",
          id: res.data[0].id,
          addr: res.data[0].address,
          city: res.data[0].city,
          district: res.data[0].district,
          latitude: res.data[0].location.lat,
          longitude: res.data[0].location.lng
        });
        const c = self.data.markers.concat(arr)
        self.setData({
          markers: c,
          latitude: self.data.suggestion[0].latitude,
          longitude: self.data.suggestion[0].longitude,
          scale: 16
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  }
})
