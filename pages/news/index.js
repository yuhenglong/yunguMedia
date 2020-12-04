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
    backfill:"",
    scale:14,
    suggestion:[],
    showLabelTan:false,
    population:"5000",
    equip:"50",
    longitude:"112.487847",
    latitude:"38.002607",
    markers:[{
      iconPath: "/image/location.png",
      id: 0,
      latitude: 38.002607,
      longitude: 105.487847,
      width: 35,
      height: 45,
      joinCluster:true,
      placeInfo:{
        population:"100000",
        equip:"12",
        placeImg:"/image/yungu.png"
      },
      label:{
        width: 50,
        height: 30,
        borderWidth: 1,
        borderColor:"#ffffff",
        borderRadius: 10,
        bgColor: '#ffffff',
        content:"大傻瓜婷婷"
      }
    },{
      iconPath: "/image/location.png",
      id: 1,
      latitude: 35.002607,
      longitude: 109.487847,
      width: 40,
      height: 45,
      joinCluster:true,
      placeInfo:{
        population:"160000",
        equip:"15",
        placeImg:"/image/yungu.png"
      },
      label:{
        width: 50,
        height: 30,
        borderWidth: 1,
        borderColor:"#ffffff",
        borderRadius: 10,
        bgColor: '#ffffff',
        content:"萌萌的布布"
      }
    },{
      iconPath: "/image/location.png",
      id: 2,
      latitude: 39.002607,
      longitude: 113.487847,
      width: 35,
      height: 45,
      joinCluster:true,
      placeInfo:{
        population:"154000540",
        equip:"13",
        placeImg:"/image/yungu.png"
      },
      label:{
        width: 50,
        height: 30,
        borderWidth: 1,
        borderColor:"#ffffff",
        borderRadius: 10,
        bgColor: '#ffffff',
        content:"傻逼的一二"
      }
    },{
      iconPath: "/image/location.png",
      id: 3,
      latitude:38.002607,
      longitude: 112.487847,
      width: 35,
      height: 45,
      joinCluster:true,
      placeInfo:{
        population:"200000",
        equip:"19",
        placeImg:"/image/yungu.png"
      },
      label:{
        width: 80,
        height: 30,
        borderWidth: 1,
        borderColor:"#ffffff",
        borderRadius: 10,
        bgColor: '#ffffff',
        content:"大傻瓜hah "
      }
    }]
  },
  labelTan:function (e){
    const self = this;
    console.log(e.markerId)
    const num = e.markerId;
    const equipment = self.data.markers[num].placeInfo.equip;
    const population = self.data.markers[num].placeInfo.population;
    self.setData({
      showLabelTan:true,
      population:population,
      equip:equipment
    })
  },
  bindTap:function(){
    this.setData({
      showLabelTan:false,
    })
  },
  getAddress:function(e){
    var _this = this;
    //调用关键词提示接口
    qqmapsdk.getSuggestion({
      //获取输入框值并设置keyword参数
      keyword: e.detail.value, //用户输入的关键词，可设置固定值,如keyword:'KFC'
      region: '广州', //设置城市名，限制关键词所示的地域范围，非必填参数
      page_size:8,
      success: function (res) {//搜索成功后的回调
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
  btnClick:function(e){
    const self = this;
      console.log("点击");
      var id = e.currentTarget.id;
      for (var i = 0; i < self.data.suggestion.length; i++) {
        if (i == id) {
          self.setData({
            backfill: self.data.suggestion[i].title,
            latitude: self.data.suggestion[i].latitude,
            longitude: self.data.suggestion[i].longitude,
            scale: 18
          });
          return;
        }
      }
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

  }
})