$(function() {  
    // 定义逻辑对象  
    addLogic = {  
        __name: 'AddLogic',  
   
        add: function(Item) {  
            return Item+"456";  
        }  
    };  
   
    // 首先定义控制器对象
    var AddController = {  
        // 控制器名  
        __name: 'AddController',  
        // 定义逻辑 
        addLogic: addLogic,  
            
        '#binditem mouseover': function() {  
             //var text = this.$find('#willdo').val();  
             //var ret = this.addLogic.add(text);  
             alert("ret");
        }  
    };  
    //将控制器绑定在id="subtext"的元素上
    h5.core.controller('#subtext', AddController);  
}); 