// weaponInfo/kailie/kailie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    radiogroup:[
      {name:"jiang0",value:"+0",checked:true},
      {name:"jiang1",value:"+1"},
      {name:"jiang2",value:"+2"}
    ],
    listData:[
      {"weapon":"铠裂太刀-lv1","power":"250","crit":"5%","def":"-","hole":"-","jiang": "/weaponInfo/taidao/all/kailie/info/1-jiang0.png"},
      {"weapon":"铠裂太刀-lv2","power":"270","crit":"5%","def":"-","hole":"-","jiang": "/weaponInfo/taidao/all/kailie/info/2-jiang0.png"},
      {"weapon":"铠裂太刀[切碎]-lv3","power":"290","crit":"5%","def":"-","hole":"-","jiang": "/weaponInfo/taidao/all/kailie/info/3-jiang0.png"},
      {"weapon":"铠裂太刀[切碎]-lv4","power":"310","crit":"5%","def":"-","hole":"-","jiang": "/weaponInfo/taidao/all/kailie/info/4-jiang0.png"},
      {"weapon":"铠裂太刀[无情切碎]-lv5","power":"330","crit":"5%","def":"-","hole":"-","jiang": "/weaponInfo/taidao/all/kailie/info/5-jiang0.png"}
    ]
  },
  radioChange(e){
      var jianglevel = e.detail.value
      this.setData({
        listData:[
          {"weapon":"铠裂太刀-lv1","power":"250","crit":"5%","def":"-","hole":"-","jiang": "/weaponInfo/taidao/all/kailie/info/1-"+jianglevel+".png"},
          {"weapon":"铠裂太刀-lv2","power":"270","crit":"5%","def":"-","hole":"-","jiang": "/weaponInfo/taidao/all/kailie/info/2-"+jianglevel+".png"},
          {"weapon":"铠裂太刀[切碎]-lv3","power":"290","crit":"5%","def":"-","hole":"-","jiang": "/weaponInfo/taidao/all/kailie/info/3-"+jianglevel+".png"},
          {"weapon":"铠裂太刀[切碎]-lv4","power":"310","crit":"5%","def":"-","hole":"-","jiang": "/weaponInfo/taidao/all/kailie/info/4-"+jianglevel+".png"},
          {"weapon":"铠裂太刀[无情切碎]-lv5","power":"330","crit":"5%","def":"-","hole":"-","jiang": "/weaponInfo/taidao/all/kailie/info/5-"+jianglevel+".png"}
        ]
      })
  }
})