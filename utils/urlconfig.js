const domain = 'https://www.longjinph.com'; 

const interfaces = {
  // 发送的客户信息的json数据
  sendEmail: domain + '/xapi/sendEmail',
  
  // 返回的商品的json数据
  productions: domain + '/api/profiles/productions',
  
  // 返回的商品列表的json数据
  productionsList: domain + '/api/profiles/productionsList',

  // 返回的商品详情的json数据
  productionDetail: domain + '/api/profiles/productionDetail'
}

module.exports = interfaces;