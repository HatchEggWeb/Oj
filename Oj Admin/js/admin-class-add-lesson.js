//Load datarangepicker
$('#add-class-time').daterangepicker(null,
    function(start, end, label) {
        console.log(start.toISOString(), end.toISOString(), label);
    });

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