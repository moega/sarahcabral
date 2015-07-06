$(document).ready(function() {
	console.log("JS file loaded and all DOMs ready");

//CODE FOR MOBILE MENU ACTION ON CLICK
	$(".mobilemenu").click(function() {
		$("#mobilemenubtn").toggleClass("expanded").siblings("div").slideToggle();
	});

// CODE FOR "BUY NOW" BUTTON
	$(".buymenu").click(function() {
		$("#buymenubtn").siblings("div").slideToggle();
	});

// CODE FOR DESKTOP MENU BAR TO SHIFT AND STICK
	$(window).scroll(function () {
        if ($(this).scrollTop() > 489) {
            $(".desktopmenu").addClass("fixedmenu");
        } else {
            $(".desktopmenu").removeClass("fixedmenu");
        }
    });

});