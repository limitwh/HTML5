(function() {
	'use strict';
	var movieListController = {
		__name: "movieListController",
		_movieController: movieController,

		init: function() {
			this._movieController.init();
		},
		__ready: function() {
			this.init();
//			$("#toplist").hide();
//			$("#cominglist").hide();
//			$("#hotlist").show();
		}
	
	}
	h5.core.expose(movieListController);
})()