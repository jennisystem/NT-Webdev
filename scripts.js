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

function makeFooter(activePage){
	var footer = document.getElementById("footer");
	footer.innerHTML += '<div id="sitemap">'+
		'<div class="sitemap-col">'+
			'<div class="logoName" style="font-size: 48px;"><a href="index.html" class="logo"></a><a href="index.html" class="companyName">NoetherTech</a></div>'+
			'<p>&#169;2021 Noether Sciences and Technologies Inc. ALL RIGHTS RESERVED</p>'+
		'</div>'+
		'<div class="sitemap-col true-sitemap">'+
			'<a href="index.html"' + ((activePage==0) ? ' class="active"' : '') + '>Homepage</a>'+
			'<a href="our_technology.html"' + ((activePage==1) ? ' class="active"' : '') + '>Technology</a>'+
			'<a id="sitemap-company-btn"class="directory' + ((activePage==3 || activePage==4) ? ' active' : '') + '" onclick="showSitemapCompany();" style="cursor: pointer;"> Company <i class="gg-chevron-down" style="display: inline; margin-left: 1em; font-size: 16px;"></i> </a>'+
			'<div class="sitemap-dropdown" id="sitemap-company">'+
				'<a href="about_us.html"' + ((activePage==3) ? ' class="active"' : '') + '>About Us</a>'+
				'<a href="history.html"' + ((activePage==4) ? ' class="active"' : '') + '>History</a>'+
			'</div><a href="science.html"' + ((activePage==2) ? ' class="active"' : '') + '>Science</a>'+
		'</div>'+
		'<div class="sitemap-col">'+
			'<p><a href="mailto:info@noethertech.com"">info@noethertech.com</a></p>'+
		'</div>'+
		'<a id="backToTop" href="#title">&#x2191;</a>'+
	'</div>';
}

function showSitemapCompany(){
	let dropdown = document.getElementById("sitemap-company");
	console.log(dropdown.style.display);
	if(dropdown.classList.contains("dropped")){
		dropdown.classList.remove("dropped")
	}else{
		dropdown.classList.add("dropped")
	}
}

function makeNavbar(activePage){
	var navBar = document.getElementById("main-navbar");
	navBar.innerHTML += '<div class="logoName"><a href="index.html" class="logo"></a>'+
		'<a href="index.html" class="companyName">NoetherTech</a></div>'+
		'<ul id="main-navbar-navigation"><li><a href="our_technology.html"' + ((activePage==1) ? ' class="active"' : '') + '>Technology</a></li>'+
		'<li><a href="science.html"' + ((activePage==2) ? ' class="active"' : '') + '>Science</a></li>'+
		'<li class="navbar-dropdown"><a onmouseover="showCompanyDropdown()" onmouseout="hideCompanyDropdown();"' + ((activePage==3 || activePage==4) ? ' class="active"' : '') + ' style="cursor: pointer;">Company</a>'+
			'<ul id="companyDropdown" onmouseover="showCompanyDropdown()" onmouseout="hideCompanyDropdown();">'+
			'<li><a href="about_us.html"' + ((activePage==3) ? ' class="active"' : '') + '>About Us</a></li>'+
			'<li><a href="history.html"' + ((activePage==4) ? ' class="active"' : '') + '>History</a></li></ul></li>'+
		'<li><a class="dropdown-opts" href="about_us.html"' + ((activePage==3) ? ' class="active"' : '') + ' onmouseover="showCompanyDropdown()" onmouseout="hideCompanyDropdown();">About Us</a></li>'+
		'<li><a class="dropdown-opts" href="history.html"' + ((activePage==4) ? ' class="active"' : '') + ' onmouseover="showCompanyDropdown()" onmouseout="hideCompanyDropdown();">History</a></li>'+
		'<li id="contactUsButton"><a href="">Contact Us</a></li>'+
		'</ul><span id="contactUs"><a class="button" href="">CONTACT US</a><p></p></span>'+
		'<a onclick="showMenuBar()" id="dropdown" style="cursor: pointer;"></a>';
		
	let companyDropdownElem = document.getElementById("companyDropdown");
	companyDropdownElem.style.display == "none";
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
	if(navbar.classList.contains("dropped")){
		navbar.classList.remove("dropped");
		contactUs.classList.remove("dropped");
	}else{
		navbar.classList.add("dropped");
		contactUs.classList.add("dropped");
	}
}


/**
 *	Toggles the visibility of the navigation bar/menu.
 */
function showCompanyDropdown(){
	let companyDropdownElem = document.getElementById("companyDropdown");
	if (window.matchMedia("(orientation: landscape)").matches) {
		companyDropdownElem.style.display = "flex";
		companyDropdownElem.classList.add("dropped")
	}else{
		for(let elem of document.getElementsByClassName("dropdown-opts")){
			elem.classList.add("dropped");
		}
	}
}

function hideCompanyDropdown(){
	let companyDropdownElem = document.getElementById("companyDropdown");
	if (window.matchMedia("(orientation: landscape)").matches) {
		companyDropdownElem.style.display = "none";
		companyDropdownElem.classList.remove("dropped")
	}else{
		for(let elem of document.getElementsByClassName("dropdown-opts")){
			elem.classList.remove("dropped");
		}
	}
}