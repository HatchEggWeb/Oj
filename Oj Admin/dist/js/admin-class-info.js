//Load datarangepicker
$('.daterangepicker').remove();
addDelete();
addSelect();
$('#add-class-time').daterangepicker(
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

//添加题目全选
function checkAll() {
    $('#search-result-table-m tr').slice(1).addClass('info');
}
function cancelAll(){
    $('#search-result-table-m tr').slice(1).removeClass('info');
}
//搜索结果多选
function addSelect(){
    $('#search-result-table-m tr').slice(1).click(function(event) {
        //alert();
        $(this).toggleClass('info');
    });
}
//移动搜索结果至大表格
$('#add-students-m').click(function(event) {
    var resultTablem = $('#search-result-table-m');
    var stuTable = $('#student-table');
    var searchResult = resultTablem.find('tbody');
    var addResult = stuTable.find('tbody');
    var resultRows = searchResult.find('.info');
    //alert(resultRows.length);
    addRow(addResult,resultRows);
    $('#search-result').modal('hide');
    $('#search-result-table-m tr').slice(1).removeClass('info');
});
//移动题目
function addRow(add,result){
	for(var i = 0; i < result.length; i++){
		add.append('<tr>' + '<td>' + result.eq(i).find('td').eq(0).html() + '</td>' + '<td>' + result.eq(i).find('td').eq(1).html() + '</td>' + '<td><a href="javascript:void(0);">删除</a></td>' + '</tr>');
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
        h += '<tr>' + '<td>' + data[i].username + '</td>' + '<td>' + data[i].name + '</td>' + '<td>' + data[i].class + '</td>' + '</tr>';
    }
    $('#search-result-table-m').find('tbody').append(h);
    addSelect();
    addDelete();
}