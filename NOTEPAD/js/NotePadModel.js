// HTML5/hifive 编程技术能力水平考试（编程题）

// 记事本 js文件 

// 请输入你的姓名：            
// 请输入考试日期：            

// 1. 这里创建了一个不完整的记事本数据模型，补充完成数据模型的创建。
// 2. 根据该数据模型，使用hifive框架的数据绑定等功能完成题目要求。
// 3. 根据自己的编程习惯以及hifive代码规范书写代码。（可新建新的js文件）

(function() {

	// dataManager
	var notePadManager = h5.core.data.createManager('NotePadManager');

	// dataModel
	var notePadModel = notePadManager.createModel({
		name: 'NodePadModel',
		schema: {
			// ID
			id: {
				id: true,
				type: 'integer'
			},
			// 状态（0：未完成，1：已完成，2：已取消）
			status: {
				type: 'integer'
			},
			// 内容
			content: {
				type: 'string'
			}

			// 添加属性，完成适当的数据模型，实现题目要求。



		}
	});

	// 公开
	h5.u.obj.expose('test.model', {
		NodePadModel: notePadModel
	});

})();