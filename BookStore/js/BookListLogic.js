$(function(){
	var bookListLogic = {
		__name:'BookListLogic',
		model: Book.BookModel,

		booklist:h5.core.data.createObservableArray(),
		init: function(){
			var df = this.deferred();
			var that = this;

			$.ajax({
				url:'json/booklist.json',
				dataType:'json',
				cache: false,
				success:function(data){
					var booklistjson=[];
					for (var i = 0; i < data.length; i++) {
						booklistjson.push(data[i]);
					}
					that.booklist.copyForm(that.model.create(booklistjson));
					df.resolve(that.booklist);
				},
				error:function(){
					alert('Book list json file read error');
				}
			});
			return df.promise();
		},
		getDetailByCata:function(BookCata){
			for (var i = 0; i < booklist.length; i++) {
				if (booklist[i].category=BookCata) {
					return booklist[i];
				}
			}
		}
	};
	h5.core.expose(bookListLogic);
});