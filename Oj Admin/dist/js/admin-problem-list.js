$('.daterangepicker').remove();
addDelete();
$('#problem-list-table').DataTable({
    responsive: true
});
function addDelete(){
	$("[href='javascript:void(0);']").click(function(event) {
		//alert($(this).parent().parent());
		$(this).parent().parent().remove();
	});
}