(function(){
	'use strict';
    var GET_MOVIE_PATH="json/page00";
    var ListLogic={
        __name:"ListLogic",
        init:function(){
            console.log("ListLogic init");
        },
        getBookListData:function(page){
            //page++;
            var url=GET_MOVIE_PATH+page+".json";
            var df=this.deferred();
            var result=null;
            this.getBookData(url).done(function(data){
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
        getBookData:function(url){
            var promise=h5.ajax(url,{
                type:"GET",
                dataType:"json",
            });
            return promise;
        }
    }
    h5.core.expose(ListLogic);
})()