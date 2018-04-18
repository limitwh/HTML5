$(function(){
	var BookListController = {
		__name: 'BookListController',
        bookListLogic: BookListLogic,

        __ready: function() {
        	var that = this;
        	this.bookListLogic.init().done(function(){
        		that.view.bind('#booklist',{
        			booktest:that.bookListLogic.booklist
        		});
        	});
        }
	};
	h5.core.expose(BookListController);
});