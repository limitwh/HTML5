$(function(){
	var bookListController = {
		__name: "bookListController",
		_bookListLogic: bookListLogic,
		__templates: "view/BookDetail.ejs",
		bookList: [],
		init: function() {
        	console.log("_bookListLogic init");
			this._bookListLogic.init();
		}
	}
	h5.core.expose(bookListController);
});