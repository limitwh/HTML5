    $(function () {
        $('form').bootstrapValidator({
　　　　　　message: 'This value is not valid',
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                Password1: {
                    validators: {
                        notEmpty: {
                            message: '请填写密码'
                        },
                        stringLength: {
                            min: 8,
                            mix: 20,
                            message: '密长度码在8到12位之间'
                        },
                        identical: {
                            field: 'Password2',
                            message: '两次输入的密码不一致'
                        }
                    }
                },
                Password2: {
                    validators: {
                        notEmpty: {
                            message: '请填写确认密码'
                        },
                        stringLength: {
                            min: 8,
                            mix: 20,
                            message: '密长度码在8到12位之间'
                        },
                        identical: {
                            field: 'Password1',
                            message: '两次输入的密码不一致'
                        }
                    }
                }
            },
    });


});

    function myFunction() {
        var x = document.getElementById("pbar").value;
        document.getElementById("demo").innerHTML = "你输入的是: " + x;
    }