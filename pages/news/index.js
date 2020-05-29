const app = getApp()
import list from '../../utils/data.js'
// 引入接口配置文件urlconfig
const interfaces = require('../../utils/urlconfig.js');
Page({
  data: {
    page: 0,
    size: 10,
    loading: false,
    allloaded: false,
    list: []
  },
  onLoad: function() {
    this.loadData();
  },
  loadData:function(){
    // 接口写在这
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
        console.log("我是大肥猪",res);
        wx.hideLoading();
      }
    });
  },
  onShow() {
    this.getList();
  },
  // 加载更多
  loadmore({
    detail
  }) {
    this.getList().then(res => {
      detail.success();
    });
  },
  // 刷新
  refresh({
    detail
  }) {
    this.setData({
      list: [],
      loading: false,
      allloaded: false,
      page: 0
    })
    this.getList().then(res => {
      detail.success();
    });
  },
  getList() {
    
    return new Promise((resolve, reject) => {
      if (this.data.loading || this.data.allloaded) {
        resolve();
        return;
      }
      this.setData({
        loading: true
      })
      setTimeout(() => {
        let resData = [].concat(JSON.parse(JSON.stringify(self.list)));
        let addList = resData.slice(this.data.size * this.data.page, (this.data.page + 1) * this.data.size);
        let newList = this.data.list.concat(addList)
        if (addList.length < this.data.size) {
          this.setData({
            allloaded: true
          })
        }
        this.setData({
          list: newList,
          loading: false,
          page: this.data.page + 1
        })
        resolve();
      }, 500)
    })
  },
  showNewInfo(e){
    const index = e.currentTarget.dataset.index;
    wx.navigateTo({
      url:'/pages/showNew/index?id=' + index
    })
  }
})