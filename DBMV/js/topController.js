/*(function() {
	'use strict';
	var topController = {
		__name: "topController",
		_topLogic:topLogic,

		init: function() {
			var that=this;
			//console.log("topController init");
			var topurl="https://api.douban.com/v2/movie/top250";
			this._topLogic.init(topurl);
			this.view.bind('#toplist', {
                    topMovies: that._topLogic.topAry
			});
		},
	}
	h5.core.expose(topController);
})()*/