// pages/monster/monster.js

var imageUtil = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    modalHidden: true,
    modalTitle: ''
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