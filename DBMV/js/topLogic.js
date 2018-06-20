(function(){
	'use strict';
    var topLogic={
        __name:"topLogic",
        model:Movie.MovieModel,

        topAry:h5.core.data.createObservableArray(),

        init:function(url){
            console.log("topLogic init");
            this.getMovieListData(url).done(this.own(this.show));
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
                    dataType:"json",
                });
            return promise;
        },
        show:function(list){
            var that=this;
            var toplist=[];
            for (var i = 0; i < list.subjects.length; i++) {
                toplist.push(       list.subjects[i].title,
                                    list.subjects[i].year,
                                    list.subjects[i].rating.average,
                                    list.subjects[i].images.large
                            );
                that.topAry.set(i,toplist);
                toplist=[];
            }
            console.log(toplist);
        }
    }
    h5.core.expose(topLogic);
})()