/*
 * @Author: whz 
 * @Date: 2017-08-22 17:04:47 
 * @Last Modified by: whz
 * @Last Modified time: 2017-08-23 10:38:47
 */
'use strict';
var Hogan = require('hogan.js')
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
    // 成功提示
    successTips: function(msg) {
        alert(msg || '操作成功')
    },
    // 错误提示
    errorTips: function(msg) {
        alert(msg || '操作失败')
    },
    // 字段验证，支持是否为空、手机、邮箱
    validate: function(value, type) {
        var value = $.trim(value);
        // 非空验证
        if (type === 'require') {
            return !!value
        }
        // 手机号验证
        if (type === 'phone') {
            return /^1\d{10}$/.test(value);
        }
        // 邮箱格式验证
        if (type === 'email') {
            return /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(value);
        }
    },
    // 统一登录处理
    doLogin: function() {
        window.location.href = './login.html?redirect=' + encodeURIComponent(window.location.href);
    },
    goHome: function() {
        window.location.href = './index.html';
    }
};

module.exports = _mm;