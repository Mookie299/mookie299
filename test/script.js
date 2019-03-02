$(document).ready(function(){
	//challenge 1 
	$("#head").hover(on,off);
		function on(){
			$(this).css('color', 'red');
		}
	function off(){
		$(this).css('color', 'white'); 
	}
	//challenge 2 
	$("#pic").click(up,down);
		function up(){
			this.src ="cat.gif";
		}
		function down(){
			this.src="open.jpg"
		}
		//challenge 3 

	
});






