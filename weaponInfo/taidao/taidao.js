// weaponInfo/taidao/taidao.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    modalHidden: true,
    modalTitle: ''
  },
  getanglang(){
    wx.navigateTo({
      url: 'all/getanglang/getanglang',
    })
  },
  kailie(){
    wx.navigateTo({
      url: 'all/kailie/kailie',
    })
  },
  yanchuan(){
    wx.navigateTo({
      url: 'all/yanchuan/yanchuan',
    })
  },
  youbiao(){
    wx.navigateTo({
      url: 'all/youbiao/youbiao',
    })
  },
  leiqie(){
    wx.navigateTo({
      url: 'all/leiqie/leiqie',
    })
  },
  dianlong(){
    wx.navigateTo({
      url: 'all/dianlong/dianlong',
    })
  },
  bingya(){
    wx.navigateTo({
      url: 'all/bingya/bingya',
    })
  },
  shenxue(){
    wx.navigateTo({
      url: 'all/shenxue/shenxue',
    })
  },
  zhanlong(){
    wx.navigateTo({
      url: 'all/zhanlong/zhanlong',
    })
  },
  feilong(){
    wx.navigateTo({
      url: 'all/feilong/feilong',
    })
  },
  suilong(){
    wx.navigateTo({
      url: 'all/suilong/suilong',
    })
  },
  jinmie(){
    wx.navigateTo({
      url: 'all/jinmie/jinmie',
    })
  },
  buttonTap: function(e) {
    this.setData({
         modalHidden: false,
         modalTitle: e.currentTarget.dataset.text
    })
  },
  modalConfirm: function() {
    this.setData({
          modalHidden: true
    })
  }
})