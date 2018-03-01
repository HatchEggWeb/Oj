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