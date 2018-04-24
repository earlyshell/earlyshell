$(document).ready(function(){
	setInterval(function(){
		var dt = new Date($.now());
		if(dt.getHours()<=12){
			var hour = (dt.getHours()*30);	
		} else {
			var hour = ((dt.getHours()-12)*30);
		}
		
		var minutes = (dt.getMinutes()*6);
		var seconds = (dt.getSeconds()*6)-78;
		$('#hour').css({'transform':'rotate('+hour+'deg)'});
		$('#minute').css({'transform':'rotate('+minutes+'deg)'});
		$('#seconds').css({'transform':'rotate('+seconds+'deg)'});
		$('#mhour').css({'transform':'rotate('+hour+'deg)'});
		$('#mminute').css({'transform':'rotate('+minutes+'deg)'});
		$('#mseconds').css({'transform':'rotate('+seconds+'deg)'});
		//$('#hour').offset({top: $('#minute').offset().top, left: $('#minute').offset().left});
	},1000);
});