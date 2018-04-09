$(function(){
	var bookManage = h5.core.data.createManager('BookManage');
	var bookModel = bookManage.createModel({
		name: 'BookModel',
		schema: {
			id: {
				id: true,
				type: 'integer'
			},
			name: {
				type: 'string'
			},
			desc:{
				type: 'string'
			},
			price:{
				type: 'number'
			},
			img: {
				type: 'string'
			},
			category:{
				type: 'string'
			}
		}
	});
	h5.u.obj.expose('Book',{BookModel:bookModel});
});