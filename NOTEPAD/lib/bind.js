var manager = h5.core.data.createManager('TestManager');

var model = manager.createModel({
    name: 'Bindtest',
    schema: {
        text: {
            id: true
        },
        time: {
            type: 'string'
        }
    }
});

var item = model.create({
        text: 'Bind Test',
        time: '2018'
});

h5.core.view.bind($('#todolist'),{
     title: 'data bind test',
     todoitem:item
 });