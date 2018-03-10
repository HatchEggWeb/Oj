//添加题目全选
$('.daterangepicker').remove();
function checkAll() {
    $('#search-result-table-m tr').slice(1).addClass('info');
}
function cancelAll(){
    $('#search-result-table-m tr').slice(1).removeClass('info');
}
//搜索结果多选
$('#search-result-table-m tr').slice(1).click(function(event) {
    //alert();
    $(this).toggleClass('info');
});
//Load datarangepicker
$('#add-lesson-time').daterangepicker(
{
    locale: {
      format: 'YYYY-MM-DD'
    },
    startDate: moment().subtract(29, 'days'),
    endDate: moment()
}, 
function(start, end, label) {
    //alert("A new date range was chosen: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
});
/*
//lesson search
//lesson problem search selected
var lpSelected = "ID";
$('#lesson-select').change(function(event) {
	var option = $('#lesson-select option:selected');
	if(option.text() == "ID"){
		lpSelected = "ID";
	}
	else if(option.text() == "Title"){
		lpSelected = "Title";
	}
	else if(option.text() == "Content"){
		lpSelected = "Content";
	}
});
$('#lesson-search-button').click(function(event) {
	var searchInput = $("#lesson-search").text();
});
*/

var lessonProblemTable = $('#lesson-problem-table').DataTable({
    responsive: true,
    createdRow: function(row,data,index) {
        $('td', row).eq(2).addClass('overflow-hide');
        $('td', row).eq(1).addClass('overflow-hide');
        $('td', row).eq(1).parent().attr('id',data[0]);
    }
});
//移动搜索结果至大表格
$('#add-problems-m').click(function(event) {
    var resultTablem = $('#search-result-table-m');
    var hpTable = $('#lesson-problem-table');
    var searchResult = resultTablem.find('tbody');
    var addResult = hpTable.find('tbody');
    var resultRows = searchResult.find('.info');
    //alert(resultRows.html());
    for(var i = 0; i < resultRows.length; i++){
        lessonProblemTable.row.add( [
            resultRows.eq(i).find('td').eq(0).html(),
            resultRows.eq(i).find('td').eq(1).html(),
            resultRows.eq(i).find('td').eq(2).html(),
            '<a style="cursor:pointer" type="button" onClick="removeRow(\'#'+resultRows.eq(i).find('td').eq(0).html().toString()+'\')">移除</a>',
            '<label class="radio-inline"><input name="0001" id="0001-a" value="aviliable" checked="" type="radio">可用</label><label class="radio-inline"><input name="0001" id="0001-b" value="aviliable" checked="" type="radio">不可用</label>'
        ] ).draw();
    }
    $('#search-result').modal('hide');
    $('#search-result-table-m tr').slice(1).removeClass('info');
});
function removeRow(id){
    lessonProblemTable.row(id).remove().draw(false);
}