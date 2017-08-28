/*
 * @Author: whz 
 * @Date: 2017-08-25 15:43:01 
 * @Last Modified by: whz
 * @Last Modified time: 2017-08-28 14:37:41
 */

 'use strict';

require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var _mm = require('util/mm.js');
var _product = require('service/product-service.js');
var Pagination = require('util/pagination/index.js');
var templateIndex = require('./index.string');

var page = {
    data: {
        listParam: {
            keyword: _mm.getUrlParam('keyword') || '',
            categoryId: _mm.getUrlParam('categoryId') || '',
            orderBy: _mm.getUrlParam('orderBy') || 'default',
            pageNum: _mm.getUrlParam('pageNum') || 1,
            pageSize: _mm.getUrlParam('pageSize') || 20
        }
    },
    init: function() {
        this.onLoad();
        this.bindEvent();
    },
    onLoad: function() {
        this.loadList();
    },
    bindEvent: function() {
        var _this = this;
        // 排序的点击事件
        $('.sort-item').click(function() {
            var $this = $(this);
            _this.data.listParam.pageNum = 1;
            // 点击默认排序
            if ($this.data('type') === 'default') {
                // 已经是active样式
                if ($this.hasClass('active')) {
                    return;
                } else {
                    $this.addClass('active').siblings('.sort-item')
                    .removeClass('active asc desc');
                    _this.data.listParam.orderBy = 'default';
                }
            } else if ($this.data('type') === 'price') {
                // active class 的处理
                $this.addClass('active').siblings('.sort-item')
                .removeClass('active asc desc');
                if(!$this.hasClass('asc')) {
                    $this.addClass('asc').removeClass('desc');
                    _this.data.listParam.orderBy = 'price_asc';
                } else {
                    $this.addClass('desc').removeClass('asc');
                    _this.data.listParam.orderBy = 'price_desc';
                }
            }
            // 重新加载列表
            _this.loadList();
        })

    },
    // 加载list数据
    loadList: function() {
        var listHtml = '',
            _this = this,
            listParam = this.data.listParam,
            $pListCon = $('.p-list-con');

        $pListCon.html('<div class="loading"></div>');

        // 删除参数中不必要的字段
        listParam.categoryId ? (delete listParam.keyword) : (delete listParam.categoryId);
        _product.getProductList(listParam, function(res) {
            listHtml = _mm.renderHtml(templateIndex, {
                list: res.list
            });
            $('.p-list-con').html(listHtml);
            _this.loadPagination({
                hasPreviousPage: res.hasPreviousPage,
                prePage: prePage,
                nextPage: res.nextPage,
                pageNum: res.pageNum,
                pages: res.pages
            });
        }, function(errMsg) {
            _mm.errorTips(errMsg);
        })
    },
    
    // 加载分页信息
    loadPagination: function(pageInfo) {
        this.pagination ? '' : (this.pagination = new Pagination());
        this.pagination.render
    }
}
$(function() {
    page.init();
})