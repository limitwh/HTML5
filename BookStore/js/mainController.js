$(function(){
	'use strict';
	var mainController={
		__name:"mainController",
		_searchController:searchController,
		_listController:listController,
		_cartDetailController:cartDetailController,

		init: function() {
			console.log("mainController init");
		}

	};
	h5.core.expose(mainController);
});