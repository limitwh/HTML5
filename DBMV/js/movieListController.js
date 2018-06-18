(function(){
	'use strict';
	var movieListController = {
		__name: "movieListController",

		init: function() {
			console.log("init");
		},
		__ready:function(){
        	console.log('__ready');
        	$("#toplist").hide();
        	$("#cominglist").hide();
			$("#hotlist").show();
		},
	    '#hot click': function(context) {
        	console.log('hot click');
        	$("#toplist").hide();
        	$("#cominglist").hide();
			$("#hotlist").show();
    	},
	    '#coming click': function(context) {
        	console.log('coming click');
        	$("#toplist").hide();
        	$("#cominglist").show();
			$("#hotlist").hide();
    	},
	    '#top click': function(context) {
        	console.log('top click');
        	$("#toplist").show();
        	$("#cominglist").hide();
			$("#hotlist").hide();
    	},	
	}
	h5.core.expose(movieListController);
})()