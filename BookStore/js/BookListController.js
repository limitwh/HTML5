$(function(){
	var bookListController = {
		__name: "bookListController",
		_BookListLogic: bookListLogic,
		__templates: "view/BookDetail.ejs",
		bookList: [],
		init: function() {
			this._BookListLogic.getMovieListData().done(this.own(this.updateList));
		}
	}
	h5.core.expose(BookListController);
});