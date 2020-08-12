// pages/weapon/weapon.js
Page({

  jumpDajian(){
    wx.navigateTo({
      url: '../../weaponInfo/dajian/dajian'
    })
  },
  jumpTaidao(){
    wx.navigateTo({
      url: '../../weaponInfo/taidao/taidao'
    })
  },
  jumpPianshou(){
    wx.navigateTo({
      url: '../../weaponInfo/pianshou/pianshou'
    })
  },
  jumpDunfu(){
    wx.navigateTo({
      url: '../../weaponInfo/dunfu/dunfu'
    })
  },
  jumpShuangdao(){
    wx.navigateTo({
      url: '../../weaponInfo/shuangdao/shuangdao'
    })
  },
  jumpGong(){
    wx.navigateTo({
      url: '../../weaponInfo/gong/gong'
    })
  }
})