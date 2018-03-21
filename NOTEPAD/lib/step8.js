$(function() {  
	calLogicMa={
		__name : 'CalLogicMa',
		mal: function(left, right) {  
            return left - right;  
        }
	};

	calLogicchu={
		__name : 'CalLogicChu',
		chu: function(left, right) {  
            return left / right;  
        }
	};

	var controllerMa ={
		__name : 'CalcControllerMa',
		calLogicMa: calLogicMa,  
		'#calc2 click': function() { 
			var left = this.$find('#left2').val();

			left = parseInt(left);
            if (isNaN(left)) {
                return;
            } 

			var right = this.$find('#right2').val();

			right = parseInt(right);
            if (isNaN(right)) {
                return;
            }

            var ret = this.calLogicMa.mal(left, right);  
            this.$find('#result2').html(ret);  
		}
	};

        var controllerchu ={
        	__name :'CalcControllerChu',
			calLogicchu: calLogicchu,
			'#calc2 mouseover': function() { 
				var left = this.$find('#left2').val();

				left = parseInt(left);
            	if (isNaN(left)) {
            	    return;
	            } 

			var right = this.$find('#right2').val();

			right = parseInt(right);
            if (isNaN(right)) {
                return;
            }
            var ret = this.calLogicchu.chu(left, right);  
            this.$find('#result2').html(ret);  

        }
	};

	h5.core.controller('#containerMa', controllerMa);  
	h5.core.controller('#containerMa', controllerchu);  
});