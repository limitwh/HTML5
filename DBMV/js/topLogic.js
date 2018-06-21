(function(){
	'use strict';
    var topLogic={
        __name:"topLogic",
        model:Movie.MovieModel,

        topAry:h5.core.data.createObservableArray(),

        init:function(url){
            //console.log("topLogic init");
            this.getMovieListData(url).done(this.own(this.pushtoary));
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
            var promise=h5.ajax(
                url,{
                    type:"GET",
                    dataType:"jsonp",
                    jsonp:"callback",
                });
            return promise;
            /*var promise=h5.ajax(
                url,{
                    type:"GET",
                    dataType:"json",
                });*/
        },
        pushtoary:function(list){
            var that=this;
            for (var i = 0; i < list.subjects.length; i++) {
                that.topAry.push(list.subjects[i]);
            }
            console.log(that.topAry.get(id));
        }
    }
    h5.core.expose(topLogic);
})()