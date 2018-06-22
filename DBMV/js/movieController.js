(function() {
	'use strict';
	var movieController = {
		__name: "movieController",
		_movieLogic:movieLogic,

		init: function() {
			var that=this;
			that.topbind();
			that.combind();
			that.hotbind();
		},
		topbind:function(){
			var that=this;
			var topurl="https://api.douban.com/v2/movie/top250";
			this._movieLogic.gettop(topurl);
			this.view.bind('#toplist', {
                    topMovies: that._movieLogic.topAry
			});
		},
		hotbind:function(){
			var that=this;
			var hoturl="https://api.douban.com/v2/movie/in_theaters";
			this._movieLogic.gethot(hoturl);
			this.view.bind('#hotlist', {
                    hotMovies: that._movieLogic.hotAry
			});
		},
		combind:function(){
			var that=this;
			var comingurl="https://api.douban.com/v2/movie/coming_soon";
			this._movieLogic.getcoming(comingurl);
			this.view.bind('#cominglist', {
                    comingMovies: that._movieLogic.comingAry
			});
		}
	}
	h5.core.expose(movieController);
})()