/*(function() {
	'use strict';
	var topController = {
		__name: "topController",
		_hotLogic:hotLogic,

		init: function() {
			var that=this;
			//console.log("topController init");
			var hoturl="https://api.douban.com/v2/movie/in_theaters";
			this._hotLogic.init(hoturl);
			this.view.bind('#hotlist', {
                    hotMovies: that._hotLogic.hotAry
			});
		},
	}
	h5.core.expose(topController);
})()*/