$(function() {
	var bindManager = h5.core.data.createManager('BindManager');
	var bindModel = bindManager.createModel({
		name: 'BindModel',
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
		/*schema: {
			id: {
				id: true,
				type: 'integer'
			},	
			text: {
				type:'string'
			},
			time: {
				type:'string'
			}
		}*/
	});
	h5.u.obj.expose('bind', {
		BindModel: bindModel
	});
});