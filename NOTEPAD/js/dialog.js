$(function() {
	// ダイアログをbodyに追加
	var dialogPromise = h5.core.view.load('template/dialog.ejs').done(function() {
		$('body').append(h5.core.view.get('dialog'));
		$('#dialog').css({
			display: 'none'
		});
	});

	var manager = Schedule.scheduleData.ScheduleManager;
	var dialogLogic = {

		manager: manager,

		scheduleModel: manager.models.ScheduleModel,

		dailySchedulesModel: manager.models.DailySchedulesModel,

		create: function(schedule) {
			try {
				var isCreated = !this.scheduleModel.has(schedule.id);
				this.scheduleModel.create(schedule);
				return isCreated;
			} catch (e) {
				throw e;
			}
			return false;
		},

		del: function(id) {
			this.scheduleModel.remove(id);
		}
	};

	var dialogController = {
		__name: 'DialogController',

		block: null,

		logic: dialogLogic,

		'{window} [keydown]': function(context) {
			if (this.rootElement.style.display === 'none') {
				return;
			}
			if (context.event.keyCode === 27) {
				this.unblock();
			}
		},

		'.back click': function(context) {
			this.$find('.content>*').trigger('close');
			this.unblock();
		},

		'.rewrite-schedule,.add-schedule click': function(context) {
			var item = {};
			var $parent = $(context.event.target).parent();

			// 件名
			item.subject = $parent.find('input[name="subject"]').val();
			if (!item.subject) {
				alert('件名は必須項目です');
				return;
			}

			// from,toは任意なので空文字ならnullにする
			item.from = $parent.find('input[name="from"]').val() || null;
			item.to = $parent.find('input[name="to"]').val() || null;

			// 日付
			item.date = $parent.parent().find('h2').text();

			// 詳細
			item.detail = $parent.find('textarea.detail').val();

			// id(変更時) 追加時なら現在時刻
			item.id = $parent.find('input[name="id"]').val() || '' + new Date().getTime();

			try {
				var isCreated = this.logic.create(item);
			} catch (e) {
				alert('登録できませんでした。入力情報を確認してください。\n開始・終了時刻はyy:mm形式で入力してください。');
				return;
			}

			if (isCreated) {
				setTimeout(function() {
					$('#detail').trigger('update', {
						date: item.date
					});
				}, 0);
			}

			this.unblock();
			return;
		},

		'.delete-schedule click': function(context) {
			if (!confirm('この予定を削除しますか？')) {
				return;
			}

			var id = $(context.event.target).parent().find('input[name="id"]').val();

			this.logic.del(id);
			this.unblock();
		},

		'{rootElement} openDialog': function(context) {
			var content = context.evArg.content;
			var data = context.evArg.data;
			data.schedule = data.schedule || {};

			var $dialog = $('#dialog');
			var $content = $dialog.find('.content').html(content);
			// contextがすでにバインドされている(getの時点)実装になるはずなので、対応されたらここは不要
			h5.core.view.bind($content, data);

			var width = $dialog.outerWidth();
			// 真ん中に調整して表示
			$dialog.css({
				display: 'block',
				left: parseInt(($(window).width() - width) / 2) + 'px'
			});
			this.block = h5.ui.indicator(window).show();
		},

		unblock: function() {
			$(this.rootElement).toggle();
			this.block && this.block.hide();
		}
	};

	h5.u.obj.expose('Schedule.controller', {
		dialogController: dialogController
	});

	h5.u.obj.expose('Schedule.promise', {
		dialogPromise: dialogPromise
	});
});
