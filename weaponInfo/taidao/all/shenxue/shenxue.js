// weaponInfo/taidao/all/shenxue/shenxue.js
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
      {"weapon":"冰刃[冻华]-lv1 ~15","power":"90","crit":"-","def":"-","hole":"-","jiang": "/weaponInfo/taidao/all/shenxue/info/1-jiang0.png"},
      {"weapon":"冰刃[冻华]-lv2 ~18","power":"130","crit":"-","def":"-","hole":"-","jiang": "/weaponInfo/taidao/all/shenxue/info/2-jiang0.png"},
      {"weapon":"冰刃[冻华]-lv3 ~22","power":"140","crit":"-","def":"-","hole":"-","jiang": "/weaponInfo/taidao/all/shenxue/info/3-jiang0.png"},
      {"weapon":"雪一文字-lv1 ~38","power":"140","crit":"10%","def":"-","hole":"3","jiang": "/weaponInfo/taidao/all/shenxue/info/4-jiang0.png"},
      {"weapon":"雪一文字-lv2 ~40","power":"150","crit":"10%","def":"-","hole":"3","jiang": "/weaponInfo/taidao/all/shenxue/info/5-jiang0.png"},
      {"weapon":"雪一文字[银世界]-lv3 ~44","power":"170","crit":"15%","def":"-","hole":"3","jiang": "/weaponInfo/taidao/all/shenxue/info/6-jiang0.png"},
      {"weapon":"雪一文字[银世界]-lv4 ~46","power":"230","crit":"15%","def":"-","hole":"3","jiang": "/weaponInfo/taidao/all/shenxue/info/7-jiang0.png"},
      {"weapon":"雪一文字[幻日]-lv5 ~48","power":"290","crit":"15%","def":"-","hole":"3","jiang": "/weaponInfo/taidao/all/shenxue/info/8-jiang0.png"}
    ]
  },
  radioChange(e){
      var jianglevel = e.detail.value
      this.setData({
        listData:[
          {"weapon":"冰刃[冻华]-lv1 ~15","power":"90","crit":"-","def":"-","hole":"-","jiang": "/weaponInfo/taidao/all/shenxue/info/1-"+jianglevel+".png"},
          {"weapon":"冰刃[冻华]-lv2 ~18","power":"130","crit":"-","def":"-","hole":"-","jiang": "/weaponInfo/taidao/all/shenxue/info/2-"+jianglevel+".png"},
          {"weapon":"冰刃[冻华]-lv3 ~22","power":"140","crit":"-","def":"-","hole":"-","jiang": "/weaponInfo/taidao/all/shenxue/info/3-"+jianglevel+".png"},
          {"weapon":"雪一文字-lv1 ~38","power":"140","crit":"10%","def":"-","hole":"3","jiang": "/weaponInfo/taidao/all/shenxue/info/4-"+jianglevel+".png"},
          {"weapon":"雪一文字-lv2 ~40","power":"150","crit":"10%","def":"-","hole":"3","jiang": "/weaponInfo/taidao/all/shenxue/info/5-"+jianglevel+".png"},
          {"weapon":"雪一文字[银世界]-lv3 ~44","power":"170","crit":"15%","def":"-","hole":"3","jiang": "/weaponInfo/taidao/all/shenxue/info/6-"+jianglevel+".png"},
          {"weapon":"雪一文字[银世界]-lv4 ~46","power":"230","crit":"15%","def":"-","hole":"3","jiang": "/weaponInfo/taidao/all/shenxue/info/7-"+jianglevel+".png"},
          {"weapon":"雪一文字[幻日]-lv5 ~48","power":"290","crit":"15%","def":"-","hole":"3","jiang": "/weaponInfo/taidao/all/shenxue/info/8-"+jianglevel+".png"}
        ]
      })
  }
})