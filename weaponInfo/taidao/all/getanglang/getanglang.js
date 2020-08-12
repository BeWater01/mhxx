// weaponInfo/getanglang/getanglang.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData:[
      {"weapon":"宝镰之金属器-lv1","power":"310","crit":"-","def":"+60","hole":"3","jiang": "/weaponInfo/taidao/all/getanglang/info/1-jiang0.png"},
      {"weapon":"碑文之镰麦里特塞盖尔-lv2","power":"320","crit":"-","def":"+60","hole":"3","jiang": "/weaponInfo/taidao/all/getanglang/info/2-jiang0.png"},
      {"weapon":"[真名]麦里特塞盖尔-lv3","power":"330","crit":"-","def":"+60","hole":"3","jiang": "/weaponInfo/taidao/all/getanglang/info/3-jiang0.png"}
    ],
    radiogroup:[
      {name:"jiang0",value:"+0",checked:true},
      {name:"jiang1",value:"+1"},
      {name:"jiang2",value:"+2"}
    ],
    modalHidden: true,
    modalTitle: ''
  },
  radioChange(e){
      var jianglevel = e.detail.value
      this.setData({
        listData:[
          {"id":"1","weapon":"宝镰之金属器-lv1","power":"310","crit":"-","def":"+60","hole":"3","jiang": "/weaponInfo/taidao/all/getanglang/info/1-"+jianglevel+".png"},
          {"id":"2","weapon":"碑文之镰麦里特塞盖尔-lv2","power":"320","crit":"-","def":"+60","hole":"3","jiang": "/weaponInfo/taidao/all/getanglang/info/2-"+jianglevel+".png"},
          {"id":"3","weapon":"[真名]麦里特塞盖尔-lv3","power":"330","crit":"-","def":"+60","hole":"3","jiang": "/weaponInfo/taidao/all/getanglang/info/3-"+jianglevel+".png"}
        ]
      })
  },
  tabletab: function(e) {
    console.log(e.currentTarget.dataset.text)
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