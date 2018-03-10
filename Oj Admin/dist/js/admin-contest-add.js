$('.daterangepicker').remove();
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

//题目添加
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

var porblemTable = $('#problem-table').DataTable({
    responsive: true,
    createdRow: function(row,data,index) {
        $('td', row).eq(2).addClass('overflow-hide');
        $('td', row).eq(1).addClass('overflow-hide');
        $('td', row).eq(1).parent().attr('id',data[0]);
    }
});

$('#add-problems-m').click(function(event) {
    var resultTablem = $('#search-result-table-m');
    var pTable = $('#problem-table');
    var searchResult = resultTablem.find('tbody');
    var addResult = pTable.find('tbody');
    var resultRows = searchResult.find('.info');
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
    $('#search-result').modal('hide');
    $('#search-result-table-m tr').slice(1).removeClass('info');
});
function removeRow(id){
    porblemTable.row(id).remove().draw(false);
}
