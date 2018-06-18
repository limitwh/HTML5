(function() {
	'use strict';
	var listController = {
		_listLogic: ListLogic,
		__name: "listController",
		__templates:"view/singlebook.ejs",
		Booklistarray:[],
		page:1,
		
		init: function() {
			this._listLogic.getBookListData(this.page).done(this.own(this.update));			
		},
		update:function(list){
			this.Booklistarray=this.Booklistarray.concat(list);
			for (var i = 0; i < list.length; i++) {
				$("#booktable").append(
					'<tr><td class="singlebook" '+'id="'+list[i].key+'"" >' + list[i].title + '</td></tr>'
				);
			};
		},
		"#Booklist [scroll]": function() {
			if(this._isbottom()){
				this.page++;
				this._listLogic.getBookListData(this.page).done(this.own(this.update));
			}
		},
		_isbottom:function(){
			var that=this.$find("#Booklist");
			if(that.scrollTop() + that.innerHeight() >= that[0].scrollHeight) {
				return true;
            } else {
            	return false;
            }
		},
		searchbook:function(name){
			var notfound=true;
			for (var i = 0; i < this.Booklistarray.length; i++) {
				if(this.Booklistarray[i].title == name){
					$("#booktable").empty();
					$("#booktable").append(
						'<tr><td class="singlebook" '+'id="'+this.Booklistarray[i].key+'" >' + 
						this.Booklistarray[i].title + '</td></tr>'
					);
					notfound=false;
					break;
				}
			};
			if(notfound){
				alert("没有找到想要的书籍");
			}
		},
		".singlebook click":function(context, $el){
			var key = $el[0].id;
			this.trigger("showBook", this._getbookbykey(key));
		},
		_getbookbykey:function(key){
			for (var i = 0; i < this.Booklistarray.length; i++) {
				if(this.Booklistarray[i].key == key){
					break;
				}
			};
			return this.Booklistarray[i]
		}
	}
	h5.core.expose(listController);
})()