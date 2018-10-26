function drag(id){
	var ele=document.getElementById(id);
	ele.onmousedown=function(e){
		var e=e||window.event;
		var x=e.offsetX;
		var y=e.offsetY;
	}
}