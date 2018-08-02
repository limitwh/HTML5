/*(function(){
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
        },
        pushtoary:function(list){
            var that=this;
            for (var i = 0; i < list.subjects.length; i++) {
                var item = this.model.create({
                    id: i+1,
                    name: list.subjects[i].title,
                    year: list.subjects[i].year,
                    rate: list.subjects[i].rating.average,
                    imgsrc: list.subjects[i].images.large
                });
                that.topAry.push(item);
            }
        }
    }
    h5.core.expose(topLogic);
})()*/