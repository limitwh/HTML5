(function(){
	'use strict';
    var topLogic={
        __name:"topLogic",
        init:function(){
            console.log("topLogic init");
            var df = this.deferred();
            var that = this;

            $.ajax({
                url:'json/top.json',
                dataType:'json',
                cache:false,
                success:function(data){
                    for (var i = 0; i < data.length; i++) {

                    }
                    df.resolve();
                },
                error:function(){
                    alert("No data access!");
                }
            });
            console.log('init in logic');
            return df.promise();
        }
    }
    h5.core.expose(topLogic);
})()