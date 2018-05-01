    $(function () {
        $('form').bootstrapValidator({
　　　　　　message: 'This value is not valid',
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                loginame: {
                    message: '用户名验证失败',
                    validators: {
                        notEmpty: {
                            message: '用户名不能为空'
                        },
                        stringLength: {
                            min: 6,
                            max: 18,
                            message: '用户名长度必须在6到18位之间'
                        }
                    }
                },
                /*nickname: {
                    message: '昵称验证失败',
                    validators: {
                        notEmpty: {
                            message: '昵称不能为空'
                        },
                        stringLength: {
                            min: 6,
                            max: 18,
                            message: '用户名长度必须在6到18位之间'
                        }
                    }
                }*/
                loginemail: {
                    message: '昵称验证失败',
                    validators: {
                        notEmpty: {
                            message: '昵称不能为空'
                        },
                        emailAddress: {
                            message: '邮箱地址格式有误'
                        }
                    }
                }/*,
                password1: {
                    validators: {
                        notEmpty: {
                            message: '请填写密码'
                        },
                        stringLength: {
                            min: 6,
                            message: '密码不少于6位'
                        }
                    }
                },
                password2: {
                    validators: {
                        notEmpty: {
                            message: '请填写确认密码'
                        },
                        stringLength: {
                            min: 6,
                            message: '密码不少于6位'
                        },
                        identical: {
                            field: 'password1',
                            message: '确认密码与密码不一致'
                        }
                    }
                }*/
            }
    });
});