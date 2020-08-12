// weaponInfo/taidao/all/suilong/suilong.js
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
      {"weapon":"碎龙长剑-lv1 ~15","power":"130","crit":"-","def":"-","hole":"-","jiang": "/weaponInfo/taidao/all/suilong/info/1-jiang0.png"},
      {"weapon":"碎龙长剑-lv2 ~16","power":"140","crit":"-","def":"-","hole":"-","jiang": "/weaponInfo/taidao/all/suilong/info/2-jiang0.png"},
      {"weapon":"碎龙长剑-lv3 ~17","power":"160","crit":"-","def":"-","hole":"-","jiang": "/weaponInfo/taidao/all/suilong/info/3-jiang0.png"},
      {"weapon":"爆碎大刀-lv1 ~24","power":"150","crit":"-","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/suilong/info/4-jiang0.png"},
      {"weapon":"爆碎大刀-lv2 ~26","power":"160","crit":"-","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/suilong/info/5-jiang0.png"},
      {"weapon":"破岩爆破刀-lv3 ~28","power":"180","crit":"-","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/suilong/info/6-jiang0.png"},
      {"weapon":"碎光晓刀-lv1 ~36","power":"260","crit":"-","def":"-","hole":"2","jiang": "/weaponInfo/taidao/all/suilong/info/7-jiang0.png"},
      {"weapon":"碎光爆炎刀-lv2 ~38","power":"280","crit":"-","def":"-","hole":"2","jiang": "/weaponInfo/taidao/all/suilong/info/8-jiang0.png"},
      {"weapon":"碎光晓眩居合刀-lv3 ~40","power":"300","crit":"-","def":"-","hole":"2","jiang": "/weaponInfo/taidao/all/suilong/info/9-jiang0.png"}
    ]
  },
  radioChange(e){
      var jianglevel = e.detail.value
      this.setData({
        listData:[
          {"weapon":"碎龙长剑-lv1 ~15","power":"130","crit":"-","def":"-","hole":"-","jiang": "/weaponInfo/taidao/all/suilong/info/1-"+jianglevel+".png"},
          {"weapon":"碎龙长剑-lv2 ~16","power":"140","crit":"-","def":"-","hole":"-","jiang": "/weaponInfo/taidao/all/suilong/info/2-"+jianglevel+".png"},
          {"weapon":"碎龙长剑-lv3 ~17","power":"160","crit":"-","def":"-","hole":"-","jiang": "/weaponInfo/taidao/all/suilong/info/3-"+jianglevel+".png"},
          {"weapon":"爆碎大刀-lv1 ~24","power":"150","crit":"-","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/suilong/info/4-"+jianglevel+".png"},
          {"weapon":"爆碎大刀-lv2 ~26","power":"160","crit":"-","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/suilong/info/5-"+jianglevel+".png"},
          {"weapon":"破岩爆破刀-lv3 ~28","power":"180","crit":"-","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/suilong/info/6-"+jianglevel+".png"},
          {"weapon":"碎光晓刀-lv1 ~36","power":"260","crit":"-","def":"-","hole":"2","jiang": "/weaponInfo/taidao/all/suilong/info/7-"+jianglevel+".png"},
          {"weapon":"碎光爆炎刀-lv2 ~38","power":"280","crit":"-","def":"-","hole":"2","jiang": "/weaponInfo/taidao/all/suilong/info/8-"+jianglevel+".png"},
          {"weapon":"碎光晓眩居合刀-lv3 ~40","power":"300","crit":"-","def":"-","hole":"2","jiang": "/weaponInfo/taidao/all/suilong/info/9-"+jianglevel+".png"}
        ]
      })
  }
})