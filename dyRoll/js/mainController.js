$(function(){
	'use strict';
	var mainController={
		__name:"mainController",
		_leftController:leftController,
        _middleController:middleController,
        _rightController:rightController,

		"#leftbtn click":function(){
			console.log("left button");
			var $left = this.$find('#ltext');
			this._middleController.setMidtext(this._leftController.getText($left));
		},

		"#rightbtn click":function(){
			var $right = this.$find('#rtext');
			this._middleController.setMidtext(this._leftController.getText($right));
		}
	};
	h5.core.expose(mainController);
});