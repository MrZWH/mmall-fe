/*
 * @Author: whz 
 * @Date: 2017-08-24 10:20:43 
 * @Last Modified by: whz
 * @Last Modified time: 2017-08-24 10:33:57
 */

'use strict';

require('./index.css');
var navSide = require('page/common/nav-simple/index.js');
var _mm = require('util/mm.js');

$(function() {
    var type = _mm.getUrlParam('type') || 'default',
        $element = $('.' + type + '-success');

    // 显示对应的提示元素
    $element.show();
})