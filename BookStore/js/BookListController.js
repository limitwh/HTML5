$(function(){
	var bookListController = {
		__name: "bookListController",
		_BookListLogic: bookListLogic,
		__templates: "view/BookDetail.ejs",
		bookList: [],
		init: function() {

		}
	}
	h5.core.expose(BookListController);
});