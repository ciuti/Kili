
$(document).ready(function() {
	var s = $(".navbarshadows");
	var pos = s.position();					   
	$(window).scroll(function() {
		var windowpos = $(window).scrollTop();
		if (windowpos >= pos.top & windowpos <=1000) {
			$("nav").addClass("navbarshadow");
		} else {
			$("nav").removeClass("navbarshadow");	
		}
	});
});