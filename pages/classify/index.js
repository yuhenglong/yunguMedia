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
		videoList: [
			{
				'coverimg':"https://goss.veer.com/creative/vcg/veer/800water/veer-146156021.jpg",
				'description':"BOSS直聘是一款BOSS与牛人直接开聊的招聘工具，通过去除中间环节、简历+行为数据匹配等方式提升招聘找工作效率，让牛人更快获得更多优质机会。平台覆盖主流互联网公司、金融、文化传媒、汽车房地产等行业",
				'id':"41",
				'resource_add':"http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
				'title':"BOSS直聘--找工作，直接跟老板谈",
				'type':"1"
			},
			{
				'coverimg': "https://goss.veer.com/creative/vcg/veer/800water/veer-146156021.jpg",
				'description': "中国全生命周期母婴品牌—子初,专注对科学孕育和母婴生活的研究, 致力于为妈妈和宝宝提供精致母婴生活管理,用“科学孕育,精致生活”的态度，满足新生代妈妈对于精致母婴生活的向往与追求。",
				'id': "44",
				'resource_add': "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
				'title': "子初--让母爱更科学",
				'type': "1"
			},
			{
				'coverimg': "https://goss.veer.com/creative/vcg/veer/800water/veer-146156021.jpg",
				'description': "贝壳，找房大平台，拥有全面、真实的房源信息，以及VR看房、房屋估价、智能推荐等业界创新技术，以为2亿家庭提供品质居住服务为愿景。业务涉及二手房、新房、租房、旅居、商业办公、家装等，为您带来多元专业的服务，全面满足您的居住需求。要找真房源，还是贝壳全。",
				'id': "43",
				'resource_add': "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
				'title': "贝壳找房大平台，要找真房源，还是贝壳全",
				'type': "1"
			},
			{
				'coverimg':"https://goss.veer.com/creative/vcg/veer/800water/veer-146156021.jpg",
				'description':"智联招聘，成立于1997年。为求职者提供免费注册、求职指导、简历优化、职业测评等服务，职位真实可靠，反馈快速及时。燃青春助梦想，上智联招聘，找到满意工作！为企业提供网络招聘,校园招聘,猎头,培训,测评和人事外包等一站式专业人力资源服务",
				'id':"41",
				'resource_add':"http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
				'title':"智联招聘--您的专属招聘平台",
				'type':"1"
			},
		
		],
	
	},

    /**
     * 生命周期函数--监听页面加载
     */
	onLoad: function (options) {
		//加载数据
		//这里数据写死，假装我是在服务器拿到的数据
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
    console.log("大肥猪")
		if (!this.data.isLoadedAll) {
			this.data.pageIndex++;
		}
	}
})