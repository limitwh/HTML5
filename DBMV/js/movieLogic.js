(function(){
	'use strict';
    var movieLogic={
        __name:"movieLogic",
        model:Movie.MovieModel,

        hotAry:h5.core.data.createObservableArray(),
        topAry:h5.core.data.createObservableArray(),
        comingAry:h5.core.data.createObservableArray(),

        init:function(){

        },
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
            var that=this;
            for (var i = 0; i < list.subjects.length; i++) {
                var item = this.model.create({
                    id: i+1,
                    name: list.subjects[i].title,
                    year: list.subjects[i].year,
                    rate: list.subjects[i].rating.average,
                    imgsrc: list.subjects[i].images.large
                });
                that.hotAry.push(item);
            }
        },
        pushtopary:function(list){
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
        },
        pushcomary:function(list){
            var that=this;
            for (var i = 0; i < list.subjects.length; i++) {
                var item = this.model.create({
                    id: i+1,
                    name: list.subjects[i].title,
                    year: list.subjects[i].year,
                    rate: list.subjects[i].rating.average,
                    imgsrc: list.subjects[i].images.large
                });
                that.comingAry.push(item);
            }
        }
    }
    h5.core.expose(movieLogic);
})()