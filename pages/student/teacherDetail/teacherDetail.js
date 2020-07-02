// pages/student/teacherDetail/teacherDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: [
      { "code1": "周一晚上", "code2": "周二晚上", "code3": "周三晚上" },
      { "code1": "周四晚上", "code2": " ", "code3": "" },


    ]
  },
  onLoad: function () {
    console.log('onLoad')
  },
 adddetial: function () {
   wx.showToast({
     title: "预约成功",
   })

  },
  adddetial1: function () {
    wx.showToast({
      title: "加入成功",
    })

  },
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