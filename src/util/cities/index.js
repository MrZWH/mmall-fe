/*
 * @Author: whz 
 * @Date: 2017-08-31 14:57:15 
 * @Last Modified by: whz
 * @Last Modified time: 2017-08-31 15:28:28
 */

'use strict';

var _cities = {
    cityInfo: {
        '北京': ['北京'],
        '上海': ['上海'],
        '天津': ['天津'],
        '重庆': ['重庆']
    },
    // 获取所有省份
    getProvinces: function() {
        var provinces =[];
        for(var item in this.cityInfo) {
            provinces.push(item);
        }
        return provinces;
    },
    // 获取某省份的所有城市
    getCities: function(provinceName) {
        return this.cityInfo[provinceName] || [];
    }
}

module.exports = _cities;