$(document).ready(function() {
	console.log("main js file loaded and all DOMs ready");

$(".buymenu").click(toggleBuyMenu);
$("#buyimage").click(toggleBuyMenu);

//CODE FOR MOBILE MENU ACTION ON CLICK
	$(".mobilemenu").click(function() {
		$("#mobilemenubtn").toggleClass("expanded").siblings("div").slideToggle();
	});

// CODE FOR "BUY NOW" BUTTON
	function toggleBuyMenu(){
		$("#buymenubtn").siblings("div").slideToggle();
	}

// CODE FOR DESKTOP MENU BAR TO SHIFT AND STICK
	$(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $(".desktopmenu").addClass("fixedmenu");
        } else {
            $(".desktopmenu").removeClass("fixedmenu");
        }
    });

});