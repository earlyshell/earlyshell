$(document).ready(function(){
	
	var cramless_desc_collapse = function(mode){
		mode == 'show' ? 
		$('#link-sandbox,#link-findee,#cw-footer').fadeOut('slow',function(){
			$('#cramless-description').collapse(mode);
		})
		:
		$('#cramless-description').collapse(mode);
		$('#cramless-description').on('hidden.bs.collapse',function(){
			$('#link-sandbox,#link-findee').fadeIn('slow',function(){$('#cw-footer').fadeIn('slow');});
		});
	}

	$('#link-cramless').click(function(){
		$('#cramless-description').hasClass('show') === true ? cramless_desc_collapse('hide') : cramless_desc_collapse('show');
	});


	var findee_desc_collapse = function(mode){
		mode == 'show' ? 
		$('#link-sandbox,#link-cramless,#cw-footer').fadeOut('slow',function(){
			$('#link-findee>a>div').removeClass('text-right').addClass('text-center');
			$('#link-findee').css({'left':0});
			$('#findee-description').collapse(mode);
		})
		:
		$('#findee-description').collapse(mode);
		$('#findee-description').on('hidden.bs.collapse',function(){
			$('#link-findee>a>div').removeClass('text-center').addClass('text-right');
			$('#link-findee').css({'left':'-2rem'});
			$('#link-sandbox,#link-cramless').fadeIn('slow',function(){$('#cw-footer').fadeIn('slow');});
		});
	}

	$('#link-findee').click(function(){
		$('#findee-description').hasClass('show') === true ? findee_desc_collapse('hide') : findee_desc_collapse('show');
	});

	var sandbox_desc_collapse = function(mode){
		mode == 'show' ? 
		$('#link-findee,#link-cramless,#cw-footer').fadeOut('slow',function(){
			// location.replace('#2');
			$('#link-sandbox>a>div').removeClass('text-left').addClass('text-center');
			$('#link-sandbox').css({'left':0});
			$('#sandbox-description').collapse(mode);
			// location.replace('#2');
		})
		:
		$('#sandbox-description').collapse(mode);
		$('#sandbox-description').on('hidden.bs.collapse',function(){
			// location.replace('#2');
			$('#link-sandbox>a>div').removeClass('text-center').addClass('text-left');
			$('#link-sandbox').css({'left':'2rem'});
			$('#link-findee,#link-cramless').fadeIn('slow',function(){$('#cw-footer').fadeIn('slow');});
			// location.replace('#2');
		});
	}

	$('#link-sandbox').click(function(){
		$('#sandbox-description').hasClass('show') === true ? sandbox_desc_collapse('hide') : sandbox_desc_collapse('show');
	});


	
});