(function() {
	'use strict';
	var searchController = {
		__name: "searchController",
		init: function() {
			console.log("searchController init");
		},
		"#searchname click": function(context, $el) {
			var name=this.$find("#bookname").val();
			this.trigger("searchBook", name);
		}
	}
	h5.core.expose(searchController);
})()