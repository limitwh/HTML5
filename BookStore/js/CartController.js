(function(){
	'use strict';
	var cartController = {
		__name: "cartController",
		movieList: [],
		init: function() {
			console.log("init");
		},

		".searchbtn click": function(context, $el) {	
			console.log("cartController searchbtn");
		}
	}
	h5.core.expose(cartController);
})()