$(function() {
	var bindManager = h5.core.data.createManager('BindManager');
	var bindModel = bindManager.createModel({
		name: 'BindModel',
		schema: {
			id: {
				id: true,
				type: 'integer'
			},	
			text: {
				typy:'string'
			},
			time: {
				typy:'string'
			}
		}
	});
	h5.u.obj.expose('bind', {
		BindModel: bindModel
	});
});