$(function(){
	'use strict';
	var mainController={
		__name:"mainController",
		_searchController:searchController,
		_listController:listController,
		_detailController:detailController,
		_cartController:cartController,

		__ready:function(){
			this.init();
		},
		init: function() {
			this._listController.init();
		},
		'{rootElement} searchBook':function(context){
        	this._listController.searchbook(context.evArg);
        },
		'{rootElement} showBook':function(context){
        	this._detailController.showbookindetail(context.evArg);
        },
		'{rootElement} buyBook':function(context){
        	this._cartController.addtocart(context.evArg);
        }
	};
	h5.core.expose(mainController);
});