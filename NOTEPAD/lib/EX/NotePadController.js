$(function(){
	var notePadController = {
	__name:'NotePadController';
	notePadLogic:NotePadLogic;

	__ready:function(){
		var that=this;
		this.notePadLogic.init().done(function(){
			that.view.bind()
		});
	},

	};
	h5.core.expose(notePadController);
});