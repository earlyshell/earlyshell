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
	$('#cred-name').html('CREDITS');
});

$('.sining-up-btn').click(function(){
    $('[id*=-modal-body]').animate({
        scrollTop: $("#sining-title").offset().top
    }, 1000);
});

$('.prev-btn').click(function(){
	$('.select-item').hide(1500);
	$('#mech-pills').hide(2000);
});

$('.prev-btn-back').click(function(){
	$('#mech-pills').show(1000);
	$('.select-item').show(1500);
});

$('[data-dismiss="modal"]').click(function(){
	$('#mech-pills').show(1000);
	$('.select-item').show(1500);
	$('[id*="-proper"]').removeClass('show');
});

var getCardHeight = function(elem) {
	var hgt = [];
	$(elem).each(function(i){
		hgt[i] = $(this).height(); 		
	});
	return hgt;
};

var setCardHeight = function(elem) {
	var x = getCardHeight(elem);
	var y = Math.max.apply(Math,x);
	$(elem).height(y);
};

$('a[data-toggle="pill"]').on('shown.bs.tab', function (e) {
	$('.select-item').removeAttr('style');
	setTimeout(function(){setCardHeight('[class="tab-pane fade active show"] .select-item')},300);
});

$(window).on('orientationchange resize',function(){
	$('.select-item').removeAttr('style');
	$('.modal').hasClass('show') ? setTimeout(function(){setCardHeight('[class="tab-pane fade active show"] .select-item')},300) :'';
});
