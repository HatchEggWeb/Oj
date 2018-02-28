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
$('#lesson-problem-table').DataTable({
    responsive: true
});