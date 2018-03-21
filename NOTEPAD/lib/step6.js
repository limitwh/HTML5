$(function() {  
    // 定义逻辑对象  
    calcLogic = {  
        __name: 'CalcLogic',  
   
        add: function(left, right) {  
            return left + right;  
        }  
    };  
   
    // 首先定义控制器对象
    var controller = {  
        // 控制器名  
        __name: 'CalcController',  
        // 定义逻辑 
        calcLogic: calcLogic,  
            
        '#calc click': function() {  
            //获取到左边的值 
            var left = this.$find('#left').val();  

            // 从字符串类型转换为数字类型，如果转换失败的话结束操作
            left = parseInt(left);
            if (isNaN(left)) {
                return;
            } 
            // 获取到右边的值
            var right = this.$find('#right').val();  
            
            // 从字符串类型转换为数字类型，如果转换失败的话结束操作
            right = parseInt(right);
            if (isNaN(right)) {
                return;
            } 

            // 给逻辑添加add方法  
            var ret = this.calcLogic.add(left, right);  
                
            // 把结果展示在画面上
            this.$find('#result').html(ret);  
        }  
    };  
    //将控制器绑定在id="container"的元素上
    h5.core.controller('#container', controller);  
}); 