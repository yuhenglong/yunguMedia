// pages/news/index.js
var QQMapWX = require('../../utils/qqmap-wx-jssdk.js');
// 引入接口配置文件urlconfig
const interfaces = require('../../utils/urlconfig.js');
//引入本地json文件
const CDdata = require("../../utils/CDdata.js")

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
    scale: 12,
    suggestion: [],
    showLabelTan: false,
    district: "",
    info: "",
    population: "",
    equip: "",
    navId: "",
    longitude: "104.067834",
    latitude: "30.552925",
    newAdreObj: {},
    markers: []
  },
  labelTan: function (e) {
    const self = this;
    console.log(e.markerId)
    const num = e.markerId;
    const info = self.data.markers[num].placeInfo.info;
    const district = self.data.markers[num].placeInfo.district;
    const equipment = self.data.markers[num].placeInfo.equip;
    const population = self.data.markers[num].placeInfo.population;
    self.setData({
      showLabelTan: true,
      info: info,
      population: population,
      equip: equipment,
      district: district,
      navId: num
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
      region: '成都', //设置城市名，限制关键词所示的地域范围，非必填参数
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
  delInfo: function () {
    wx.navigateTo({
      url: '/pages/delPlaceInfo/index?navId=' + this.data.navId,
    })
  },
  onLoad: function (options) {
    wx.showLoading({
      title: "加载中..."
    });

    this.setData({
      markers: CDdata.CDdata
    })

    wx.hideLoading()

    // wx.request({
    //   url: interfaces.getCdPlaceInfo,
    //   // url: "../../utils/CDdata.json",
    //   header: {
    //     'content-type': 'application/json' // 默认值，返回的数据设置为json数组格式
    //   },
    //   success(res) {
    //     if (res.data.code === 0) {
    //       self.setData({
    //         markers: res.data.data
    //       })
    //       wx.hideLoading()
    //     }

    //   }
    // })
  }
})