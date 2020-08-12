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
      {"weapon":"测定未解之太刀-lv1","power":"180","crit":"15%","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/youbiao/info/1-jiang0.png"},
      {"weapon":"久经钻研之龙识刀-lv2","power":"200","crit":"15%","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/youbiao/info/2-jiang0.png"},
      {"weapon":"久经钻研之龙识刀-lv3","power":"230","crit":"20%","def":"-","hole":"2","jiang": "/weaponInfo/taidao/all/youbiao/info/3-jiang0.png"},
      {"weapon":"久经钻研之龙识刀-lv4","power":"280","crit":"20%","def":"-","hole":"2","jiang": "/weaponInfo/taidao/all/youbiao/info/4-jiang0.png"},
      {"weapon":"龙识究极刀-lv5","power":"300","crit":"25%","def":"-","hole":"3","jiang": "/weaponInfo/taidao/all/youbiao/info/5-jiang0.png"}
    ]
  },
  radioChange(e){
      var jianglevel = e.detail.value 
      this.setData({
        listData:[
          {"weapon":"测定未解之太刀-lv1","power":"180","crit":"15%","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/youbiao/info/1-"+jianglevel+".png"},
          {"weapon":"久经钻研之龙识刀-lv2","power":"200","crit":"15%","def":"-","hole":"1","jiang": "/weaponInfo/taidao/all/youbiao/info/2-"+jianglevel+".png"},
          {"weapon":"久经钻研之龙识刀-lv3","power":"230","crit":"20%","def":"-","hole":"2","jiang": "/weaponInfo/taidao/all/youbiao/info/3-"+jianglevel+".png"},
          {"weapon":"久经钻研之龙识刀-lv4","power":"280","crit":"20%","def":"-","hole":"2","jiang": "/weaponInfo/taidao/all/youbiao/info/4-"+jianglevel+".png"},
          {"weapon":"龙识究极刀-lv5","power":"300","crit":"25%","def":"-","hole":"3","jiang": "/weaponInfo/taidao/all/youbiao/info/5-"+jianglevel+".png"}
        ]
      })
  }
})