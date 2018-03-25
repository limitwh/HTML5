$(function() {
	var bindLogic = {
		__name:'BindLogic',

		bindData: h5.core.data.createObservableArray(),
		init: function() {
			var df = this.deferred();
			var that = this;
			$.ajax({
				url: 'json/bindlist.json',
				dataType: 'json',
				cache: false,
				success: function(data) {
               			 var bindlist = [];
               			 for (var i = 0; i < data.length; i++) {
               			 	bindlist.push(data[i]);
               			 }
               			 that.bindData.copyFrom(that.model.create(bindlist));
               			 df.resolve();
				},
                error: function() {
                    alert('读取数据失败');
                }
			});
			return df.promise();
		},
        add: function(text,time) {
            var item = this.model.create({
                id: this._getNewId(),
                text: text,
                time: time
            });
           this.bindData.push(item);
        },
        _getNewId: function() {
            for ( var i = 1;; i++) {
                if (!this.model.has(i)) {
                    return i;
                }
            }
        }
	};
	h5.core.expose(bindLogic);
});