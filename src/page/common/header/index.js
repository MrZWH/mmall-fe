/*
 * @Author: whz 
 * @Date: 2017-08-23 14:48:52 
 * @Last Modified by: whz
 * @Last Modified time: 2017-08-23 15:15:11
 */
'use strict'; 

require('./index.css');

var _mm = require('util/mm.js');

// 通用页面头部
var header = {
    init: function() {
        this.bindEvent();
    },
    onLoad: function() {
        var keyword = _nn.getUrlParam('keyword');
        if (keyword) {
            $('#search-input').val(keyword);
        };
    },
    bindEvent: function() {
        var _this = this;
        // 点击搜索按钮以后，搜索提交
        $('#search-btn').click(function() {
            _this.searchSubmit();
        });
        // 输入回车后执行搜索提交
        $('#search-input').keyup(function(e) {
            if (e.keyCode === 13) {
                _this.searchSubmit();
            };
        })
    },
    // 搜索的提交
    searchSubmit: function() {
        var keyword = $.trim($('#search-input').val());
        if(keyword) {
            window.location.href = './list.html?keyword=' + keyword;
        } else {
            _mm.goHome();
        }
    }
};

header.init();