/*
 * @Author: whz 
 * @Date: 2017-08-31 13:28:23 
 * @Last Modified by: whz
 * @Last Modified time: 2017-08-31 16:50:24
 */

'use strict';

 var _mm = require('util/mm.js');

 var _address = {

    //  获取地址列表
    getAddressList: function(resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/shipping/list.do'),
            data: {
                pageSize: 50
            },
            success: resolve,
            error: reject
        });
    },
    // 新建收货地址
    save: function(addressInfo, resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/shipping/add.do'),
            data: addressInfo,
            success: resolve,
            error: reject
        });
    },
    // 更新地址
    update: function(addressInfo, resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/shipping/update.do'),
            data: addressInfo,
            success: resolve,
            error: reject
        });
    },
    // 删除收货人地址
    deleteAddress: function(shippingId, resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/shipping/del.do'),
            data: {
                shippingId: shippingId
            },
            success: resolve,
            error: reject
        });
    },
    // 获取单条地址信息
    getAddress: function(shippingId, resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/shipping/select.do'),
            data: {
                shippingId: shippingId
            },
            success: resolve,
            error: reject
        });
    },

 }

 module.exports = _address;