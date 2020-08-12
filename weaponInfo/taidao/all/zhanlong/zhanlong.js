// weaponInfo/taidao/all/zhanlong/zhanlong.js
// weaponInfo/youbiao/youbiao.js
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
          {"weapon":"灼炎太刀-lv1 ~15","power":"130","crit":"-","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/zhanlong/info/1-jiang0.png"},
          {"weapon":"灼炎太刀-lv2 ~18","power":"140","crit":"-","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/zhanlong/info/2-jiang0.png"},
          {"weapon":"灼炎太刀-lv3 ~20","power":"160","crit":"-","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/zhanlong/info/3-jiang0.png"},
          {"weapon":"灼炎太刀-lv4 ~22","power":"180","crit":"-","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/zhanlong/info/4-jiang0.png"},
          {"weapon":"灼炎太刀-lv5 ~24","power":"200","crit":"-","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/zhanlong/info/5-jiang0.png"},
          {"weapon":"斩龙刀-lv6 ~26","power":"210","crit":"-","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/zhanlong/info/6-jiang0.png"},
          {"weapon":"斩龙刀-lv7 ~28","power":"280","crit":"-","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/zhanlong/info/7-jiang0.png"},
          {"weapon":"斩龙刀-lv8 ~30","power":"300","crit":"-","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/zhanlong/info/8-jiang0.png"},
          {"weapon":"大斩龙刀-lv9 ~33","power":"320","crit":"-","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/zhanlong/info/9-jiang0.png"}
    ]
  },
  radioChange(e){
      var jianglevel = e.detail.value 
      this.setData({
        listData:[
          {"weapon":"灼炎太刀-lv1 ~15","power":"130","crit":"-","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/zhanlong/info/1-"+jianglevel+".png"},
          {"weapon":"灼炎太刀-lv2 ~18","power":"140","crit":"-","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/zhanlong/info/2-"+jianglevel+".png"},
          {"weapon":"灼炎太刀-lv3 ~20","power":"160","crit":"-","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/zhanlong/info/3-"+jianglevel+".png"},
          {"weapon":"灼炎太刀-lv4 ~22","power":"180","crit":"-","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/zhanlong/info/4-"+jianglevel+".png"},
          {"weapon":"灼炎太刀-lv5 ~24","power":"200","crit":"-","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/zhanlong/info/5-"+jianglevel+".png"},
          {"weapon":"斩龙刀-lv6 ~26","power":"210","crit":"-","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/zhanlong/info/6-"+jianglevel+".png"},
          {"weapon":"斩龙刀-lv7 ~28","power":"280","crit":"-","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/zhanlong/info/7-"+jianglevel+".png"},
          {"weapon":"斩龙刀-lv8 ~30","power":"300","crit":"-","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/zhanlong/info/8-"+jianglevel+".png"},
          {"weapon":"大斩龙刀-lv9 ~33","power":"320","crit":"-","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/zhanlong/info/9-"+jianglevel+".png"}
        ]
      })
  }
})