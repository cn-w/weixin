// components/tabs/tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    detail: {
      type: Array,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // detail: [
    //   {
    //     name: "原创",
    //     id: 0,
    //     isActive: true
    //   },
    //   {
    //     name: "分类",
    //     id: 1,
    //     isActive: false
    //   },
    //   {
    //     name: "视频",
    //     id: 2,
    //     isActive: false
    //   },
    //   {
    //     name: "图片",
    //     id: 3,
    //     isActive: false
    //   }
    // ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabsClick(e) {

      // // console.log(e.currentTarget.dataset.index);
      // const index = e.currentTarget.dataset.index
      // // 深拷贝
      // let detail = JSON.parse(JSON.stringify(this.data.detail))
      // // let { detail } = this.data
      // detail.forEach((v, i) => { i === index ? v.isActive = true : v.isActive = false })
      // this.setData({
      //   detail
      // })

      const index = e.currentTarget.dataset.index
      this.triggerEvent('itemChange', { index })


    }
  }
})
