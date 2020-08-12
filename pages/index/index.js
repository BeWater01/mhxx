//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    monsterButton:"怪物",
    weaponButton:"武器",
    skillButton:"技能"
  },
  jumpMonster(){
    wx.navigateTo({
      url: '/pages/monster/monster',
    })  
  },
  jumpWeapon(){
    wx.navigateTo({
      url: '/pages/weapon/weapon',
    }) 
  },
  jumpSkill(){
    wx.navigateTo({
      url: '/pages/skill/skill',
    }) 
  }

})
