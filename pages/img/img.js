// pages/img/img.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: ["https://i0.hdslb.com/bfs/archive/d9e4408999df5279d55abf0ddae89bd312b4b6de.jpg@412w_232h_1c",
      "https://i0.hdslb.com/bfs/archive/46c4d0c1fe2201f336a19bd8c7e05ad638e77815.jpg@412w_232h_1c",
      "https://i0.hdslb.com/bfs/archive/d50f5594c09dcffbbfe3dc05f0548895e79dcbc9.jpg@206w_116h_1c_100q.jpg",
      "https://i0.hdslb.com/bfs/archive/0cdcdb2fe67dd860d56a29c73b399531130cc8cb.jpg@206w_116h_1c_100q.jpg",
      "https://i0.hdslb.com/bfs/archive/97191aee016852d65befdd47b23bc1fb915446af.jpg@206w_116h_1c_100q.jpg"]
  },
  isonload(e) {
    console.log(e.detail);
  },
  swiperChange(e) {
    const w = document.getElementsByTagName('swiper')
    console.log(w);
  },
  // change(e) {
  //   console.log(e);
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})