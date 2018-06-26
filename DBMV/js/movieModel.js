(function(){
	var movieManger= h5.core.data.createManager('movieManger');
	var movieModel = movieManger.createModel({
		name:'movieModel',
		schema: {
			// 条目id
			id: {
				id: true,
				type: 'string'
			},
			//条目页url
			alt: {
				type: 'string'
			},
			//主演
			casts: {
				//数组类型
				type: 'any[]'
			},
			//看过人数
			collect_count: {
				type: 'integer'
			},
			//导演
			directors: {
				type: 'any[]'
			},
			//影片类型
			genres: {
				type: 'any[]'
			},
			// movieName
			title: {
				type: 'string'
			},
			// movieImage
			images: {
				type: 'any'
			},
			//原名
			original_title: {
				type: 'string'
			},
			// 评分
			rating: {
				type: 'any'
			},
			//条目分类
			subtype: {
				type: 'string'
			},
			//年份
			year: {
				type: 'string'
			}
		}
	})
	h5.u.obj.expose('Movie',{MovieModel:movieModel});
})()