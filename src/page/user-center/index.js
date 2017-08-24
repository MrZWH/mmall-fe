/*
 * @Author: whz 
 * @Date: 2017-08-24 17:08:17 
 * @Last Modified by: whz
 * @Last Modified time: 2017-08-24 17:42:33
 */

'use strict';

require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var navSide = require('page/common/nav-side/index.js');
var _mm = require('util/mm.js');
var _user = require('service/user-service.js');
var templateIndex = require('./index.string');
// 表单里的错误提示
var formError = {
    show: function(errMsg) {
        $('.error-item').show().find('.err-msg').text(errMsg);
    },
    hide: function(errMsg) {
        $('.error-item').hide().find('.err-msg').text('');
    }
};

// page逻辑部分
var page = {
    init: function() {
        this.onLoad();
    },
    onLoad: function() {

        // 初始化左侧菜单
        navSide.init({
            name: 'user-center'
        });

        // 加载用户信息
        this.loadUserInfo();
    },

    // 加载用户信息
    loadUserInfo: function() {
        var userHtml = '';
        _user.getUserInfo(function(res) {
            userHtml = _mm.renderHtml(templateIndex, res);
            $('.panel-body').html(userHtml);
        }, function(errMsg) {
            _mm.errorTips(errMsg);
        });
    }

};

$(function() {
    page.init();
})