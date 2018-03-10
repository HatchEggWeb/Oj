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

$('#problem-table').DataTable({
    responsive: true
});