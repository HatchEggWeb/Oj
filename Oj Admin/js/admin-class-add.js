//Load datarangepicker
$('#add-class-time').daterangepicker(null,
    function(start, end, label) {
        console.log(start.toISOString(), end.toISOString(), label);
    });
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