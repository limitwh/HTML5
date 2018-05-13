$(function(){
	var notePadManger= h5.core.data.createManager('NotePadManger');
	var notePadModel = notePadManger.createModel({
		name:'NotePadModel',
		schema:{
			id:{
				id:true,
				type:'integer'
			},
			status:{
				type:'integer'
			},
			content:{
				type:'string'
			},
			checked:{
				type:'boolean',
				depend:{
					on:'status',
					calc:function(){
						return this.get('status')>1 ? true:false;
					}
				}
			}
		}
	});
	h5.u.obj.expose('NotePad',{NotePadModel:notePadModel});
});