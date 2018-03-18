var SAMPLE_DATA_FILEPATH='sample.json'
var todoLogic = {
	__name: 'exercise.todo.logic.TodoLogic',
	model : exercise.todo.model.ToDoModel
	todos: h5.core.data.createObservableArray(),
	detail : h5.core.data.createObservableArray(),
	init: function() {
    var df = this.deferred();
    var that = this;
    $.ajax({
            url: SAMPLE_DATA_FILEPATH,
            dataType: 'json',
            cache: false,
            success: function(data) {
                var dataItems = that.model.create(data);
                that.todos.copyFrom(dataItems);
                df.resolve(that.todos);
            },
            error: function() {
                alert('读取sample数据失败');
            }
        });
     return df.promise();
	},

	getItem: function(id) {
        return this.model.get(id);
    },

    add: function(content) {
        var item = this.model.create({
            id: this._getNewId(),
            status: false,
            content: content,
            insertDate: +new Date()
        });
        this.todos.push(item);
    },

    remove: function(id) {
        for ( var i = 0, len = this.todos.length; i < len; i++) {
            var item = this.todos[i];
            var itemId = item.get('id');

            if (itemId === id) {
                this.model.remove(id);
                this.todos.splice(i, 1);
                this.detail.pop();
                break;
            }
        }
    },

    update: function(id, data) {
        var item = this.model.get(id);
        item.set(data);
    },

    _getNewId: function() {
        for ( var i = 1;; i++) {
            if (!this.model.has(i)) {
                return i;
            }
        }
    }

    getDetail: function(id) {
        var item = this.model.get(id);
        this.detail.splice(0, 1, item);
        return this.detail;
    },

};

// exercise.todo.logic.ToDoLogic 暴露到全局中
h5.core.expose(todoLogic);