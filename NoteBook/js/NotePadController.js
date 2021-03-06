$(function(){
	var notePadController = {
	__name:'NotePadController',
	notePadLogic:NotePadLogic,

	__ready:function(){
		var that=this;
		this.notePadLogic.init().done(function(){
			that.view.bind('#notComplete', {
                    notePads: that.notePadLogic.undoneAry
			});
            that.view.bind('#complete', {                
                    notePads: that.notePadLogic.doneAry
			});
 			that.view.bind('#cancel', {
                    notePads: that.notePadLogic.deleteAry
			});
		});
	},

    '#newbtn click': function(context) {
        this._insert(context);
        console.log('newbtn click');
    },

/*    '#notComplete input[type="checkbox"] change':function(context){
    	var that=this;
    	//console.log(that.notePadLogic.undoneAry._src);
    	var changeID=$(context.event.currentTarget).prev().attr("value");
    	this.notePadLogic.moveItembtwAry(changeID,that.notePadLogic.undoneAry._src,that.notePadLogic.doneAry._src);
    	console.log('changeID=',changeID);
    	context.event.stopPropagation();
    },*/

    '#notComplete input[type="checkbox"] change':function(context){
        var that=this;
        var changeID=$(context.event.currentTarget).prev().attr("value");
        console.log('changeID=',changeID);
        this.notePadLogic.undone2done(changeID);
        context.event.stopPropagation();
    },

    '#complete input[type="checkbox"] change':function(context){
        var that=this;
        var changeID=$(context.event.currentTarget).prev().attr("value");
        console.log('changeID=',changeID);
        this.notePadLogic.done2undone(changeID);
        context.event.stopPropagation();
    },

    '#cancel button click':function(context){
        var that=this;
        var changeID=$(context.event.currentTarget).siblings()[0].value;
        console.log('changeID=',changeID);
        this.notePadLogic.delete2undone(changeID);
        context.event.stopPropagation();        
    },

    '#notComplete button click':function(context){
        var that=this;
        var changeID=$(context.event.currentTarget).siblings()[0].value;
        console.log('changeID=',changeID);
        this.notePadLogic.undone2delete(changeID);
        context.event.stopPropagation();        
    },

	_insert:function(context){
        var $inputText = this.$find('#inputText');
        if($inputText.val() === ''){
         	alert("Text is empty");
        } else {
      		this.notePadLogic.add($inputText.val());
            $inputText.val('');
       	}
        context.event.preventDefault();
	}
	};
	h5.core.expose(notePadController);
});