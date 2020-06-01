// 引入接口配置文件urlconfig
const interfaces = require('../../utils/urlconfig.js');
Page({
  data: {
    page: 0,
    size: 10,
    loading: false,
    allloaded: false,
    list: [],
    noData:false
  },
    /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    this.loadData();
  },
  //请求数据
  loadData:function(){
    const self = this;
    //加载数据
    wx.showLoading({
      title: '加载中...',
    });
    wx.request({
      url: interfaces.getNewsInfo,
      header: {
        'content-type': 'application/json' // 默认值，返回的数据设置为json数组格式
      },
      success(res) {
        self.setData({
          list: res.data.reverse(),
        })
        wx.hideLoading();
      }
    });
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading() //在标题栏中显示加载
    const self = this;
    self.setData({
      list: [],
    });
    wx.request({
      url: interfaces.getNewsInfo,
      header: {
        'content-type': 'application/json' // 默认值，返回的数据设置为json数组格式
      },
      success(res) {
        setTimeout(() =>{
          self.setData({
            list: res.data.reverse(),
          });
          wx.hideNavigationBarLoading() //完成停止加载
          wx.stopPullDownRefresh() //停止下拉刷新
        },1000)
      }
    });
  },

  showNewInfo(e){
    const index = e.currentTarget.dataset.index;
    const id = this.data.list[index]._id;
    wx.navigateTo({
      url:'/pages/showNew/index?id=' + id
    })
  }
})