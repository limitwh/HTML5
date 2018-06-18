(function() {
	'use strict';
	var topController = {
		__name: "topController",
		TopLogic:topLogic,
		init: function() {
			console.log("topController init");
			this.TopLogic.init().done()
		}
	}
	h5.core.expose(topController);
})()