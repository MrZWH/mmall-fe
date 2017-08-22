/*
 * @Author: whz 
 * @Date: 2017-08-22 10:12:02 
 * @Last Modified by: whz
 * @Last Modified time: 2017-08-22 17:49:02
 */
'use strict';
var _mm = require('util/mm.js');

var html = '<div>{{data}}</div>';
var data = {
    data: 123
}
console.log(_mm.renderHtml(html, data));