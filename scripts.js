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

function makeNavbar(activePage){
	var navBar = document.getElementById("main-navbar");
	navBar.innerHTML += '<div class="logoName"><a href="index.html" class="logo"></a>'+
		'<a href="index.html" class="companyName">NoetherTech</a></div>'+
		'<ul id="main-navbar-navigation"><li><a href="our_technology.html"' + ((activePage==1) ? ' class="active"' : '') + '>Technology</a></li>'+
		'<li><a href="science.html"' + ((activePage==2) ? ' class="active"' : '') + '>Science</a></li>'+
		'<li><a href="about_us.html"' + ((activePage==3) ? ' class="active"' : '') + '>Company</a></li>'+
		'<li><a href="history.html"' + ((activePage==3) ? ' class="active"' : '') + '>History</a></li>'+
		'<li id="contactUsButton"><a href="">Contact Us</a></li>'+
		'</ul><span id="contactUs"><a class="button" href="">CONTACT US</a></span>'+
		'<a onclick="showMenuBar()" id="dropdown"></a>';
}

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function scrollHandler() {
	var navbar = document.getElementById("main-navbar");
	var sticky = navbar.offsetTop;
	if (window.pageYOffset >= sticky + 10) {
		navbar.classList.add("fixed-nav")
	} else {
		navbar.classList.remove("fixed-nav");
	}
}
// When the user scrolls the page, execute myFunction
window.onscroll = function() {scrollHandler()};


function showMenuBar(){
	var navbar = document.getElementById("main-navbar-navigation");
	var contactUs = document.getElementById("contactUsButton");
	if(navbar.style.display == "none" || navbar.style.display == ""){
		navbar.style.display = "inline-block";
		contactUs.style.display = "inline-block";
	}else{
		navbar.style.display = "none";
		contactUs.style.display = "none";
	}
}