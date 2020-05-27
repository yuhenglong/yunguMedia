const interfaces = require('../../utils/urlconfig.js');
//获取音频上下文
const backgroundAudioManager = wx.getBackgroundAudioManager();

Page({

    /**
     * 页面的初始数据
     */
	data: {
		isLoadedAll: false,
		musicIndex: null,
		videoIndex: null,
		currentTabsIndex: 0,
		pageIndex: 1,
		videoList: []
	},

    /**
     * 生命周期函数--监听页面加载
     */
	onLoad: function (options) {
		const self = this;
		//加载数据
		wx.showLoading({
			title: '加载中...',
		});
		wx.request({
      url: interfaces.getVideoList,
      header: {
        'content-type': 'application/json' // 默认值，返回的数据设置为json数组格式
      },
      success(res) {
        self.setData({
          videoList: res.data
        })
        wx.hideLoading()
      }
    })
	},

	//tap切换
	onTabsItemTap: function (event) {
		var index = event.currentTarget.dataset['index'];
		this.setData({
			currentTabsIndex: index
		});
		//tab切换时停止音乐播放
		backgroundAudioManager.stop();

		//tab切换时停止视频播放
		var videoContextPrev = wx.createVideoContext('video' + this.data.videoIndex);
		videoContextPrev.stop();

		//将当前播放视频、音频的index设置为空
		this.setData({
			musicIndex: null,
			videoIndex: null,
		})
	},
	//展开
	//原本没有upStatus这个字段，所以默认值为false
	upDown(event) {
		var index = event.currentTarget.dataset['index'];
		this.data.videoList[index].upStatus = !this.data.videoList[index].upStatus;
		this.setData({
			videoList: this.data.videoList
		})
	},
	//播放视频
	videoPlay(event) {
		var length = this.data.videoList.length;
		var index = event.currentTarget.dataset['index'];

		if (!this.data.videoIndex) { // 没有播放时播放视频
			this.setData({
				videoIndex: index
			})
			var videoContext = wx.createVideoContext('video' + index)
			videoContext.play()
		} else {
			//停止正在播放的视频
			var videoContextPrev = wx.createVideoContext('video' + this.data.videoIndex)
			videoContextPrev.stop()
			//将点击视频进行播放
			this.setData({
				videoIndex: index
			})
			var videoContextCurrent = wx.createVideoContext('video' + index)
			videoContextCurrent.play()
		}
	},
  // 下拉加载更多
	onReachBottom: function () {
		if (!this.data.isLoadedAll) {
			this.data.pageIndex++;
		}
	}
})