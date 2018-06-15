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

$('.proj-sample').mouseenter(function(){
	switch($(this).attr('id')) {
		case 'sandbox-sample':
			$('#proj-name').html('The Sandbox');
			break;
		case 'cramless-sample':
			$('#proj-name').html('Cramless');
			break;
		case 'findee-sample':
			$('#proj-name').html('Findee');
			break;
		default:
			$('#proj-name').html('RECENT PROJECTS');
			break;	
	}
});

$('.proj-sample').mouseleave(function(){
	$('#proj-name').html('RECENT PROJECTS');
});

$('.cred-sample').mouseenter(function(){
	switch($(this).attr('id')) {
		case 'awesome-link':
			$('#cred-name').html('Font Awesome 5');
			break;
		case 'bootstrap-link':
			$('#cred-name').html('Bootstrap 4.1');
			break;
		case 'hero-link':
			$('#cred-name').html('Hero Patterns');
			break;
		default:
			$('#cred-name').html('CREDITS');
			break;	
	}
});

$('.cred-sample').mouseleave(function(){
	$('#cred-name').html('CREDTIS');
});

var getModalHeight = function(elem){
	// console.log($(mbody_id +' > div:nth-child(3)').height());
	return $(elem +' > div:nth-child(3)').height();
}

var getModalScrHeight = function(elem){
	return $(elem).height();
}

var getScrollAmt = function(elem){
	// console.log($(mbody_id).scrollTop());
	return $(elem).scrollTop();
}

var getMFooterHeight = function(elem){
	return $(elem).height();
}

$('#arts-modal-body').scroll(function(){
	// getModalHeight('#arts-modal-body');
	// getScrollAmt('#arts-modal-body');
	console.log('Scroll Amount: ' + $('#arts-modal-body').scrollTop());
	console.log('Modal Screen Height: ' + $('#arts-modal-body').parent().outerHeight());
	console.log('Modal Height: ' + $('#arts-modal-body').prop('scrollHeight'));
	console.log('Footer Height: ' + $('#arts-modal-body + .modal-footer').outerHeight());
	console.log('Scroll %: ' + $('#arts-modal-body').scrollTop()/(($('#arts-modal-body').prop('scrollHeight')-$('#arts-modal-body').parent().outerHeight())+$('#arts-modal-body + .modal-footer').outerHeight()));
});

$('.sining-up-btn').click(function(){
    $('[id*=-modal-body]').animate({
        scrollTop: $("#sining-title").offset().top
    }, 1000);
});
