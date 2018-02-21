//Load datarangepicker
$('#add-class-time').daterangepicker(null,
    function(start, end, label) {
        console.log(start.toISOString(), end.toISOString(), label);
    });
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