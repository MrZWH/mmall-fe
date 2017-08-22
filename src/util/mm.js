/*
 * @Author: whz 
 * @Date: 2017-08-22 17:04:47 
 * @Last Modified by: whz
 * @Last Modified time: 2017-08-22 17:47:11
 */
'use strict';
var Hogan = require('hogan');
var conf = {
    serverHost: ''
}
var _mm = {
    request: function(param) {
        var _this = this;
        $.ajax({
            type: param.method || 'get',
            url: param.url || '',
            dataType: param.type || 'json',
            data: param.data || '',
            success : function(res) {
                if (res.status === 0) {
                    typeof param.success === 'function' && param.success(res.data, res.msg);
                } else if (res.status === 10) {
                    _this.doLogin();
                } else if (res.status === 1) {
                    typeof param.error === 'function' && param.error(res.msg);
                }
            },
            error: function(err) {
                typeof param.error === 'function' && param.error(err.statusText);
            }
        })
    },
    // 获取服务器地址
    getServerUrl: function(path) {
        return conf.serverHost + path;
    },
    // 获取url参数
    getUrlParam: function(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
        var result = window.location.search.substr(1).match(reg);
        return result ? decodeURIComponent(result[2]): null;
    },
    // 渲染html
    renderHtml: function(htmlTemplate, data) {
        var template = Hogan.compile(htmlTemplate),
            result = template.render(data);
        return result;
    },
    doLogin: function() {
        window.location.href = './login.html?redirect=' + encodeURIComponent(window.location.href);
    }
};

module.exports = _mm;