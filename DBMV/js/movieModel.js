(function(){
	var movieManger= h5.core.data.createManager('movieManger');
	var movieModel = movieManger.createModel({
		name:'movieModel',
		schema:{
			id:{
				id:true,
				type:'integer'
			},
			name:{
				type:'string'
			},
			year:{
				type:'string'
			},
			rate:{
				type:'string'
			},
			imgsrc:{
				type:'string'
			}
		}
	})
	h5.u.obj.expose('Movie',{MovieModel:movieModel});
})()