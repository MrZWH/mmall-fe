/*
 * @Author: whz 
 * @Date: 2017-08-22 10:12:02 
 * @Last Modified by: whz
 * @Last Modified time: 2017-08-25 15:36:02
 */
'use strict';
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
require('util/slider/index.js');
var navSide = require('page/common/nav-side/index.js');
var templateBanner = require('./banner.string');
var _mm = require('util/mm.js');

$(function() {

    // 渲染banner的html
    var bannerHtml = _mm.renderHtml(templateBanner);
    $('.banner-con').html(bannerHtml);

    // 初始化banner
    var $slider = $('.banner').unslider({
        dots: true,
    });

    // 前一张后一张事件绑定
    $('.banner-con .banner-arrow').click(function() {
        var forward = $(this).hasClass('prev') ?  'prev' : 'next';
        $slider.data('unslider')[forward]();
    })
});

navSide.init({
    name: 'order-list'
})
