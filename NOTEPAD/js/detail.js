$(function() {

	var detailController = {
		__name: 'DetailController',
		__templates: 'template/detail.ejs',

		viewItem: null,

		'{rootElement} update': function(context) {
			if (!this.viewItem) {
				// 初めて呼び出されたときに、初期処理を行う
				this.initView();
			}

			var date = context.evArg.date;

			// バインドしているオブジェクトに日付とスケジュールをset
			var item = Schedule.scheduleData.dailySchedulesModel.get(date);
			var schedules = item && item.get('schedules');
			this.viewItem.set({
				date: date,
				schedules: schedules
			});
		},

		'.edit-schedule click': function(context) {
			var scheduleId = $(context.event.target).prev().val();
			var item = Schedule.scheduleData.scheduleModel.get(scheduleId);
			var date = this.$find('h2').text();

			this.showEditDialog({
				schedule: item,
				date: date
			}, true);
		},

		'.add-schedule click': function(context) {
			var date = this.$find('h2').text();

			// ダイアログの表示
			this.showEditDialog({
				date: date
			}, false);
		},

		initView: function() {
			this.view.update(this.$find('.content'), 'detail');
			this.viewItem = h5.core.data.createObservableItem({
				date: null,
				schedules: {
					type: 'any',
					defaultValue: []
				}
			});
			this.view.bind(this.$find('.content'), this.viewItem);
		},

		showEditDialog: function(bindObj, isEdit) {
			Schedule.common.openDialog(this.view.get('edit-dialog', {
				isEdit: isEdit
			}), bindObj);
		}
	};

	h5.u.obj.expose('Schedule.controller', {
		detailController: detailController
	});
});