/*
 * @Author: whz 
 * @Date: 2017-08-25 10:23:50 
 * @Last Modified by: whz
 * @Last Modified time: 2017-08-25 10:45:53
 */

'use strict';

require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var navSide = require('page/common/nav-side/index.js');
var _mm = require('util/mm.js');
var _user = require('service/user-service.js');
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
        this.onLoad();
        this.bindEvent();
    },
    onLoad: function() {

        // 初始化左侧菜单
        navSide.init({
            name: 'user-pass-update'
        });

    },
    bindEvent: function() {
        var _this = this;
        // 点击提交按钮后的动作
        $(document).on('click', '.btn-submit', function() {
            var userInfo = {
                password: $.trim($('#password').val()),
                passwordNew: $.trim($('#passwordNew').val()),
                passwordConfirm: $.trim($('#passwordConfirm').val())
                },
                validateResult = _this.validateForm(userInfo);
                if(validateResult.status) {
                    _user.updatePassword({
                        passwordOld: userInfo.password,
                        passwordNew: userInfo.passwordNew
                    }, function(res, msg) {
                        _mm.successTips(msg);
                    }, function(errMsg) {
                        _mm.errorTips(errMsg);
                    });
                } else {
                    _mm.errorTips(validateResult.msg);
                }
        })
    },

    // 验证字段信息
    validateForm: function(formData) {
        var result = {
            status: false,
            msg: ''
        };

       // 验证密码是否为空
       if (!_mm.validate(formData.password, 'require')) {
        result.msg = '原密码不能为空';
        return result;
        };

        // 验证密码长度
        if (!formData.passwordNew || formData.passwordNew.length < 6) {
            result.msg = '密码长度不能少于6位';
            return result;
        };

        // 验证两次输入密码是否一致
        if (formData.passwordNew !== formData.passwordConfirm) {
            result.msg = '两次输入密码不一致';
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