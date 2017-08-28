/*
 * @Author: whz 
 * @Date: 2017-08-28 14:38:24 
 * @Last Modified by: whz
 * @Last Modified time: 2017-08-28 17:41:30
 */

'use strict';
require('./index.css');
var templatePagination = require('./index.string');

var Pagination = function() {
    this.defaultOption = {
        container: null,
        pageNum: 1,
        pageRange: 3,
        onSelectPage: null
    };
}

// 渲染分页组件
Pagination.prototype.render = function(userOption) {
    this.option = $.extend({}, this.defaultOption, userOption);
    // 合法的jQuery对象
    if (!this.option.container instanceof JQuery) {
        return;
    };

    // 是否只有1页
    if (!this.option.pages == 1) {
        return;
    };

    // 渲染分页内容
    this.option.container.html(this.getPaginationHtml());
};

// 获取分页的html
Pagination.prototype.getPaginationHtml = function() {
    var html = '',
        pageArray = [];
    pageArray.push({
        
    })
};