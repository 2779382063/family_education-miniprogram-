// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user_Image: "/image/myhead.jpg",
    hasUserInfo:true,
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

  },

  to_service: function (e) {
    wx.navigateTo({
      url: '../service/service',
    })
  },
  to_opinion: function (e) {
    wx.navigateTo({
      url: '../opinion/opinion',
    })
  },
  to_student_identification: function (e) {
    wx.navigateTo({
      url: '../student/student-identification/student-identification',
    })
  },
  to_teacher_identification: function (e) {
    wx.navigateTo({
      url: '../teacher/teacher-identification/teacher-identification',
    })
  }
})
