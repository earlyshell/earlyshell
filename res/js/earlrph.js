$(document).ready(function(){
	$('#about-btn').hide();

});

var toggle = function(ishown, ihidden) {
	$(ishown).click(function(){
		$(this).hide();
		$(ihidden).show();
	});

	$(ihidden).click(function(){
		$(this).hide();
		$(ishown).show();
	});
};

toggle('#skills-btn','#about-btn');

