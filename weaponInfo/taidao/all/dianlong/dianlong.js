// weaponInfo/dianlong/dianlong.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData:[
      {"weapon":"飞龙刀[绿柱石]-lv1 ~15","power":"120","crit":"15%","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/dianlong/info/1-jiang0.png"},
      {"weapon":"飞龙刀[绿柱石]-lv2 ~18","power":"130","crit":"15%","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/dianlong/info/2-jiang0.png"},
      {"weapon":"飞龙刀[绿柱石]-lv3 ~22","power":"150","crit":"20%","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/dianlong/info/3-jiang0.png"},
      {"weapon":"飞龙刀[绿柱石]-lv4 ~24","power":"160","crit":"20%","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/dianlong/info/4-jiang0.png"},
      {"weapon":"飞龙刀[绿柱石]-lv5 ~26","power":"170","crit":"20%","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/dianlong/info/5-jiang0.png"},
      {"weapon":"飞龙刀[祖母绿]-lv6 ~28","power":"180","crit":"20%","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/dianlong/info/6-jiang0.png"},
      {"weapon":"飞龙刀[祖母绿]-lv7 ~30","power":"250","crit":"20%","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/dianlong/info/7-jiang0.png"},
      {"weapon":"飞龙刀[祖母绿]-lv8 ~32","power":"270","crit":"20%","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/dianlong/info/8-jiang0.png"},
      {"weapon":"真飞龙刀[亚历山]-lv9 ~35","power":"290","crit":"20%","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/dianlong/info/9-jiang0.png"}
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
          {"weapon":"飞龙刀[绿柱石]-lv1 ~15","power":"120","crit":"15%","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/dianlong/info/1-"+jianglevel+".png"},
          {"weapon":"飞龙刀[绿柱石]-lv2 ~18","power":"130","crit":"15%","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/dianlong/info/2-"+jianglevel+".png"},
          {"weapon":"飞龙刀[绿柱石]-lv3 ~22","power":"150","crit":"20%","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/dianlong/info/3-"+jianglevel+".png"},
          {"weapon":"飞龙刀[绿柱石]-lv4 ~24","power":"160","crit":"20%","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/dianlong/info/4-"+jianglevel+".png"},
          {"weapon":"飞龙刀[绿柱石]-lv5 ~26","power":"170","crit":"20%","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/dianlong/info/5-"+jianglevel+".png"},
          {"weapon":"飞龙刀[祖母绿]-lv6 ~28","power":"180","crit":"20%","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/dianlong/info/6-"+jianglevel+".png"},
          {"weapon":"飞龙刀[祖母绿]-lv7 ~30","power":"250","crit":"20%","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/dianlong/info/7-"+jianglevel+".png"},
          {"weapon":"飞龙刀[祖母绿]-lv8 ~32","power":"270","crit":"20%","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/dianlong/info/8-"+jianglevel+".png"},
          {"weapon":"真飞龙刀[亚历山]-lv9 ~35","power":"290","crit":"20%","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/dianlong/info/9-"+jianglevel+".png"}
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