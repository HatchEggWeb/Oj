//Load datarangepicker
$('.daterangepicker').remove();
$('input[name="add-class-time"]').daterangepicker(
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

var classAddStuTable = $('#class-add-stu-table').DataTable({
    responsive: true,
    createdRow: function(row,data,index) {
        $('td', row).eq(0).parent().attr('id',data[0]);
    }
});

//添加题目全选
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
//移动搜索结果至大表格
$('#add-students-m').click(function(event) {
    var resultTablem = $('#search-result-table-m');
    var casTable = $('#class-add-stu-table');
    var searchResult = resultTablem.find('tbody');
    var addResult = casTable.find('tbody');
    var resultRows = searchResult.find('.info');
    //alert(resultRows.length);
    for(var i = 0; i < resultRows.length; i++){
        classAddStuTable.row.add( [
            resultRows.eq(i).find('td').eq(0).html(),
            resultRows.eq(i).find('td').eq(1).html(),
            resultRows.eq(i).find('td').eq(2).html(),
            '<a style="cursor:pointer" type="button" onClick="removeRow(\'#'+resultRows.eq(i).find('td').eq(0).html().toString()+'\')">移除</a>'
        ] ).draw();
    }
    $('#search-result').modal('hide');
    $('#search-result-table-m tr').slice(1).removeClass('info');
});
//删除题目
function removeRow(id){
    classAddStuTable.row(id).remove().draw(false);
}