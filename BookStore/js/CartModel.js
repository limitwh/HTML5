$(function(){
	var cartManage = h5.core.data.createManager('CartManage');
	var cartModel = cartManage.createModel({
		name: 'CartModel',
		schema: {
			id: {
				id: true,
				type: 'integer'
			},
			name: {
				type: 'string'
			},
			count:{
				type: 'string'
			},
			price:{
				type: 'number'
			},
			totalprice:{
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
	h5.u.obj.expose('Cart',{CartModel:cartModel});
});