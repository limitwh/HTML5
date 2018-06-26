(function() {
	'use strict';
	// 各电影模块的类名  和HTML页面上的加载更多的自定义属性关联起来			
	var views = {
		'0': 'hotlist',
		'1': 'cominglist',
		'2': 'toplist'
	};
	var movieController = {
		__name: "movieController",
		_movieLogic: movieLogic,
		hotItems: null,
		comItems: null,
		topItems: null,
		__ready: function() {
			this.hotbind();
			this.combind();
			this.topbind();
		},
		hotbind: function() {
			var that = this;
			var hoturl = "https://api.douban.com/v2/movie/in_theaters";
			this._movieLogic.gethot(hoturl);
			this.hotItems = this._movieLogic.getHotArray();
			this.view.bind('#hotlist', {
				hotMovies: this.hotItems
			});
		},
		combind: function() {
			var that = this;
			var comingurl = "https://api.douban.com/v2/movie/coming_soon";
			this._movieLogic.getcoming(comingurl);
			this.comItems = this._movieLogic.getComArray();
			this.view.bind('#cominglist', {
				comingMovies: this.comItems
			});
		},
		topbind: function() {
			var that = this;
			var topurl = "https://api.douban.com/v2/movie/top250";
			this._movieLogic.gettop(topurl);
			this.topItems = this._movieLogic.getTopArray();
			this.view.bind('#toplist', {
				topMovies: this.topItems
			});
		},
		// 获取电影选项,和上面的views相对应起来，供后面转换视图的时候调用
		getOption: function(num) {
			var option = '';
			switch(num) {
				case 0:
					option = 'hotlist';
					break;
				case 1:
					option = 'cominglist';
					break;
				case 2:
					option = 'toplist';
					break;
			}
			return option;
		},
		// 转换视图 参数为数字                 起始的位置  要去的位置根据下标
		switchView: function(from, to) {
			if(from === to) {
				return;
			}
			//获取对应电影信息数组
			var option = this.getOption(to);
			var $from = this.$find('#' + views[from]);
			var $to = this.$find('#' + views[to]);
			//视图绑定
			this.viewTransition($from, $to);
		},
		// 模块移动
		viewTransition: function($from, $to) {
			// 模块移出，当前页面上显示的
			$from.animate({
				left: '-220px'
			}, 1500);
			// 模块移入，页面外的移入			
			$to.animate({
				left: '50%'
			}, 1500);
		},
		// 导航栏点击事件
		'.nav click': function(context, $el) {
			console.log(context)
			// 选中标签样式调整   点击之前                                             call方法  调用一个对象的一个方法，用另一个对象替换当前对象。例如：B.call(A, args1,args2);即A对象调用B对象的方法。
			//导航栏的li调用数组的indexOf方法 indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。 返回当前带有.selected类的字符串在lis中存在的下标
			var from = Array.prototype.indexOf.call(this.$find('li a'), this.$find('.selected')[0]);
			this.$find('li a').removeClass('selected');
			var $selected = this.$find(context.event.target);
			$selected.addClass('selected');
			//返回当前点击的那个列头在总列头中的下标
			var to = Array.prototype.indexOf.call(this.$find('li a'), context.event.target);
			// 绑定内容更新
			this.switchView(from, to);
		}
	}
	h5.core.expose(movieController);
})()