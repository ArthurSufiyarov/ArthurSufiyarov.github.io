

$(function () {
	var elWrap = $('#slider'),
		el =  elWrap.find('img'),
		indexImg = 1,
		indexMax = el.length;
	
	function change () {
		el.fadeOut(500);
		el.filter(':nth-child('+indexImg+')').fadeIn(500);
	}	
		
	function autoCange () {	
		indexImg++;
		if(indexImg > indexMax) {
			indexImg = 1;
		}			
		change ();
	}	
	var interval = setInterval(autoCange, 3000);

	elWrap.mouseover(function() {
		clearInterval(interval);
	});
	elWrap.mouseout(function() {
		interval = setInterval(autoCange, 3000);
	});
	
	elWrap.append('<span class="next"></span><span class="prev"></span>');
	
	$('span.next').click(function() {
		indexImg++;
		if(indexImg > indexMax) {
			indexImg = 1;
		}
		change ();
	});
	$('span.prev').click(function() {
		indexImg--;
		if(indexImg < 1) {
			indexImg = indexMax;
		}
		change ();
	});	
});

$(document).ready(function() { 
	$('#go').click( function(event){
		event.preventDefault(); 
		$('#overlay').fadeIn(400,
		 	function(){ 
				$('#modal_form') 
					.css('display', 'block') 
					.animate({opacity: 1, top: '50%'}, 200);
		});
	});
	$('#go2').click( function(event){ 
		event.preventDefault(); 
		$('#overlay').fadeIn(400, 
		 	function(){ 
				$('#modal_form') 
					.css('display', 'block')
					.animate({opacity: 1, top: '50%'}, 200);
		});
	});
	$('#go3').click( function(event){ 
		event.preventDefault(); 
		$('#overlay').fadeIn(400, 
		 	function(){ 
				$('#modal_form') 
					.css('display', 'block')
					.animate({opacity: 1, top: '50%'}, 200);
		});
	});
	$('#modal_close, #overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
		$('#modal_form')
			.animate({opacity: 0, top: '45%'}, 200,  
				function(){ 
					$(this).css('display', 'none'); 
					$('#overlay').fadeOut(400);
				}
			);
	});
});

