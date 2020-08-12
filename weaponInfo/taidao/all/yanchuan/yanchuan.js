// weaponInfo/yanchuan/yanchuan.js
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
      {"weapon":"涡纹鬼怀刃-lv1","power":"130","crit":"5%","def":"+5","hole":"-","jiang": "/weaponInfo/taidao/all/yanchuan/info/1-jiang0.png"},
      {"weapon":"涡纹鬼怀刃-lv2","power":"140","crit":"5%","def":"+5","hole":"-","jiang": "/weaponInfo/taidao/all/yanchuan/info/2-jiang0.png"},
      {"weapon":"涡纹鬼怀刃-lv3","power":"150","crit":"5%","def":"+5","hole":"-","jiang": "/weaponInfo/taidao/all/yanchuan/info/3-jiang0.png"},
      {"weapon":"涡纹鬼怀刃-lv4","power":"160","crit":"5%","def":"+5","hole":"-","jiang": "/weaponInfo/taidao/all/yanchuan/info/4-jiang0.png"},
      {"weapon":"涡纹鬼怀刃-lv5","power":"170","crit":"5%","def":"+5","hole":"-","jiang": "/weaponInfo/taidao/all/yanchuan/info/5-jiang0.png"},
      {"weapon":"涡纹鬼怀刃-lv6","power":"180","crit":"5%","def":"+5","hole":"-","jiang": "/weaponInfo/taidao/all/yanchuan/info/6-jiang0.png"},
      {"weapon":"涡纹鬼怀刃-lv7","power":"190","crit":"5%","def":"+5","hole":"-","jiang": "/weaponInfo/taidao/all/yanchuan/info/7-jiang0.png"},
      {"weapon":"涡纹鬼怀刃-lv8","power":"200","crit":"5%","def":"+5","hole":"-","jiang": "/weaponInfo/taidao/all/yanchuan/info/8-jiang0.png"},
      {"weapon":"涡纹鬼怀刃-lv9","power":"210","crit":"5%","def":"+5","hole":"-","jiang": "/weaponInfo/taidao/all/yanchuan/info/9-jiang0.png"},
      {"weapon":"涡纹鬼怀刃[逆臣]-lv10","power":"220","crit":"5%","def":"+5","hole":"-","jiang": "/weaponInfo/taidao/all/yanchuan/info/10-jiang0.png"},
      {"weapon":"涡纹鬼怀刃[逆臣]-lv11","power":"240","crit":"5%","def":"+10","hole":"-","jiang": "/weaponInfo/taidao/all/yanchuan/info/11-jiang0.png"},
      {"weapon":"涡纹鬼怀刃[逆臣]-lv12","power":"250","crit":"5%","def":"+10","hole":"-","jiang": "/weaponInfo/taidao/all/yanchuan/info/12-jiang0.png"},
      {"weapon":"涡纹鬼怀刃[逆臣]-lv13","power":"290","crit":"5%","def":"+15","hole":"-","jiang": "/weaponInfo/taidao/all/yanchuan/info/13-jiang0.png"},
      {"weapon":"涡纹鬼怀刃[逆臣]-lv14","power":"310","crit":"5%","def":"+15","hole":"-","jiang": "/weaponInfo/taidao/all/yanchuan/info/14-jiang0.png"},
      {"weapon":"涡纹鬼怀刃[以弱胜强]-lv15","power":"340","crit":"5%","def":"+15","hole":"-","jiang": "/weaponInfo/taidao/all/yanchuan/info/15-jiang0.png"}
    ]
  },
  radioChange(e){
      var jianglevel = e.detail.value 
      this.setData({
        listData:[
          {"weapon":"涡纹鬼怀刃-lv1","power":"130","crit":"5%","def":"+5","hole":"-","jiang": "/weaponInfo/taidao/all/yanchuan/info/1-"+jianglevel+".png"},
          {"weapon":"涡纹鬼怀刃-lv2","power":"140","crit":"5%","def":"+5","hole":"-","jiang": "/weaponInfo/taidao/all/yanchuan/info/2-"+jianglevel+".png"},
          {"weapon":"涡纹鬼怀刃-lv3","power":"150","crit":"5%","def":"+5","hole":"-","jiang": "/weaponInfo/taidao/all/yanchuan/info/3-"+jianglevel+".png"},
          {"weapon":"涡纹鬼怀刃-lv4","power":"160","crit":"5%","def":"+5","hole":"-","jiang": "/weaponInfo/taidao/all/yanchuan/info/4-"+jianglevel+".png"},
          {"weapon":"涡纹鬼怀刃-lv5","power":"170","crit":"5%","def":"+5","hole":"-","jiang": "/weaponInfo/taidao/all/yanchuan/info/5-"+jianglevel+".png"},
          {"weapon":"涡纹鬼怀刃-lv6","power":"180","crit":"5%","def":"+5","hole":"-","jiang": "/weaponInfo/taidao/all/yanchuan/info/6-"+jianglevel+".png"},
          {"weapon":"涡纹鬼怀刃-lv7","power":"190","crit":"5%","def":"+5","hole":"-","jiang": "/weaponInfo/taidao/all/yanchuan/info/7-"+jianglevel+".png"},
          {"weapon":"涡纹鬼怀刃-lv8","power":"200","crit":"5%","def":"+5","hole":"-","jiang": "/weaponInfo/taidao/all/yanchuan/info/8-"+jianglevel+".png"},
          {"weapon":"涡纹鬼怀刃-lv9","power":"210","crit":"5%","def":"+5","hole":"-","jiang": "/weaponInfo/taidao/all/yanchuan/info/9-"+jianglevel+".png"},
          {"weapon":"涡纹鬼怀刃[逆臣]-lv10","power":"220","crit":"5%","def":"+5","hole":"-","jiang": "/weaponInfo/taidao/all/yanchuan/info/10-"+jianglevel+".png"},
          {"weapon":"涡纹鬼怀刃[逆臣]-lv11","power":"240","crit":"5%","def":"+10","hole":"-","jiang": "/weaponInfo/taidao/all/yanchuan/info/11-"+jianglevel+".png"},
          {"weapon":"涡纹鬼怀刃[逆臣]-lv12","power":"250","crit":"5%","def":"+10","hole":"-","jiang": "/weaponInfo/taidao/all/yanchuan/info/12-"+jianglevel+".png"},
          {"weapon":"涡纹鬼怀刃[逆臣]-lv13","power":"290","crit":"5%","def":"+15","hole":"-","jiang": "/weaponInfo/taidao/all/yanchuan/info/13-"+jianglevel+".png"},
          {"weapon":"涡纹鬼怀刃[逆臣]-lv14","power":"310","crit":"5%","def":"+15","hole":"-","jiang": "/weaponInfo/taidao/all/yanchuan/info/14-"+jianglevel+".png"},
          {"weapon":"涡纹鬼怀刃[以弱胜强]-lv15","power":"340","crit":"5%","def":"+15","hole":"-","jiang": "/weaponInfo/taidao/all/yanchuan/info/15-"+jianglevel+".png"}
        ]
      })
  }
})