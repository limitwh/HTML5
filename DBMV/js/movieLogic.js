(function(){
	'use strict';
    var movieLogic={
        __name:"movieLogic",
        model:Movie.MovieModel,

        hotAry:h5.core.data.createObservableArray(),
        topAry:h5.core.data.createObservableArray(),
        comingAry:h5.core.data.createObservableArray(),
        gethot:function(url){
            this.getMovieListData(url).done(this.own(this.pushhotary));
        },

        gettop:function(url){
            this.getMovieListData(url).done(this.own(this.pushtopary));
        },

        getcoming:function(url){
            this.getMovieListData(url).done(this.own(this.pushcomary));
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
        },
        pushhotary:function(list){
        	console.log(list)
        	var dataItems = this.model.create(list.subjects);
        	this.hotAry.copyFrom(dataItems);
        	
        },
        getHotArray:function(){
        	return this.hotAry;
        },
        getTopArray:function(){
        	return this.topAry;
        },
        getComArray:function(){
        	return this.comingAry;
        },
        pushtopary:function(list){
        	console.log(list)
        	var dataItems = this.model.create(list.subjects);
        	this.topAry.copyFrom(dataItems);
        	
        },
        pushcomary:function(list){
        	console.log(list)
        	var dataItems = this.model.create(list.subjects);
        	this.comingAry.copyFrom(dataItems);
        	
        }
    }
    h5.core.expose(movieLogic);
})()