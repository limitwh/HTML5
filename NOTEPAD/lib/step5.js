$(function() {
  // 首先定义一个controller对象
  var controller = {

  // 设定controller名
  __name: 'NumListController',

  // 引入使用的模板路径
  __templates: 'list.ejs',  //要引入多个ejs文件的时候，请指定数组形式。

  // 点击id=output时的事件处理程序
  '#output click': function() {
    // 获取到用户输入的值
    var to = this.$find('#to').val();
    //处理如果没有值得情况
    if (!to) {
      return;
    }
    //将字符串类型转变为数字类型，如果转换失败的话就结束
    try {
      to = parseInt(to);
    } catch(e) {
      return;
    }

    //根据数据将绑定的模板在画面上输出
      this.view.append('#list', 'list', {
        num: to
      });
    }
  };

  //将控制器绑定在id为container的元素上
  h5.core.controller('#container', controller);
});