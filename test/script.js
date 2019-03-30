$(document).ready(function(){
	//challenge 1 
	$("#head").hover(on,off);
		function on(){
			$(this).css('color', 'pink');
		}
	function off(){
		$(this).css('color', 'white'); 
	}
});
	//challenge 2
	$("#my_image").attr("src","cat.gif");
$('#my_image').on({
   click: function(){
       $('#my_image').attr('src','cat.gif');
    }


});

	
	






