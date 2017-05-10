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

//CODE FOR CHANGING ELEMENTS BASED ON WINDOWS WIDTH
	// $(window).on("resize", function() {
	// 	var windowWidth = $(window).width();
	// 	console.log(windowWidth);
	// 	// if (windowWidth <= 480) {
	// 	// 	document.getElementById("#downbtn").changeImage;
	// 	// }
	// });


//CODE FOR BIO MODAL BOX
// Get the modal
var modal = document.getElementById("bio");

// Get the button that opens the modal
var btn = document.getElementById("biobtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
   modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




});