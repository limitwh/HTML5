(function(){
	'use strict';
    var topLogic={
        __name:"topLogic",
        init:function(){
        },
        getMovieListData:function(url){
            var df=this.deferred();
            var result=null;
            this.getMovieData(url).done(function(data){
                if(typeof data==="object"){
                    result=data;
                }else{
                    result=JSON.parse(data);
                }
                df.resolve(result);
            }).fail(function(error){
                df.reject(error.message);
            })
            return df.promise()
        },
        getMovieData:function(url){
            var promise=h5.ajax(url,{
                type:"GET",
                dataType:"json",
            });
            return promise;
        }
    }
    h5.core.expose(topLogic);
})()