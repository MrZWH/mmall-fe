/*
 * @Author: whz 
 * @Date: 2017-08-22 10:11:39 
 * @Last Modified by: whz
 * @Last Modified time: 2017-08-24 14:34:29
 */

'use strict';

require('./index.css');
var navSide = require('page/common/nav-simple/index.js');
var _user = require('service/user-service.js');
var _mm = require('util/mm.js');

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
        this.bindEvent();
    },
    bindEvent: function() {
        var _this = this;

        // 登录按钮的点击
        $('#submit').click(function() {
            _this.submit();
        });

        // 如果按下回车，也进行提交
        $('.user-content').keyup(function(e) {
            if(e.keyCode === 13) {
                _this.submit();
            }
        })
    },

    // 提交表单
    submit: function() {
        var formData = {
            username: $.trim($('#username').val()),
            password: $.trim($('#password').val())
            },
            validateResult = this.formValidate(formData);

        if (validateResult.status) {
            _user.login(formData, function(res) {
                window.location.href = _mm.getUrlParam('redirect') || './index.html'
            }, function(errMsg) {
                formError.show(errMsg);
            });
        } else {
            // 错误提示

            formError.show(validateResult.msg);
        }
    },
    // 表单字段的验证
    formValidate: function(formData) {
        var result = {
            status: false,
            msg: ''
        };

        if (!_mm.validate(formData.username, 'require')) {
            result.msg = '用户名不能为空';
            return result;
        };

        if (!_mm.validate(formData.password, 'require')) {
            result.msg = '密码不能为空';
            return result;
        };

        // 通过验证，返回正确提示
        result.status = true;
        result.msg = '验证通过';
        return result;
    }
};

$(function() {
    page.init();
})