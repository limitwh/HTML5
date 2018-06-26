(function(){
	'use strict'
	var NsMovieController = {
		__name: 'NsMovieController',
		__templates: 'view/NsMovie.ejs',
		logic:test.logic.NsMovieLogic,
		model1:test.model.NsMovieModel1,
		model2:test.model.NsMovieModel2,
		model3:test.model.NsMovieModel3,
		flg:'0',//节流阀
		flg1:'0',//箭头淡入淡出控制，0:无效且不显示1:再操作禁止中2:有效且显示
		__ready:function(){
			$('#text1').removeClass('btnText1');
			$('#text1').addClass('btnText2');
			$('#sankaku1').removeClass('Sankaku1');
			$('#sankaku1').addClass('Sankaku2');
			//数据读入
			var urlStr = 'https://api.douban.com/v2/movie/in_theaters';
			this.logic.movieRead(urlStr,this,'1');
			var urlStr = 'https://api.douban.com/v2/movie/coming_soon';
			this.logic.movieRead(urlStr,this,'2');
			var urlStr = 'https://api.douban.com/v2/movie/top250';
			this.logic.movieRead(urlStr,this,'3');
		},
		//电影类型切换
		'.btnClass click':function(context, $el){
			if(this.flg == '1'){
				return false;
			};
			this.flg = '1';
			var id1 = $('.showClass').attr('id');
			var id2 = $el.attr('id');
			var id3 = '';
			if(id2=='btn1'){
				id3 = 'body1';
				$('#text1').removeClass('btnText1');
				$('#text1').addClass('btnText2');
				$('#text2').removeClass('btnText2');
				$('#text2').addClass('btnText1');
				$('#text3').removeClass('btnText2');
				$('#text3').addClass('btnText1');
				$('#sankaku1').removeClass('Sankaku1');
				$('#sankaku1').addClass('Sankaku2');
				$('#sankaku2').removeClass('Sankaku2');
				$('#sankaku2').addClass('Sankaku1');
				$('#sankaku3').removeClass('Sankaku2');
				$('#sankaku3').addClass('Sankaku1');
			}else if(id2=='btn2'){
				id3 = 'body2';
				$('#text1').removeClass('btnText2');
				$('#text1').addClass('btnText1');
				$('#text2').removeClass('btnText1');
				$('#text2').addClass('btnText2');
				$('#text3').removeClass('btnText2');
				$('#text3').addClass('btnText1');
				$('#sankaku2').removeClass('Sankaku1');
				$('#sankaku2').addClass('Sankaku2');
				$('#sankaku1').removeClass('Sankaku2');
				$('#sankaku1').addClass('Sankaku1');
				$('#sankaku3').removeClass('Sankaku2');
				$('#sankaku3').addClass('Sankaku1');
			}else{
				id3 = 'body3';
				$('#text3').removeClass('btnText1');
				$('#text3').addClass('btnText2');
				$('#text1').removeClass('btnText2');
				$('#text1').addClass('btnText1');
				$('#text2').removeClass('btnText2');
				$('#text2').addClass('btnText1');
				$('#sankaku3').removeClass('Sankaku1');
				$('#sankaku3').addClass('Sankaku2');
				$('#sankaku1').removeClass('Sankaku2');
				$('#sankaku1').addClass('Sankaku1');
				$('#sankaku2').removeClass('Sankaku2');
				$('#sankaku2').addClass('Sankaku1');
			};
			if(id1==id3){
				this.flg = '0';
				return false;
			};
			var i = 0; 
			$('.showClass').addClass('hiddenClass');
			$('.showClass').removeClass('showClass');
			$('#'+id3).addClass('showClass');
			var that = this;
			var Counter = setInterval(function(context, $el){
				i++;
				$('#'+id1).css('left', 'calc('+(50 - i/3) + '%' +' - ' +(150+i*1.3)+'px)');
				$('#'+id3).css('left', 'calc('+(i/3) + '%' +' - '+(300-i)+'px)');
				if(i >= 150) {
					that.flg = '0';
					clearInterval(Counter);
				};
			}, 3);
		},
		//鼠标移入
		'.btnClass mouseover':function(context, $el){
			var id1 = $('.showClass').attr('id');
			var id2 = $el.attr('id');
			var id3 = '';
			if(id2 == 'btn1') {
				id3 = 'body1';
			}else if(id2 == 'btn2') {
				id3 = 'body2';
			}else{
				id3 = 'body3';
			};
			if(id1==id3){
				return false;
			}else{
				if(id2 == 'btn1'){
					$('#text1').removeClass('btnText1');
					$('#text1').addClass('btnText2');
				}else if(id2 == 'btn2'){
					$('#text2').removeClass('btnText1');
					$('#text2').addClass('btnText2');
				}else{
					$('#text3').removeClass('btnText1');
					$('#text3').addClass('btnText2');
				};
			};
		},
		//鼠标移出
		'.btnClass mouseout':function(context, $el){
			var id1 = $('.showClass').attr('id');
			var id2 = $el.attr('id');
			var id3 = '';
			if(id2 == 'btn1') {
				id3 = 'body1';
			} else if(id2 == 'btn2') {
				id3 = 'body2';
			} else {
				id3 = 'body3';
			};
			if(id1 == id3) {
				return false;
			} else {
				if(id2 == 'btn1') {
					$('#text1').removeClass('btnText2');
					$('#text1').addClass('btnText1');
				} else if(id2 == 'btn2') {
					$('#text2').removeClass('btnText2');
					$('#text2').addClass('btnText1');
				} else {
					$('#text3').removeClass('btnText2');
					$('#text3').addClass('btnText1');
				};
			};
		},
		//加载更多
		'.moreMovie1 click':function(context, $el){
			var id1 = $('.showClass').attr('id');
			if(id1=='body1'){
				$('#body1 > .moreMovie1').hide();
				$('#body1 > .moreMovie0').show();
			}else if(id1=='body2'){
				$('#body2 > .moreMovie1').hide();
				$('#body2 > .moreMovie0').show();
			}else{
				$('#body3 > .moreMovie1').hide();
				$('#body3 > .moreMovie0').show();
			};
			var i = 0;
			var that = this;
			var Counter = setInterval(function(){
				i=i+5;
				$('.moreMovie0').css('transform','rotateZ('+i+'deg)');
				if(i >= 360*2) {
					clearInterval(Counter);
				};
			}, 10);
			setTimeout(function(){
				var id1 = $('.showClass').attr('id');
				var flg = '';
				if(id1=='body1'){
					flg='1';
					$('#body1 > .moreMovie').remove();
				}else if(id1=='body2'){
					flg='2';
					$('#body2 > .moreMovie').remove();
				}else{
					flg='3';
					$('#body3 > .moreMovie').remove();
				};
				var flg1 = that.logic.movieCreat(that,flg);
				if(flg=='1'){
					if(flg1){
						that.view.append('#body1', 'NsMovieView2', {});
					};
					$('.moreMovie0').hide();
				}else if(flg=='2'){
					if(flg1){
						that.view.append('#body2', 'NsMovieView2', {});
					};
					$('.moreMovie0').hide();
				}else{
					if(flg1){
						that.view.append('#body3', 'NsMovieView2', {});
					};
					$('.moreMovie0').hide();
				}
			},1450)
		},
		//滚轴滚动
		'{window} [scroll]':function(context, $el){
			if($el.scrollTop()>=window.innerHeight){
				var that = this;
				if(that.flg1!='0'){
					return false
				};
				that.flg1 = '1';
				var i = 0.0;
				var Counter = setInterval(function() {
					i=i+0.1;
					$('#srollUpBtn').css('opacity', i);
					that.flg1 = '2';
					if(i >= 1.0) {
						clearInterval(Counter);
					};
				}, 100);
			}else{
				var that = this;
				if(that.flg1!='2'){
					return false
				};
				that.flg1 = '1';
				var i = 0.0;
				var Counter = setInterval(function() {
					i=i+0.1;
					$('#srollUpBtn').css('opacity', (1.0-i));
					that.flg1 = '0';
					if(i >= 1.0) {
						clearInterval(Counter);
					};
				}, 100);
			};
		},
		//点击箭头
		'#srollUpBtn click':function(context, $el){
			if(this.flg1=='2'){
				$('body,html').animate({scrollTop:0}, 1000);
			}else{
				return false;
			}
		}
	}; 
	h5.core.controller('body',NsMovieController);
})();
