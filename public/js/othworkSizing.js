$(document).ready(function(){

	var setOWHeight = function(){
		var ow_heights = [];
		var minheight = '';
		$('.othwork-thumb').each(function(i){
			ow_heights[i] = $(this).height();
		});
		minheight = Math.min.apply(Math,ow_heights);
		console.log(minheight);
		$('.othwork-thumb').css({'height':minheight+'px','width':'auto'});
	};
	
	setOWHeight();	
	$(window).on('orientationchange resize',function(){
		setTimeout(function(){
			// setWidth(window.innerWidth);
			setOWHeight();
			console.log()
		},250);
	});
});	
