webpackJsonp([14],{0:function(e,r,t){e.exports=t(71)},2:function(e,r,t){"use strict";var s=t(1),o={login:function(e,r,t){s.request({url:s.getServerUrl("/user/login.do"),data:e,method:"POST",success:r,error:t})},checkUsername:function(e,r,t){s.request({url:s.getServerUrl("/user.check_valid.do"),data:{type:"username",str:e},method:"POST",success:r,error:t})},register:function(e,r,t){s.request({url:s.getServerUrl("/user/register.do"),data:e,method:"POST",success:r,error:t})},checkLogin:function(e,r){s.request({url:s.getServerUrl("/user/get_user_info.do"),method:"POST",success:e,error:r})},getQuestion:function(e,r,t){s.request({url:s.getServerUrl("/user/forget_get_question.do"),data:{username:e},method:"POST",success:r,error:t})},checkAnswer:function(e,r,t){s.request({url:s.getServerUrl("/user/forget_check_answer.do"),data:e,method:"POST",success:r,error:t})},resetPassword:function(e,r,t){s.request({url:s.getServerUrl("/user/forget_reset_password.do"),data:e,method:"POST",success:r,error:t})},getUserInfo:function(e,r){s.request({url:s.getServerUrl("/user/get_information.do"),method:"POST",success:e,error:r})},updateUserInfo:function(e,r,t){s.request({url:s.getServerUrl("/user/update_information.do"),data:e,method:"POST",success:r,error:t})},updatePassword:function(e,r,t){s.request({url:s.getServerUrl("/user/reset_password.do"),data:e,method:"POST",success:r,error:t})},logout:function(e,r){s.request({url:s.getServerUrl("/user/logout.do"),method:"POST",success:e,error:r})}};e.exports=o},11:function(e,r){},12:function(e,r,t){"use strict";t(11)},33:function(e,r){},71:function(e,r,t){"use strict";t(33);var s=(t(12),t(2)),o=t(1),u={show:function(e){$(".error-item").show().find(".err-msg").text(e)},hide:function(e){$(".error-item").hide().find(".err-msg").text("")}},n={init:function(){this.bindEvent()},bindEvent:function(){var e=this;$("#submit").click(function(){e.submit()}),$(".user-content").keyup(function(r){13===r.keyCode&&e.submit()})},submit:function(){var e={username:$.trim($("#username").val()),password:$.trim($("#password").val())},r=this.formValidate(e);r.status?s.login(e,function(e){window.location.href=o.getUrlParam("redirect")||"./index.html"},function(e){u.show(e)}):u.show(r.msg)},formValidate:function(e){var r={status:!1,msg:""};return o.validate(e.username,"require")?o.validate(e.password,"require")?(r.status=!0,r.msg="验证通过",r):(r.msg="密码不能为空",r):(r.msg="用户名不能为空",r)}};$(function(){n.init()})}});