$(document).ready(function() {
	new WOW().init();
	$(window).on("scroll", function() {
    	var scrollDistance = $(window).scrollTop();
    	if (scrollDistance >50){
    		$("#mainNav").removeClass("affix-top").addClass("affix");

    	} else {
    		$("#mainNav").removeClass("affix").addClass("affix-top");
    	}

	});
	$(document).on("click", ".page-scroll", function(){
		var target = $(this).attr ("href");
		$("body").animate({
    		scrollTop: $(target).offset().top
    	}, 2000);
    });
    $("body").scrollspy({target: "#mainNav"});

});