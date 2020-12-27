// pages/component/component.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: [
      {
        name: "原创",
        id: 0,
        isActive: true
      },
      {
        name: "分类",
        id: 1,
        isActive: false
      },
      {
        name: "视频",
        id: 2,
        isActive: false
      },
      {
        name: "图片",
        id: 3,
        isActive: false
      }
    ]
  },

  itemChange(e) {
    const { index } = e.detail
    const { detail } = this.data
    detail.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false)
    this.setData({
      detail
    })
  }
})