(function(){
	'use strict'
	var NsMovieManager = h5.core.data.createManager('NsMovieManager');
	var NsMovieModel1 = NsMovieManager.createModel({
		name:'NsMovieModel1',
		schema: {
			// ID
			id: {
				id: true,
				type: 'integer'
			},
			//中文电影名
			MovieName:{
				type: 'string'
			},
			//电影原名
			original:{
				type: 'string'
			},
			//出品年份
			year:{
				type: 'string'
			},
			//海报地址
			images:{
				type: 'string'
			},
			//平均评分
			rating:{
				type: 'string'
			},
			//显示状态，0：未显示，1：以显示
			readType:{
				type: 'string'	
			}
		}
	});
	var NsMovieModel2 = NsMovieManager.createModel({
		name:'NsMovieModel2',
		schema: {
			// ID
			id: {
				id: true,
				type: 'integer'
			},
			//中文电影名
			MovieName:{
				type: 'string'
			},
			//电影原名
			original:{
				type: 'string'
			},
			//出品年份
			year:{
				type: 'string'
			},
			//海报地址
			images:{
				type: 'string'
			},
			//平均评分
			rating:{
				type: 'string'
			},
			//显示状态，0：未显示，1：以显示
			readType:{
				type: 'string'	
			}
		}
	});
	var NsMovieModel3 = NsMovieManager.createModel({
		name:'NsMovieModel3',
		schema: {
			// ID
			id: {
				id: true,
				type: 'integer'
			},
			//中文电影名
			MovieName:{
				type: 'string'
			},
			//电影原名
			original:{
				type: 'string'
			},
			//出品年份
			year:{
				type: 'string'
			},
			//海报地址
			images:{
				type: 'string'
			},
			//平均评分
			rating:{
				type: 'string'
			},
			//显示状态，0：未显示，1：以显示
			readType:{
				type: 'string'	
			}
		}
	});
	//公开
	h5.u.obj.expose('test.model',{
		NsMovieModel1:NsMovieModel1,
		NsMovieModel2:NsMovieModel2,
		NsMovieModel3:NsMovieModel3
	});
})();
