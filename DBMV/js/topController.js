(function() {
	'use strict';
	var topController = {
		__name: "topController",
		_topLogic:topLogic,
		movielistarray:[],

		init: function() {
			console.log("topController init");
			var hoturl="https://api.douban.com/v2/movie/in_theaters";
			var url="json/top.json";
			this._topLogic.init(url);
			//this._topLogic.getMovieListData(url).done(this.own(this.show));
		},
		show:function(list){
			//this.movielistarray=this.movielistarray.concat(list);
			//for (var i = 0; i < list.length; i++) {
				console.log(list.subjects);
			//};
		}
	}
	h5.core.expose(topController);
})()