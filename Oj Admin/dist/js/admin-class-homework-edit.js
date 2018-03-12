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
$('#add-homework-time').daterangepicker(
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
//homework search
//homework problem search selected
var hpSelected = "ID";
$('#homework-select').change(function(event) {
	var option = $('#homework-select option:selected');
	if(option.text() == "ID"){
		hpSelected = "ID";
	}
	else if(option.text() == "Title"){
		hpSelected = "Title";
	}
	else if(option.text() == "Content"){
		hpSelected = "Content";
	}
});
$('#homework-search-button').click(function(event) {
	var searchInput = $("#homework-search").text();
});
*/
var homeworkProblemTable = $('#homework-problem-table').DataTable({
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
    var hpTable = $('#homework-problem-table');
    var searchResult = resultTablem.find('tbody');
    var addResult = hpTable.find('tbody');
    var resultRows = searchResult.find('.info');
    //alert(resultRows.html());
    for(var i = 0; i < resultRows.length; i++){
        homeworkProblemTable.row.add( [
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
//移除
function removeRow(id){
    //alert(id);
    homeworkProblemTable.row(id).remove().draw(false);
}
//添加 "问题" 搜索结果至表格
// var dataStr = "[{\"code\":10001 ,\"title\":\"A+B Problem\" , \"description\": \"Calculate a + b.\"},{\"code\":10003 ,\"title\":\"Duplicate Pair\" , \"description\": \"An array of length n, with address from 1 to n inclusive, contains entries from the set {1,2,...,n-1} and there's exactly two elements with the same value. Your task is to find out the value.\"}]";
// var data = $.parseJSON(dataStr);
// console.log(data.length);
// $('#homework-search-btn-m').click(function(){
//  addResult(data);
// });
function addResult(data){
    var h = "";
    for(var i = 0; i < data.length; i++){
        h += '<tr>' + '<td>' + data[i].code + '</td>' + '<td class="overflow-hide">' + data[i].title + '</td>' + '<td class="overflow-hide">' + data[i].description + '</td>' + '</tr>';
    }
    console.log(h);
    $('#search-result-table-m').find('tbody').append(h);
    multicheck_p();
}