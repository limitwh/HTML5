$(function(){
	var notePadLogic = {
		__name='NotePadLogic',
		model:notePadModel.NotePadModel,

		undoneAry:h5.core.data.createObservableArray(),
		doneAry:h5.core.data.createObservableArray(),
		deleteAry:h5.core.data.createObservableArray(),

		init:function(){
			var df = this.deferred();
			var that = this;

			$.ajax({
				url:'json/data.json',
				dataType:'json',
				cache:false,
				success:function(data){
					var undoneAry=[];
					var doneAry=[];
					var deleteAry=[];
					for (var i = 0; i < data.length; i++) {
						if(data[i].status == 0){
							undoneAry.push(data[i]);	
						} else {
							if(data[i].status == 1){
								doneAry.push(data[i]);
							} else {
								deleteAry.push(data[i]);
							}
						}
					}
					that.undoneAry.copyFrom(that.model.creat(undoneAry));
					that.doneAry.copyFrom(that.model.creat(doneAry));
					that.deleteAry.copyFrom(that.model.creat(deleteAry));
					df.resolve();
				},
				error:function(){
					alert("No data access!");
				}
			});
			return df.promise();
		},

		_getNewId:function(){
			for (var i = 1;; i++) {
				if(!this.model.has(i)){
					return i;
				}
			}
		},

		add:function(content){
			var item = this.model.creat({
				id: this._getNewId(),
				status:0,
				content:content
			});
			this.undoneAry.push(item);
		},

		moveItembtwAry:function(id,removeary,addary){
			for(var i=0;i<removeary.length;i++){
				if(removeary[i].get('id') == id){
					addary.push(removeary[i]);
					removeary.splice(i,1);
					break;
				}
			}
		},

/*		setDone:function(id){
			for(var i=0;i<undoneAry.length;i++){
				if(undoneAry[i].get('id') == id){
					this.doneAry.push(undoneAry[i]);
					this.undoneAry.splice(i,1);
					break;
				}
			}
		}，

		seUndone:function(id){
			for(var i=0;i<undoneAry.length;i++){
				if(undoneAry[i].get('id') == id){
					this.doneAry.push(undoneAry[i]);
					this.undoneAry.splice(i,1);
					break;
				}
			}
		},

		setDelete:function(id){
			for(var i=0;i<doneAry.length;i++){
				if(doneAry[i].get('id') == id){
					this.deleteAry.push(doneAry[i]);
					this.doneAry.splice(i,1);
					break;
				}
			}
		},*/
	}
});