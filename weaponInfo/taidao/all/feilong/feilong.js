// weaponInfo/taidao/all/feilong/feilong.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData:[
      {"weapon":"飞龙刀[翠]-lv1 ~25","power":"100","crit":"-","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/feilong/info/1-jiang0.png"},
      {"weapon":"飞龙刀[翠]-lv2 ~28","power":"110","crit":"-","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/feilong/info/2-jiang0.png"},
      {"weapon":"飞龙刀[翠]-lv3 ~32","power":"150","crit":"-","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/feilong/info/3-jiang0.png"},
      {"weapon":"飞龙刀[双炎]-lv1 ~36","power":"170","crit":"10%","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/feilong/info/4-jiang0.png"},
      {"weapon":"飞龙刀[双炎]-lv2 ~38","power":"180","crit":"10%","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/feilong/info/5-jiang0.png"},
      {"weapon":"飞龙刀[双红莲]-lv3 ~40","power":"190","crit":"10%","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/feilong/info/6-jiang0.png"},
      {"weapon":"飞龙刀[双红莲]-lv4 ~42","power":"250","crit":"10%","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/feilong/info/7-jiang0.png"},
      {"weapon":"飞龙刀[双红莲]-lv5 ~43","power":"270","crit":"10%","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/feilong/info/8-jiang0.png"},
      {"weapon":"真飞龙刀[双狱炎]-lv6 ~44","power":"300","crit":"10%","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/feilong/info/9-jiang0.png"}
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
          {"weapon":"飞龙刀[翠]-lv1 ~25","power":"100","crit":"-","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/feilong/info/1-"+jianglevel+".png"},
          {"weapon":"飞龙刀[翠]-lv2 ~28","power":"110","crit":"-","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/feilong/info/2-"+jianglevel+".png"},
          {"weapon":"飞龙刀[翠]-lv3 ~32","power":"150","crit":"-","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/feilong/info/3-"+jianglevel+".png"},
          {"weapon":"飞龙刀[双炎]-lv1 ~36","power":"170","crit":"10%","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/feilong/info/4-"+jianglevel+".png"},
          {"weapon":"飞龙刀[双炎]-lv2 ~38","power":"180","crit":"10%","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/feilong/info/5-"+jianglevel+".png"},
          {"weapon":"飞龙刀[双红莲]-lv3 ~40","power":"190","crit":"10%","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/feilong/info/6-"+jianglevel+".png"},
          {"weapon":"飞龙刀[双红莲]-lv4 ~42","power":"250","crit":"10%","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/feilong/info/7-"+jianglevel+".png"},
          {"weapon":"飞龙刀[双红莲]-lv5 ~43","power":"270","crit":"10%","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/feilong/info/8-"+jianglevel+".png"},
          {"weapon":"真飞龙刀[双狱炎]-lv6 ~44","power":"300","crit":"10%","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/feilong/info/9-"+jianglevel+".png"}
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