$(function() {

	function ScheduleLogic() {
		var scheduleData = Schedule.scheduleData;
		this.manager = scheduleData.ScheduleManager;
		this.scheduleModel = this.manager.models.ScheduleModel;
		this.dailySchedulesModel = this.manager.models.DailySchedulesModel;
		this.dates = h5.core.data.createObservableArray();

		var that = this;

		this.dailySchedulesModel.addEventListener('itemsChange', function(ev) {
			for ( var i = 0, l = ev.created.length; i < l; i++) {
				that.dates.push(ev.created[i].get('date'));
			}

			for ( var i = 0, l = ev.removed.length; i < l; i++) {
				that.dates.splice(that.dates.indexOf(ev.removed[i].get('date')), 1);
			}
		});

		this.loadPromise = Schedule.common.load();
	}

	ScheduleLogic.prototype = {

		load: function() {
			var dfd = h5.async.deferred();
			var that = this;

			this.loadPromise.done(function() {

				dfd.resolve(that.dates);
			});
			return dfd.promise();
		},

		getSchedulesByDate: function(date) {
			return this.dailySchedulesModel.get(date);
		}
	};

	var scheduleController = {
		__name: 'ScheduleController',

		logic: new ScheduleLogic(),

		dataLoadPromise: null,

		scheduleDates: null,

		__templates: ['template/schedule.ejs'],

		$content: null,

		__construct: function(context) {
			this.dataLoadPromise = this.logic.load();
		},

		__ready: function(context) {
			this.$content = this.$find('.content');
			var date = new Date();

			// 現在の月をカレンダーに表示
			this.showCalender(date.getFullYear(), date.getMonth() + 1);

			var that = this;
			this.dataLoadPromise.done(function(dates) {
				that.scheduleDates = dates;
				that.plotExistScheduleMark();

				that.scheduleDates.addEventListener('change', function() {
					// スケジュールの描画
					that.plotExistScheduleMark();
				});
			}).fail(function(e) {
				that.log.error(e);
			});
		},


		'.nextMonth click': function(context) {
			context.event.preventDefault();
			this.moveCalender(1);
		},

		'.preMonth click': function(context) {
			this.moveCalender(-1);
		},

		'.date-column click': function(context) {
			this.$find('td').removeClass('clicked');
			$(context.event.currentTarget).addClass('clicked');

			var date = context.event.currentTarget.getAttribute('id').replace(/-/g, '/');
			$('#detail').trigger('update', {
				date: date
			});
		},

		showCalender: function(y, m) {
			this.view.update(this.$content, 'calender', {
				year: y,
				month: m
			});
		},

		plotExistScheduleMark: function() {
			var startDate = new Date($('table.calender td:first').attr('id').replace(/-/g, '/'));
			
			var endDate = new Date($('table.calender td:last').attr('id').replace(/-/g, '/'));

			
			this.$find('table.calender td').removeClass('schedule-exist');
			for ( var i = 0, l = this.scheduleDates.length; i < l; i++) {
				var date = this.scheduleDates.get(i);
				if (startDate <= new Date(date) && new Date(date) <= endDate) {
			
					$('#' + date.replace(/\//g, '-')).addClass('schedule-exist');
				}
			}
		},

		moveCalender: function(d) {
			// 移動月の計算
			var curYear = parseInt(this.$find('#view_year')[0].value);
			var curMonth = parseInt(this.$find('#view_month')[0].value);
			var ym = curYear * 12 + curMonth - 1 + d;
			var y = parseInt(ym / 12);
			var m = ym % 12 + 1;

			//  カレンダーの表示
			this.showCalender(y, m);

			// スケジュールありなしのマーキング
			this.plotExistScheduleMark();
		}
	};

	h5.u.obj.expose('Schedule.controller', {
		scheduleController: scheduleController
	});
});