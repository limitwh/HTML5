(function(){
	'use strict';
	var detailController={
		__name:"detailController",
		book:null,
		
		showbookindetail:function($el){
			this.book=$el;
			var bookinfo='<ul class="list-group"><li class="list-group-item"><img src="'+this.book.cover_page_url+'" class="img-rounded"></li>'+
					 						'<li class="list-group-item">ISBN：'+this.book.isbn+'</li>'+
					 						'<li class="list-group-item">书名：'+this.book.title+'</li>'+
					 						'<li class="list-group-item">价格：'+this.book.price+'元</li>'+
					 						'<li class="list-group-item">作者：'+this.book.author+'</li>'+
					'<li class="list-group-item"><button type="button" class="btn btn-default" id="tocart">添加到购物车</button></li></ul>';
			$("#BookDetail").empty();
			$("#BookDetail").append(bookinfo);
		},
		'#tocart click':function(){
			$("#addbtn").remove();
			$("#BookDetail").append('<li id="addbtn" >'+'已经添加到购物车'+'</li>');
			this.trigger("buyBook", this.book);
		}
	}
	h5.core.expose(detailController);
})()