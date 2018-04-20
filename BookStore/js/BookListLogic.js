$(function(){
	var bookListLogic = {
		__name:'BookListLogic',
		model: Book.BookModel,

		booklist:h5.core.data.createObservableArray(),
		init: function(){
			var df = this.deferred();
			var that = this;
			console.log("bookListLogic init");
			$.ajax({
				url: 'json/book.json',
				dataType: 'json',
				cache: false,
				success: function(data) {
               			 var bookdata = [];
               			 for (var i = 0; i < data.length; i++) {
               			 	bookdata.push(data[i]);
               			 }
               			 that.booklist.copyFrom(that.model.create(bookdata));
               			 df.resolve(that.booklist);
				},
				error:function(){
					alert('Book list json file read error');
				}
			});
			return df.promise();
		},

		getDetailByName:function(Name){
			for (var i = 0; i < booklist.length; i++) {
				if (booklist[i].name=Name) {
					return booklist[i];
				}
			}
		}
	};
	h5.core.expose(bookListLogic);
});