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
      {"weapon":"王刀雷切-lv1 ~20","power":"120","crit":"-","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/leiqie/info/1-jiang0.png"},
      {"weapon":"王刀雷切-lv2 ~28","power":"130","crit":"-","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/leiqie/info/2-jiang0.png"},
      {"weapon":"王刀雷切-lv3 ~30","power":"160","crit":"-","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/leiqie/info/3-jiang0.png"},
      {"weapon":"王牙刀[奔雷]-lv1 ~47","power":"270","crit":"-","def":"-","hole":"2","jiang": "/weaponInfo/taidao/all/leiqie/info/4-jiang0.png"},
      {"weapon":"真~王牙刀[天渊]-lv2 ~49","power":"280","crit":"-","def":"-","hole":"2","jiang": "/weaponInfo/taidao/all/leiqie/info/5-jiang0.png"},
      {"weapon":"牙王~雷刀-lv3 ~51","power":"290","crit":"-","def":"-","hole":"2","jiang": "/weaponInfo/taidao/all/leiqie/info/6-jiang0.png"}
    ]
  },
  radioChange(e){
      var jianglevel = e.detail.value
      this.setData({
        listData:[
          {"weapon":"王刀雷切-lv1 ~20","power":"120","crit":"-","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/leiqie/info/1-"+jianglevel+".png"},
          {"weapon":"王刀雷切-lv2 ~28","power":"130","crit":"-","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/leiqie/info/2-"+jianglevel+".png"},
          {"weapon":"王刀雷切-lv3 ~30","power":"160","crit":"-","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/leiqie/info/3-"+jianglevel+".png"},
          {"weapon":"王牙刀[奔雷]-lv1 ~47","power":"270","crit":"-","def":"-","hole":"2","jiang": "/weaponInfo/taidao/all/leiqie/info/4-"+jianglevel+".png"},
          {"weapon":"真~王牙刀[天渊]-lv2 ~49","power":"280","crit":"-","def":"-","hole":"2","jiang": "/weaponInfo/taidao/all/leiqie/info/5-"+jianglevel+".png"},
          {"weapon":"牙王~雷刀-lv3 ~51","power":"290","crit":"-","def":"-","hole":"2","jiang": "/weaponInfo/taidao/all/leiqie/info/6-"+jianglevel+".png"}
        ]
      })
  }
})