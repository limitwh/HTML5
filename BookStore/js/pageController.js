$(function(){
	var pageController={
        __name:"pageController",
        _bookListController:bookListController,
        __ready: function(){
        	console.log("_bookListController __readyit");
        	this.init();
        },

        init:function(){
			console.log("_bookListController init");
        	this._bookListController.init();
        }
	}
	h5.core.controller("#page",pageController);
});