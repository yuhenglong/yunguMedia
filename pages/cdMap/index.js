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
    longitude: "104.067834",
    latitude: "30.552925",
    newAdreObj: {},
    markers: [{
      iconPath: "/image/locationRed.png",
      id: 0,
      latitude: 30.552925,
      longitude: 104.067834,
      joinCluster: true,
      placeInfo: {
        info:"高新区天府大道中段530号东方希望天祥广场B座4202",
        population: "10000",
        equip: "0",
        placeImg: "/image/yungu.png"
      },
      label: {
        borderWidth: 1,
        padding:"10rpx",
        borderColor: "#ffffff",
        borderRadius: 3,
        bgColor: '#ffffff',
        content: "云股传媒成都分公司"
      }
    }, {
      iconPath: "/image/location.png",
      id: 1,
      latitude: 30.760187742,
      longitude: 104.067986892,
      joinCluster: true,
      placeInfo: {
        info:"新都区大丰镇大天路439号",
        population: "30000",
        equip: "7",
        placeImg: "/image/yungu.png"
      },
      label: {
        borderWidth: 1,
        padding:"10rpx",
        borderColor: "#ffffff",
        borderRadius: 3,
        bgColor: '#ffffff',
        content: "福地广场家乐福"
      }
    }, {
      iconPath: "/image/location.png",
      id: 2,
      latitude: 30.764904,
      longitude: 104.063183,
      joinCluster: true,
      placeInfo: {
        info:"新都区方元路55号",
        population: "30000",
        equip: "11",
        placeImg: "/image/yungu.png"
      },
      label: {
        borderWidth: 1,
        padding:"10rpx",
        borderColor: "#ffffff",
        borderRadius: 3,
        bgColor: '#ffffff',
        content: "汇融广场mall"
      }
    }, {
      iconPath: "/image/location.png",
      id: 3,
      latitude: 30.762818799,
      longitude: 104.056401899,
      joinCluster: true,
      placeInfo: {
        info:"新都区方营路78",
        population: "40000",
        equip: "3",
        placeImg: "/image/yungu.png"
      },
      label: {
        borderWidth: 1,
        padding:"10rpx",
        borderColor: "#ffffff",
        borderRadius: 3,
        bgColor: '#ffffff',
        content: "听蓝时光 "
      }
    }, {
      iconPath: "/image/location.png",
      id: 4,
      latitude: 30.8102,
      longitude: 104.1773,
      joinCluster: true,
      placeInfo: {
        info:"新都区马超东路222号",
        population: "30000",
        equip: "5",
        placeImg: "/image/yungu.png"
      },
      label: {
        borderWidth: 1,
        padding:"10rpx",
        borderColor: "#ffffff",
        borderRadius: 3,
        bgColor: '#ffffff',
        content: "和信新城市广场 "
      }
    }, {
      iconPath: "/image/location.png",
      id: 5,
      latitude: 30.757065248,
      longitude: 104.077911124,
      joinCluster: true,
      placeInfo: {
        info:"新都区双楠大道白衣上街177号",
        population: "60000",
        equip: "5",
        placeImg: "/image/yungu.png"
      },
      label: {
        borderWidth: 1,
        padding:"10rpx",
        borderColor: "#ffffff",
        borderRadius: 3,
        bgColor: '#ffffff',
        content: "城北优品道 "
      }
    }, {
      iconPath: "/image/location.png",
      id: 6,
      latitude: 30.764965899,
      longitude: 104.12124545,
      joinCluster: true,
      placeInfo: {
        info:"新都区蓉都大道天河路1380号",
        population: "30000",
        equip: "1",
        placeImg: "/image/yungu.png"
      },
      label: {
        borderWidth: 1,
        padding:"10rpx",
        borderColor: "#ffffff",
        borderRadius: 3,
        bgColor: '#ffffff',
        content: "吉利安大厦 "
      }
    }, {
      iconPath: "/image/location.png",
      id: 7,
      latitude: 30.625721349,
      longitude: 104.022690674,
      joinCluster: true,
      placeInfo: {
        info:"武侯区佳灵路与武阳大道交汇处",
        population: "60000",
        equip: "6",
        placeImg: "/image/yungu.png"
      },
      label: {
        borderWidth: 1,
        padding:"10rpx",
        borderColor: "#ffffff",
        borderRadius: 3,
        bgColor: '#ffffff',
        content: "下一站都市"
      }
    }, {
      iconPath: "/image/location.png",
      id: 8,
      latitude: 30.65098,
      longitude: 103.98544,
      joinCluster: true,
      placeInfo: {
        info:"武侯区万顺二路",
        population: "40000",
        equip: "5",
        placeImg: "/image/yungu.png"
      },
      label: {
        borderWidth: 1,
        padding:"10rpx",
        borderColor: "#ffffff",
        borderRadius: 3,
        bgColor: '#ffffff',
        content: "金阳不夜都"
      }
    }, {
      iconPath: "/image/location.png",
      id: 9,
      latitude: 30.604149899,
      longitude: 103.98460245,
      joinCluster: true,
      placeInfo: {
        info:"武侯区簇桥金履二路167号",
        population: "50000",
        equip: "6",
        placeImg: "/image/yungu.png"
      },
      label: {
        borderWidth: 1,
        padding:"10rpx",
        borderColor: "#ffffff",
        borderRadius: 3,
        bgColor: '#ffffff',
        content: "富顿中心"
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
  onLoad: function (options) {

  }
})
