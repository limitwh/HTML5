$(function(){
	var notePadLogic = {
		__name:'NotePadLogic',
		model:NotePad.NotePadModel,

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
					that.undoneAry.copyFrom(that.model.create(undoneAry));
					that.doneAry.copyFrom(that.model.create(doneAry));
					that.deleteAry.copyFrom(that.model.create(deleteAry));
					df.resolve();
				},
				error:function(){
					alert("No data access!");
				}
			});
			console.log('init in logic');
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
			var item = this.model.create({
				id: this._getNewId(),
				status:0,
				content:content
			});
			this.undoneAry.push(item);
		},

		moveItembtwAry:function(id,removeary,addary){
			console.log("move item in logic");
			for(var i=0;i<removeary.length;i++){
				if(removeary[i]._values.id == id){
					addary.push(removeary[i]);
					removeary.splice(i,1);
					break;
				}
			}
		},

		undone2done:function(id){
			console.log("move item in undone2done");
			for(var i=0;i<this.undoneAry.length;i++){
				if(this.undoneAry._src[i]._values.id == id){
					this.doneAry.push(this.undoneAry._src[i]);
					this.undoneAry.splice(i,1);
					break;
				}
			}
		},

		done2undone:function(id){
			console.log("move item in done2undone");
			for(var i=0;i<this.doneAry.length;i++){
				if(this.doneAry._src[i]._values.id == id){
					this.undoneAry.push(this.doneAry._src[i]);
					this.doneAry.splice(i,1);
					break;
				}
			}
		},

		delete2undone:function(id){
			console.log("move item in undone2delete");
			for(var i=0;i<this.deleteAry.length;i++){
				if(this.deleteAry._src[i]._values.id == id){
					this.undoneAry.push(this.deleteAry._src[i]);
					this.deleteAry.splice(i,1);
					break;
				}
			}
		},

		undone2delete:function(id){
			console.log("move item in undone2delete");
			for(var i=0;i<this.undoneAry.length;i++){
				if(this.undoneAry._src[i]._values.id == id){
					this.deleteAry.push(this.undoneAry._src[i]);
					this.undoneAry.splice(i,1);
					break;
				}
			}
		}

	};
	h5.core.expose(notePadLogic);
});