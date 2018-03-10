$('.daterangepicker').remove();
addDelete();
$('input[name="contest-time"]').daterangepicker(
{
    locale: {
      format: 'YYYY-MM-DD'
    },
    startDate: moment().subtract(29, 'days'),
    endDate: moment(),
}, 
function(start, end, label) {
    //alert("A new date range was chosen: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
});
var contestSecret = $('#contest-secret');
var contestPassword = $('#contest-password');
$('#contest-secret').change(function(event) {
	//alert('');
	if(contestSecret.prop('checked')){
		//alert('ss');
		document.getElementById('contest-password').disabled = false;
	} else {
		contestPassword.val('');
		document.getElementById('contest-password').disabled = true;
	}
});

//问题多选
multicheck_p();
//题目添加
function checkAll() {
    $('#search-result-table-p tr').slice(1).addClass('info');
}
function cancelAll(){
    $('#search-result-table-p tr').slice(1).removeClass('info');
}
function multicheck_p(){
	$('#search-result-table-p tr').slice(1).click(function(event) {
	    //alert();
	    $(this).toggleClass('info');
	});
}
//初始化问题列表
var porblemTable = $('#problem-table').DataTable({
    responsive: true,
    createdRow: function(row,data,index) {
        $('td', row).eq(2).addClass('overflow-hide');
        $('td', row).eq(1).addClass('overflow-hide');
        $('td', row).eq(1).parent().attr('id',data[0]);
    }
});
//移动问题查询结果数据
$('#add-problems-p').click(function(event) {
    var resultTablep = $('#search-result-table-p');
    var pTable = $('#problem-table');
    var searchResultp = resultTablep.find('tbody');
    var addResultp = pTable.find('tbody');
    var resultRows = searchResultp.find('.info');
    //alert(resultRows.html());
    for(var i = 0; i < resultRows.length; i++){
        porblemTable.row.add( [
            resultRows.eq(i).find('td').eq(0).html(),
            resultRows.eq(i).find('td').eq(1).html(),
            resultRows.eq(i).find('td').eq(2).html(),
            '<a style="cursor:pointer" type="button" onClick="removeRow(\'#'+resultRows.eq(i).find('td').eq(0).html().toString()+'\')">移除</a>',
            '<label class="radio-inline"><input name="0001" id="0001-a" value="aviliable" checked="" type="radio">可用</label><label class="radio-inline"><input name="0001" id="0001-b" value="aviliable" checked="" type="radio">不可用</label>'
        ] ).draw();
    }
    $('#search-result-problem').modal('hide');
    $('#search-result-table-p tr').slice(1).removeClass('info');
});
function removeRow(id){
    porblemTable.row(id).remove().draw(false);
}

//竞赛者多选
multicheck_c();
//题目添加
function checkAll_c() {
    $('#search-result-table-c tr').slice(1).addClass('info');
}
function cancelAll_c(){
    $('#search-result-table-c tr').slice(1).removeClass('info');
}
function multicheck_c(){
	$('#search-result-table-c tr').slice(1).click(function(event) {
	    //alert();
	    $(this).toggleClass('info');
	});
}
//移动竞赛者查询结果数据
$('#add-contestants-c').click(function(event) {
	var resultTablec = $('#search-result-table-c');
	var cTable = $('#contestant-table');
	var searchResultc = resultTablec.find('tbody');
	var addResultc = cTable.find('tbody');
	var resultRowsc = searchResultc.find('.info');
	addRow(addResultc,resultRowsc);
	$('#search-result-contestant').modal('hide');
    $('#search-result-table-c tr').slice(1).removeClass('info');
});
//移动题目
function addRow(add,result){
	for(var i = 0; i < result.length; i++){
		add.append('<tr>' + '<td>' + result.eq(i).find('td').eq(0).html() + '</td>' + '<td>' + result.eq(i).find('td').eq(1).html() + '</td>' + '<td>' + result.eq(i).find('td').eq(2).html() + '</td>' + '<td><a href="javascript:void(0);">删除</a></td>' + '</tr>');
	}
	addDelete();
}
//删除题目
function addDelete(){
	$("[href='javascript:void(0);']").click(function(event) {
		//alert($(this).parent().parent());
		$(this).parent().parent().remove();
	});
}