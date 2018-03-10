//移除可能存在的多余div
$('.daterangepicker').remove();

//datatable
var accountTable = $('#account-table').DataTable({
    responsive: true,
});

//change role
/*
//use 'name'
$("[name='role-selector']").change(function(event) {
	//alert($(this).find('option:selected').text());
	var option = $(this).find('option:selected').text();
	if(option == "学生"){
		$('#change-to-student').modal('show');
	}
	else if(option == "教师"){
		$('#change-to-teacher').modal('show');
	}
	else if(option == "管理员"){
		$('#change-to-admin').modal('show');
	}
	else if(option == "超级管理员"){
		$('#change-to-sadmin').modal('show');
	}
});
*/
//only use table id
$('#account-table').find('select').change(function(event) {
	//alert($(this).find('option:selected').text());
	var option = $(this).find('option:selected').text();
	if(option == "学生"){
		$('#change-to-student').modal('show');
	}
	else if(option == "教师"){
		$('#change-to-teacher').modal('show');
	}
	else if(option == "管理员"){
		$('#change-to-admin').modal('show');
	}
	else if(option == "超级管理员"){
		$('#change-to-sadmin').modal('show');
	}
});
//delete
$('#account-table').find("[href='#']").click(function(event) {
	//alert($(this).parent().parent().html());
	
	accountTable.row($(this).parent().parent()).remove().draw();
});