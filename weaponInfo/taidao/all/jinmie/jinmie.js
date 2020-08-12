// weaponInfo/taidao/all/jinmie/jinmie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData:[
      {"weapon":"爆炎太刀-lv1 ~16","power":"170","crit":"5%","def":"-","hole":"-","jiang": "/weaponInfo/taidao/all/jinmie/info/1-jiang0.png"},
      {"weapon":"爆炎太刀-lv2 ~17","power":"170","crit":"5%","def":"-","hole":"-","jiang": "/weaponInfo/taidao/all/jinmie/info/2-jiang0.png"},
      {"weapon":"爆炎太刀-lv3 ~18","power":"170","crit":"5%","def":"-","hole":"-","jiang": "/weaponInfo/taidao/all/jinmie/info/3-jiang0.png"},
      {"weapon":"爆炎太刀-lv4 ~19","power":"180","crit":"5%","def":"-","hole":"-","jiang": "/weaponInfo/taidao/all/jinmie/info/4-jiang0.png"},
      {"weapon":"爆炎太刀-lv5 ~20","power":"180","crit":"5%","def":"-","hole":"-","jiang": "/weaponInfo/taidao/all/jinmie/info/5-jiang0.png"},
      {"weapon":"爆炎太刀-lv6 ~21","power":"180","crit":"5%","def":"-","hole":"-","jiang": "/weaponInfo/taidao/all/jinmie/info/6-jiang0.png"},
      {"weapon":"爆炎太刀-lv7 ~22","power":"190","crit":"5%","def":"-","hole":"-","jiang": "/weaponInfo/taidao/all/jinmie/info/7-jiang0.png"},
      {"weapon":"爆炎太刀-lv8 ~23","power":"190","crit":"5%","def":"-","hole":"-","jiang": "/weaponInfo/taidao/all/jinmie/info/8-jiang0.png"},
      {"weapon":"爆炎太刀-lv9 ~24","power":"190","crit":"5%","def":"-","hole":"-","jiang": "/weaponInfo/taidao/all/jinmie/info/9-jiang0.png"},
      {"weapon":"烬灭刃-lv10 ~25","power":"200","crit":"5%","def":"-","hole":"-","jiang": "/weaponInfo/taidao/all/jinmie/info/10-jiang0.png"},
      {"weapon":"烬灭刃-lv11 ~26","power":"260","crit":"5%","def":"-","hole":"-","jiang": "/weaponInfo/taidao/all/jinmie/info/11-jiang0.png"},
      {"weapon":"烬灭刃-lv12 ~27","power":"270","crit":"5%","def":"-","hole":"-","jiang": "/weaponInfo/taidao/all/jinmie/info/12-jiang0.png"},
      {"weapon":"烬灭刃-lv13 ~28","power":"280","crit":"5%","def":"-","hole":"-","jiang": "/weaponInfo/taidao/all/jinmie/info/13-jiang0.png"},
      {"weapon":"烬灭刃-lv14 ~29","power":"290","crit":"5%","def":"-","hole":"-","jiang": "/weaponInfo/taidao/all/jinmie/info/14-jiang0.png"},
      {"weapon":"真灭刃-lv15 ~30","power":"300","crit":"5%","def":"-","hole":"-","jiang": "/weaponInfo/taidao/all/jinmie/info/15-jiang0.png"}
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
          {"weapon":"爆炎太刀-lv1 ~16","power":"170","crit":"5%","def":"-","hole":"-","jiang": "/weaponInfo/taidao/all/jinmie/info/1-"+jianglevel+".png"},
          {"weapon":"爆炎太刀-lv2 ~17","power":"170","crit":"5%","def":"-","hole":"-","jiang": "/weaponInfo/taidao/all/jinmie/info/2-"+jianglevel+".png"},
          {"weapon":"爆炎太刀-lv3 ~18","power":"170","crit":"5%","def":"-","hole":"-","jiang": "/weaponInfo/taidao/all/jinmie/info/3-"+jianglevel+".png"},
          {"weapon":"爆炎太刀-lv4 ~19","power":"180","crit":"5%","def":"-","hole":"-","jiang": "/weaponInfo/taidao/all/jinmie/info/4-"+jianglevel+".png"},
          {"weapon":"爆炎太刀-lv5 ~20","power":"180","crit":"5%","def":"-","hole":"-","jiang": "/weaponInfo/taidao/all/jinmie/info/5-"+jianglevel+".png"},
          {"weapon":"爆炎太刀-lv6 ~21","power":"180","crit":"5%","def":"-","hole":"-","jiang": "/weaponInfo/taidao/all/jinmie/info/6-"+jianglevel+".png"},
          {"weapon":"爆炎太刀-lv7 ~22","power":"190","crit":"5%","def":"-","hole":"-","jiang": "/weaponInfo/taidao/all/jinmie/info/7-"+jianglevel+".png"},
          {"weapon":"爆炎太刀-lv8 ~23","power":"190","crit":"5%","def":"-","hole":"-","jiang": "/weaponInfo/taidao/all/jinmie/info/8-"+jianglevel+".png"},
          {"weapon":"爆炎太刀-lv9 ~24","power":"190","crit":"5%","def":"-","hole":"-","jiang": "/weaponInfo/taidao/all/jinmie/info/9-"+jianglevel+".png"},
          {"weapon":"烬灭刃-lv10 ~25","power":"200","crit":"5%","def":"-","hole":"-","jiang": "/weaponInfo/taidao/all/jinmie/info/10-"+jianglevel+".png"},
          {"weapon":"烬灭刃-lv11 ~26","power":"260","crit":"5%","def":"-","hole":"-","jiang": "/weaponInfo/taidao/all/jinmie/info/11-"+jianglevel+".png"},
          {"weapon":"烬灭刃-lv12 ~27","power":"270","crit":"5%","def":"-","hole":"-","jiang": "/weaponInfo/taidao/all/jinmie/info/12-"+jianglevel+".png"},
          {"weapon":"烬灭刃-lv13 ~28","power":"280","crit":"5%","def":"-","hole":"-","jiang": "/weaponInfo/taidao/all/jinmie/info/13-"+jianglevel+".png"},
          {"weapon":"烬灭刃-lv14 ~29","power":"290","crit":"5%","def":"-","hole":"-","jiang": "/weaponInfo/taidao/all/jinmie/info/14-"+jianglevel+".png"},
          {"weapon":"真灭刃-lv15 ~30","power":"300","crit":"5%","def":"-","hole":"-","jiang": "/weaponInfo/taidao/all/jinmie/info/15-"+jianglevel+".png"}
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