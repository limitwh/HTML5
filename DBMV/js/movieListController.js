(function(){
	'use strict';
	var movieListController = {
		__name:"movieListController",
		_topController:topController,

		init: function() {
			console.log("init");
			this._topController.init();
		},
		__ready:function(){
        	console.log('__ready');
        	this.init();
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