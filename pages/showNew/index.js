// 引入接口配置文件urlconfig
const interfaces = require('../../utils/urlconfig.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'',
    time:'',
    newsInfo:[],
    year:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNewsList(options.id);
  },

  //获取数据库新闻
  getNewsList:function (id){
    const self = this;
    const obj = { _id:id }
    wx.request({
      url: interfaces.getOneNewInfo,
      method: "POST",
      data: obj,
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success:function(res){
        if(res.statusCode ==200){
          self.setData({
            title:res.data.title,
            time:res.data.date,
            newsInfo:res.data.newsInfo,
            year:res.data.year
          })
        }else{
          console.log('出错啦，大肥猪！');
        }
      }
    })
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

  }
})