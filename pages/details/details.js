// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let itemName = options.id;
    let That = this;
    wx.request({
      url: 'http://apis.juhe.cn/rubbish/search',
      data:{
        key: 'ae200d60495f41dfb86da332dc059214',
        q: itemName,
        type:2
      },
      success(res){
        That.setData({
          item: res.data.result[0]
        })
      }
    })
  },
  toHome(){
    // wx.navigateTo({
    //   url: '../index/index',
    // })
    wx.navigateBack()
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