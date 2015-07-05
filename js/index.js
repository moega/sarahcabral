$(document).ready(function() {
	console.log("JS file loaded and all DOMs ready");


	$(".mobilemenu").click(function() {
		$("#mobilemenubtn").toggleClass("expanded").siblings("div").slideToggle();
	});

	$(".mobilemenulink").click(function() {
		$("#mobilemenubtn").toggleClass("expanded").siblings("div").slideToggle(200);
	});

	$(".buymenu").hover(function() {
		$("#buymenubtn").siblings("div").slideToggle();
	});


// CODE FOR MENU BAR TO SHIFT AND STICK
	$(window).scroll(function () {
        if ($(this).scrollTop() > 489) {
            $(".desktopmenu").addClass("fixedmenu");
        } else {
            $(".desktopmenu").removeClass("fixedmenu");
        }
    });

});