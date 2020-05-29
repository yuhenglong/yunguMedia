const domain = 'https://www.longjinph.com'; 

const interfaces = {
  // 发送的客户信息的json数据
  sendEmail: domain + '/xapi/sendEmail',
  
  // 公司架构数据
  getCompanyData: domain + '/xapi/getCompanyData',
  
  // 案例的json数据
  getVideoList: domain + '/xapi/getVideoList',

  // 获取新闻列表的数据
  getNewsInfo: domain + '/xapi/getNewsInfo'
}

module.exports = interfaces;