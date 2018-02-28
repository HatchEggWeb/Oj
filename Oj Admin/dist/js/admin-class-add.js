//Load datarangepicker
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
/*
//search seleted
var acssSelected;
acssSelected = "Stu No";
$('#add-class-select').change(function(event) {
    alert("s");
    var option = $('#add-class-select option:selected');
    if(option.text() == "Stu No"){
        alert(option.text());
        acssSelected = "Stu No";
    }
    else if(option.text() == "Name"){
        alert(option);
        acssSelected = "Name";
    }
});
$('#add-class-stu-search-button').click(function(event) {
	var searchInput = $('#add-class-stu-search').text();
});
*/

$('#class-add-stu-table').DataTable({
    responsive: true
});