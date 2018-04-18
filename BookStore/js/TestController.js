$(function(){
	var TestController={
		__name: 'testController',

        __ready: function() {
        	console.log("testController ready");
        }
	};
	h5.core.expose(TestController);
});