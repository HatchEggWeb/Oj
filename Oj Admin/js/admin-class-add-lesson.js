//Load datarangepicker
$('#add-class-time').daterangepicker(null,
    function(start, end, label) {
        console.log(start.toISOString(), end.toISOString(), label);
    });