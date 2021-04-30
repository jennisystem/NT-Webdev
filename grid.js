function drawGrid(elemId, dotColor, numX=9){
	var tmpCanvas = document.getElementById(elemId);
	var ctx = tmpCanvas.getContext("2d");
	var oldWidth = tmpCanvas.width, oldHeight = tmpCanvas.height;
	//var width = 1000;
	//var height = width*oldHeight/oldWidth;
	var width = oldWidth*10;
	var height = oldHeight*10;
	tmpCanvas.width = width;
	tmpCanvas.height = height;
	console.log(width);
	console.log(height);
	dotX = width / (4*numX);
	
	for(var x=dotX+2; x<width; x+=dotX*4){
		for(var y=dotX+2; y<height; y+=dotX*4){
			ctx.beginPath();
			ctx.fillStyle = dotColor;
			ctx.arc(x, y, dotX, 0, 6.3);
			ctx.fill();
		}
	}
	
	/*tmpCanvas.style.width = oldWidth;
	tmpCanvas.style.height = oldHeight;*/
}