(function(){
	'use strict'
	//定义逻辑对象
	var NsMovieLogic = {
		__name: 'BookShopLogic',
		dateFormat:'2018/06/02',
		//json数据获取
		movieRead:function(Urlstr,that,flg){
			var that1 = that;
			var promise = new Promise(
				function(resolve, reject) {
					$.ajax({
						type: 'get',
						url: Urlstr,
						dataType: 'jsonp',
						success: function(data) {
							resolve(data); //获取成功 
						},
						error: function() {
							reject(); //获取失败
						}
					});
				});
			promise.then(function(data) {
				var movieModel1Max = data.count;
				for(var i = 1;i<=movieModel1Max;i++){
					if(flg=='1'){
						that.model1.create({
							id:i,
							MovieName:data.subjects[i-1].title,
							original:data.subjects[i-1].original_title,
							year:data.subjects[i-1].year,
							images:data.subjects[i-1].images.large,
							rating:data.subjects[i-1].rating.average + '',
							readType:'0'
						});
					}else if(flg=='2'){
						that.model2.create({
							id:i,
							MovieName:data.subjects[i-1].title,
							original:data.subjects[i-1].original_title,
							year:data.subjects[i-1].year,
							images:data.subjects[i-1].images.large,
							rating:data.subjects[i-1].rating.average + '',
							readType:'0'
						});
					}else{
						that.model3.create({
							id:i,
							MovieName:data.subjects[i-1].title,
							original:data.subjects[i-1].original_title,
							year:data.subjects[i-1].year,
							images:data.subjects[i-1].images.large,
							rating:data.subjects[i-1].rating.average + '',
							readType:'0'
						});
					};
				};
				if(flg=='1'){
					that.logic.movieCreat(that,'1');
				}else if(flg=='2'){
					that.logic.movieCreat(that,'2');
				}else{
					that.logic.movieCreat(that,'3');	
				};
			});
			promise.then(function(data) {
				if(flg=='1'){
					that1.view.append('#body1', 'NsMovieView2', {});
				}else if(flg=='2'){
					that1.view.append('#body2', 'NsMovieView2', {});
				}else{
					that1.view.append('#body3', 'NsMovieView2', {});
				}
				$('.moreMovie0').hide();
			});
			promise.catch(function() {
				alert("数据获取失败");
			});
		},
		//电影创建
		movieCreat:function(that,flg){
			if(flg=='1'){
				$('#body1 > .moreMovie').remove();
				var j = 0;
				for(var i =1;i<=that.model1.size&&j<5;i++){
					var item = that.model1.get(i)
					if(item.get('readType')=='0'){
						that.view.append('#body1','NsMovieView1',{
							class1:'class1',
							MovieName:item.get('MovieName'),
							original:item.get('original'),
							year:item.get('year'),
							rating:item.get('rating'),
							images:item.get('images')
						});
						item.set('readType','1');
						j++;
					};
					if(i >= that.model1.size) {
						$('#body1 > .moreMovie').remove();
						that.view.append('#body1', 'NsMovieView3', {});
						return false;
					}
				};
			}else if(flg=='2'){
				$('#body2 > .moreMovie').remove();
				var j = 0;
				for(var i =1;i<=that.model2.size&&j<5;i++){
					var item = that.model2.get(i)
					if(item.get('readType')=='0'){
						that.view.append('#body2','NsMovieView1',{
							class1:'class1',
							MovieName:item.get('MovieName'),
							original:item.get('original'),
							year:item.get('year'),
							rating:item.get('rating'),
							images:item.get('images')
						});
						item.set('readType','1');
						j++;
					};
					if(i >= that.model2.size) {
						$('#body2 > .moreMovie').remove();
						that.view.append('#body2', 'NsMovieView3', {});
						return false;
					}
				};
			}else{
				$('#body3 > .moreMovie').remove();
				var j = 0;
				for(var i =1;i<=that.model3.size&&j<5;i++){
					var item = that.model3.get(i)
					if(item.get('readType')=='0'){
						that.view.append('#body3','NsMovieView1',{
							class1:'class1',
							MovieName:item.get('MovieName'),
							original:item.get('original'),
							year:item.get('year'),
							rating:item.get('rating'),
							images:item.get('images')
						});
						item.set('readType','1');
						j++;
					};
					if(i >= that.model3.size) {
						$('#body3 > .moreMovie').remove();
						that.view.append('#body3', 'NsMovieView3', {});
						return false;
					}
				};
			};
			return true;
		}
	};
	// 公开
	h5.u.obj.expose('test.logic', {
		NsMovieLogic: NsMovieLogic 
	});
})();
