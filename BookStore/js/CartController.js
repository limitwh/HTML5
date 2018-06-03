(function(){
	'use strict';
	var cartController = {
		__name: "cartController",
		cartList: [],
		cartnum:1,

		init: function() {
			console.log("init");
			$(".Item").remove();
			for (var i = 0; i < this.cartList.length; i++) {
				$(".Cart").append("<p class='Item'>"+this.cartList[i].title+"</p>");
				console.log(this.cartList[i]);
			}
		},
		addtocart:function($el){
			$("#cartnum").empty();
			$("#cartnum").append(this.cartnum++);
			this.cartList.push($el);
			this.init();
		},
		'#icon click':function(){
			$(".Cart").css("left","0%");
			$(".leftdiv").hide();
		},
		'#returnbtn click':function(){
			$(".Cart").css("left","-38%");
			$(".leftdiv").show();
		}
	}
	h5.core.expose(cartController);
})()