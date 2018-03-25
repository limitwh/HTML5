(function() {

	// dataManager
	var notePadManager = h5.core.data.createManager('NotePadManager');

	// dataModel
	var notePadModel = notePadManager.createModel({
		name: 'NotePadModel',
		schema: {
			// ID
			id: {
				id: true,
				type: 'integer'
			},	
			// 状态（0：未完成，1：已完成，2：已取消）
			checked: {
				tpye: 'boolean',
				depend: {
	                on: 'status',
	                calc: function() {
	                    return this.get('status') == '1' ? 'true' : null;
	                }
	            }
			},
			status: {
				type: 'string'
			},
			// 内容
			content: {
				type: 'string'
			},
			// 样式
			contentStyle: {
				type: 'string',
				depend: {
	                on: 'status',
	                calc: function() {
	                    return this.get('status') == '2' ? 'line-through' : '';
	                }
	            }
			}
		}
	});

	// 公开
	h5.u.obj.expose('ex', {
		NotePadModel: notePadModel
	});

})();