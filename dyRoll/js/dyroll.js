$(function () {
 var id=0;
 var jsonurl='json/page00';
 $("div").scroll(function() {
        if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
            getBook();
        }
 });
 $("#ajaxbtn").click(function(){
 	getBook();
 });
 
 function getBook(){
 	id++;
	$.ajax({
		url:jsonurl+id+'.json',
		beforeSend: function(xhr){
    		if (xhr.overrideMimeType){
      			xhr.overrideMimeType("application/json");
    		}
    	},
		dataType:'json',
		cache:false,
		success:function(data){
			for (var i = 0; i < data.length; i++) {
				console.log(data[i].author+' '+data[i].title);
				$("#rolldiv").append(
					'<p id="book">' + data[i].author + ' '+data[i].title + '</p>'
				);
			}
		},
		error:function(){
			console.log("No data access!");
		}
	});
 };

});