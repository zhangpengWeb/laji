Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotSearch:[],
    searchResultDatas:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      let That = this;
      wx.request({
        url: 'http://apis.juhe.cn/rubbish/hotSearch',
        data:{
          key: 'ae200d60495f41dfb86da332dc059214',
        },
        success(res){
          That.setData({
            hotSearch: res.data.result
          })
        }
      })
    
  },
  toDetails(e){
    let title = e.currentTarget.dataset.title;
    wx.navigateTo({
      url: `../details/details?id=${title}`
    })
  },
  iptDetails(e){
    let That = this;
    let val = e.detail.value;
    if(val.length == 0){
      this.setData({
        searchResultDatas: []
      })
      return;
    }
    
    wx.request({
      url: 'http://apis.juhe.cn/rubbish/search',
      data:{
        key:"ae200d60495f41dfb86da332dc059214",
        q: val
      },
      success(res){
        That.setData({
          searchResultDatas: res.data.result
        })
      }
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