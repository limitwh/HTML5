$(function() {
    var bindlistController = {
        __name: 'BindlistController',
        bindLogic: BindLogic,

        __ready: function() {
        	var that = this;
        	this.bindLogic.init().done(function(){
        		that.view.bind('#todolist',{
        			bindtest:that.bindLogic.bindData
        		});
        	});
        }
  /*      '#newbtn click': function(context) {
            this._insertToDo(context);
        },
        _insertToDo:function(context){
            var $inputText = this.$find('#newtext');
            var $inputTime = this.$find('#newtime');

            if($inputText.val() === ''){
            	alert("Text is empty");
            } else {
            	if($inputTime.val() === ''){
            		alert("Time is empty");
            	} else {
            		this.bindLogic.add($inputText.val(),$inputTime.val());
                    $inputText.val('');
                    $inputTime.val('');
            	}
            }
            context.event.preventDefault();
        }     */   
    };
    h5.core.expose(bindlistController);    
});