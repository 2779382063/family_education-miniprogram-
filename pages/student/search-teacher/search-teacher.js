// pages/student/search-teacher/search-teacher.js
var util = require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 4,
    winWidth: 0,
    winHeight: 74,
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    imgUrls: [
      "/image/haibao/1.jpg",
      "/image/haibao/2.jpg",
      "/image/haibao/3.jpg",
      "/image/haibao/4.jpg"
    ],
    stars: [
      {
        //flag: 1,
        bgImg: "/image/zhujiemian/u86.png",
        bgfImg: "/image/zhujiemian/u82.png"
      },
      {
        flag: 1,
        bgImg: "/image/zhujiemian/u86.png",
        bgfImg: "/image/zhujiemian/u82.png"
      },
      {
        flag: 1,
        bgImg: "/image/zhujiemian/u86.png",
        bgfImg: "/image/zhujiemian/u82.png"
      },
      {
        flag: 1,
        bgImg: "/image/zhujiemian/u86.png",
        bgfImg: "/image/zhujiemian/u82.png"
      },
      {
        flag: 1,
        bgImg: "/image/zhujiemian/u86.png",
        bgfImg: "/image/zhujiemian/u82.png"
      }
    ]
  },
  /*score: function (e) {
    var that = this;
    for (var i = 0; i < that.data.stars.length; i++) {
      var allItem = 'stars[' + i + '].flag';
      that.setData({
        [allItem]: 1
      })
    }
    var index = e.currentTarget.dataset.index;
    for (var i = 0; i <= index; i++) {
      var item = 'stars[' + i + '].flag';
      that.setData({
        [item]: 2
      })
    }
  },*/
  switchNav: function (e) {
    var id = e.currentTarget.id;
    this.setData({ currentTab: id });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    var page = this;
    wx.getSystemInfo({
      success: function (res) {
        console.log(res);
        page.setData({ winWidth: res.windowWidth });
       
      }
    });
  },
  loadDetail:function(e)
  {
    var id=e.currentTarget.id;
    wx.navigateTo({
      url: '../teacherDetail/teacherDetail'//?id='+id,
    })
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