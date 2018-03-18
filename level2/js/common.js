(function() {
	$(document).ready(function() {
		var css_conf = eval(markdown_panel_style);
		$('#readme').css(css_conf)

		var conf = eval(jquery_ztree_toc_opts);
		$('#tree').ztree_toc(conf);
		
		
	
	});	
	//返回首页
	$('.btn').click(function(){
		location.href='../index.html'
	})
	$('.backTop').click(function(){
		$("body,html").animate({"scrollTop":0},1000);
	})
	
})()