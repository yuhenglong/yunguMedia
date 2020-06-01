const domain = 'https://www.longjinph.com'; 

const interfaces = {
  // 发送的客户信息的json数据
  sendEmail: domain + '/xapi/sendEmail',
  
  // 公司架构数据
  getCompanyData: domain + '/xapi/getCompanyData',
  
  // 案例的json数据
  getVideoList: domain + '/xapi/getVideoList',

  // 获取所有新闻列表的数据
  getNewsInfo: domain + '/xapi/getNewsInfo',

  //获取一条新闻数据
  getOneNewInfo: domain + '/xapi/getOneNewInfo',
}

module.exports = interfaces;