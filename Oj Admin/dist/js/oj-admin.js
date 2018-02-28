/*!
 * Start Bootstrap - SB Admin 2 v3.3.7+1 (http://startbootstrap.com/template-overviews/sb-admin-2)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */
$(function() {
    $('#side-menu').metisMenu();
});

//MuiltSelect
$(function(){
    //alert('s');
    var $multiSelect = $('#multiSelect');
    var $cancelSelect = $('#cancelSelect');
    var $deleteSelect = $('#deleteSelect');
    var $allSelect = $('#allSelect');
    var $checkBody = $('<td><input type="checkbox" id="checkAll" name="checkAll" /></td>');
    var $checkHead = $('<th style="width:50px"></th>');
    var $tableBodytr = $('table tbody tr');
    var $tableHeadtr = $('table thead tr');
    $multiSelect.click(function(event) {
        //alert("ss")
        $tableHeadtr.prepend($checkHead);
        $tableBodytr.prepend($checkBody);
        
        $(this).fadeOut(100, function() {
            $cancelSelect.fadeIn(100, function() {
                
            });
            $deleteSelect.fadeIn(100, function() {
                
            });
            $allSelect.fadeIn(100, function() {
                
            });
        });
        event.stopPropagation();  
    });
    $cancelSelect.click(function(event) {
        $tableHeadtr.find('th').first().remove();
        $tableBodytr.find('td:first').remove();
        $deleteSelect.fadeOut(100, function() {
                
            });
        $allSelect.fadeOut(100, function() {
                
            });
        $(this).fadeOut(100, function() {
            $multiSelect.fadeIn(100, function() {
                
            });
        });
        event.stopPropagation(); 
    });
})

//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function() {
    $(window).bind("load resize", function() {
        var topOffset = 50;
        var width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse');
        }

        var height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    });

    var url = window.location;
    // var element = $('ul.nav a').filter(function() {
    //     return this.href == url;
    // }).addClass('active').parent().parent().addClass('in').parent();
    var element = $('ul.nav a').filter(function() {
        return this.href == url;
    }).addClass('active').parent();

    while (true) {
        if (element.is('li')) {
            element = element.parent().addClass('').parent();
            //element = element.parent().addClass('in').parent();
            //修改了代码  'in'为原有代码
        } else {
            break;
        }
    }
});
