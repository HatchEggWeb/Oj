//添加题目全选
function checkAll() {
    var all = document.getElementById('check-all');
    var ones = document.getElementsByName('check-problems');
    if(all.checked){
        for(var i = 0; i < ones.length; i++){
            ones[i].checked = true;
        }
    } else {
        for(var i = 0; i < ones.length; i++){
            ones[i].checked = false;
        }
    }
}
//Load datarangepicker
$('#add-homework-time').daterangepicker(
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
//homework search
//homework problem search selected
var hpSelected = "ID";
$('#homework-select').change(function(event) {
	var option = $('#homework-select option:selected');
	if(option.text() == "ID"){
		hpSelected = "ID";
	}
	else if(option.text() == "Title"){
		hpSelected = "Title";
	}
	else if(option.text() == "Content"){
		hpSelected = "Content";
	}
});
$('#homework-search-button').click(function(event) {
	var searchInput = $("#homework-search").text();
});
*/
$('#homework-problem-table').DataTable({
	responsive: true
})