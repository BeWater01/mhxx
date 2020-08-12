// weaponInfo/taidao/all/bingya/bingya.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData:[
      {"weapon":"冰牙朱红刃-lv1 ~33","power":"150","crit":"20%","def":"-","hole":"2","jiang": "/weaponInfo/taidao/all/bingya/info/1-jiang0.png"},
          {"weapon":"冰牙极寒朱红刃-lv2 ~35","power":"180","crit":"25%","def":"-","hole":"2","jiang": "/weaponInfo/taidao/all/bingya/info/2-jiang0.png"},
          {"weapon":"冰牙极寒朱红刃-lv3 ~37","power":"250","crit":"30%","def":"-","hole":"2","jiang": "/weaponInfo/taidao/all/bingya/info/3-jiang0.png"},
          {"weapon":"冰牙极寒朱红刃-lv4 ~38","power":"270","crit":"30%","def":"-","hole":"2","jiang": "/weaponInfo/taidao/all/bingya/info/4-jiang0.png"},
          {"weapon":"冰牙极寒琥珀刃-lv5 ~40","power":"290","crit":"30%","def":"-","hole":"2","jiang": "/weaponInfo/taidao/all/bingya/info/5-jiang0.png"}
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
          {"weapon":"冰牙朱红刃-lv1 ~33","power":"150","crit":"20%","def":"-","hole":"2","jiang": "/weaponInfo/taidao/all/bingya/info/1-"+jianglevel+".png"},
          {"weapon":"冰牙极寒朱红刃-lv2 ~35","power":"180","crit":"25%","def":"-","hole":"2","jiang": "/weaponInfo/taidao/all/bingya/info/2-"+jianglevel+".png"},
          {"weapon":"冰牙极寒朱红刃-lv3 ~37","power":"250","crit":"30%","def":"-","hole":"2","jiang": "/weaponInfo/taidao/all/bingya/info/3-"+jianglevel+".png"},
          {"weapon":"冰牙极寒朱红刃-lv4 ~38","power":"270","crit":"30%","def":"-","hole":"2","jiang": "/weaponInfo/taidao/all/bingya/info/4-"+jianglevel+".png"},
          {"weapon":"冰牙极寒琥珀刃-lv5 ~40","power":"290","crit":"30%","def":"-","hole":"2","jiang": "/weaponInfo/taidao/all/bingya/info/5-"+jianglevel+".png"}
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