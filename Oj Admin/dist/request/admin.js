//题库问题列表页面   page/problem-list.html
$('#problem-list').click(function(event) {
	event.preventDefault();
	$.$.ajax({
		url: '/path/to/file',
		type: 'GET',
		data: {},
		success: function(result){
			$('#page-wapper').html(result);
		},
		error: function(result) {
			//
		}
	});
});
//题库问题列表项
$('#problem-list').click(function(event) {
	event.preventDefault();
	$.$.ajax({
		url: '/path/to/file',
		type: 'GET',
		data: {},
		success: function(result){
			$('#tbody').find('#t1').html(result);//题目编号 例 0001
			$('#tbody').find('#t2').html(result);//题目标题
			$('#tbody').find('#t3').html(result);//题目内容
		},
		error: function(result) {
			//
		}
	});
});
//题库修改题目 点击列表单个题目中的“编辑” 返回题目信息
.click(function(event) {
	event.preventDefault();
	$.$.ajax({
		url: '/path/to/file',
		type: 'GET',
		data: {},
		success: function(result){
			$('#edit-problem-title').html();//题目标题
			$('#edit-problem-timelimit').html();//时间限制
			$('#edit-problem-memorylimit').html();//内存限制
			$('#edit-problem-content').html();//题目描述
			$('#edit-problem-input').html();//输入
			$('#edit-problem-output').html();//输出
			$('#edit-problem-input-sample').html();//样例输入
			$('#edit-problem-output-sample').html();//样例输出
			$('#edit-problem-tip').html();//提示
			$('').html();//待定（隐藏input 题目ID）
			$('').html();//待定（标签）
		},
		error: function(result) {
			//
		}
	});
});
//题库查看题目 点击列表单个题目中的“标题” 返回题目信息
.click(function(event) {
	/* Act on the event */
	event.preventDefault();
	$.$.ajax({
		url: '/path/to/file',
		type: 'GET',
		data: {},
		success: function(result){
			$('#ShowOneProblem').html();//题目标题
			$('#show-problem-timelimit').html();//时间限制
			$('#show-problem-memorylimit').html();//内存限制
			$('#show-problem-content').html();//题目描述
			$('#show-problem-input').html();//输入
			$('#show-problem-output').html();//输出
			$('#show-problem-input-sample').html();//样例输入
			$('#show-problem-output-sample').html();//样例输出
			$('#show-problem-tip').html();//提示
			$('').html();//待定（隐藏input 题目ID）
			$('').html();//待定（标签）
		},
		error: function(result) {
			//
		}
	});
});

//题库添加题目 problem-add.html
$('#add-one-problem-submit').click(function(event) {
	$.ajax({
    //几个参数需要注意一下
        type: "POST",
        dataType: "json",//预期服务器返回的数据类型
        url: "/users/login" ,//url
        data: $('#add-one-problem-form').serialize(),
        success: function (result) {
            //console.log(result);//打印服务端返回的数据(调试用)
            if (result.resultCode == 200) {
                alert("SUCCESS");
            }
            ;
        },
        error : function() {
            alert("异常！");
        }
});