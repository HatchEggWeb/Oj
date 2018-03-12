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
function multicheck(){
    $('#search-result-table-m tr').slice(1).click(function(event) {
        //alert();
        $(this).toggleClass('info');
    });
}
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
function addDelete(){
    $("[href='javascript:void(0);']").click(function(event) {
        //alert($(this).parent().parent());
        $(this).parent().parent().remove();
    });
}
//添加搜索结果至表格
// var dataStr = "[{\"id\":\"4aed5c62-216e-11\",\"username\":\"221500109\",\"password\":\"123456\",\"name\":\"周志强\",\"email\":null,\"role\":\"student\",\"authKey\":null,\"accessToken\":null},{\"id\":\"16ade169-216e-11\",\"username\":\"221500116\",\"password\":\"123456\",\"name\":\"范俊杰\",\"email\":null,\"role\":\"student\",\"authKey\":null,\"accessToken\":null}]";
// var data = $.parseJSON(dataStr);
// console.log(data.length);
// $('#student-search-btn-m').click(function(event) {
//     addResult(data);
// });
function addResult(data){
    var h = "";
    for(var i = 0; i < data.length; i++){
        h += '<tr>' + '<td>' + data[i].number + '</td>' + '<td>' + data[i].name + '</td>' + '<td>' + data[i].class + '</td>' + '</tr>';
    }
    $('#search-result-table-m').find('tbody').append(h);
    multicheck();
}