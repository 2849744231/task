// pages/work/work.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 这里，应该是后端的给的数据，这里用前端补充了
        swiperImgList:[
            {imageUrl:"/images/swImg/sw1.jpg"},
            {imageUrl:"/images/swImg/sw2.jpeg"},
            {imageUrl:"/images/swImg/sw1.jpg"},
            {imageUrl:"/images/swImg/sw2.jpeg"},
        ],
        menu123:[
            {imageUrl:"/images/menu123/mu1.jpg"},
            {imageUrl:"/images/menu123/mu2.jpg"},
            {imageUrl:"/images/menu123/mu3.jpg"},
            {imageUrl:"/images/menu123/mu4.jpg"},
            {imageUrl:"/images/menu123/mu5.jpg"}
        ],
        menuABC:[
            {imageUrl:"/images/menuABC/mu1.jpg",ABC:"A"},
            {imageUrl:"/images/menuABC/mu2.jpg",ABC:"B"},
            {imageUrl:"/images/menuABC/mu3.jpg",ABC:"C"},
            {imageUrl:"/images/menuABC/mu4.jpg",ABC:"D"},
            {imageUrl:"/images/menuABC/mu5.jpg",ABC:"E"},
            {imageUrl:"/images/menuABC/mu6.jpg",ABC:"F"},
            {imageUrl:"/images/menuABC/mu7.jpg",ABC:"G"},
            {imageUrl:"/images/menuABC/mu8.jpg",ABC:"H"},
            {imageUrl:"/images/menuABC/mu9.jpg",ABC:"I"},
            {imageUrl:"/images/menuABC/mu10.jpg",ABC:"J"},
        ]                 
    },
    tapView(e){
        console.log(e.target.dataset)
        wx.navigateTo({
            url: '/pages/mu/mu'
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