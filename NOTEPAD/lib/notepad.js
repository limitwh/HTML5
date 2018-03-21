var todoManager = h5.core.data.createManager('ToDoManager');
var todoModel = todoManager.createModel({
    name: 'TodoModel',
    schema: {
        // ID
        id: {
            id: true,
            type: 'integer'
        },
        // 状态
        status: {
            type: 'boolean'
        },
        checked: {
            type: 'string',
            depend: {
                on: 'status',
                calc: function() {
                    return this.get('status') ? 'checked' : null;
                }
            }
        },
        // 内容
        content: {
            type: 'string'
        },
        // 内容 - 样式
        contentStyle: {
            type: 'string',
            depend: {
                on: 'status',
                calc: function() {
                    return this.get('status') ? 'line-through' : '';
                }
            }
        },
        // 登陆日
        insertDate: {
            type: 'number'
        },
        // 登陆日 - 详细表示用
        ymdhms: {
            type: 'string',
            depend: {
                on: 'insertDate',
                calc: function() {
                    return toYMDHMS(this.get('insertDate'));
                }
            }
        }
    }
});

// sample.todo.model.ToDoModel 暴露到全局中
h5.u.obj.expose('sample.todo.model', {
    ToDoModel: todoModel
});