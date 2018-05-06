$(function () {
	$('#PWD1').keyup(function () {
		var pwd = $('#PWD1').val();
		StrSTS = PWDSTS(pwd);
		$('#PWDSts1').html(StrSTS);
	});

	$('#PWD2').keyup(function () {
		var pwd = $('#PWD2').val();
		StrSTS = PWDSTS(pwd);
		$('#PWDSts2').html(StrSTS);
	});

	function PWDSTS(PWD){
		var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g"); 
        var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g"); 
        var enoughRegex = new RegExp("(?=.{6,}).*", "g"); 
        var sts=0;
        if(enoughRegex.test(PWD)){
        	sts=sts+1;
        } 
        if(mediumRegex.test(PWD)){
        	sts=sts+1;
        }
        if (strongRegex.test(PWD)){
        	sts=sts+1;
        }
		switch (sts) {
			case (0):
				return "密码强度:弱";
				break;
			case (1):
				return "密码强度:弱";
				break;
			case (2):
				return "密码强度:中等";
				break;
			case (3):
				return "密码强度:强";
				break;
		}
	}
});