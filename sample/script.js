//create paragraph
var paragraph = document.createElement("p");
paragraph.innerHTML = "Moolah";
var videoBanner = document.getElementById("videoBanner");
videoBanner.appendChild(paragraph);
//adding new header
var newHeader = document.createElement("h2");
newHeader.innerHTML = "Ladies and Gentlemen";
videoBanner.insertBefore(newHeader, paragraph);
//removing child
videoBanner.removeChild(paragraph);
videoBanner.removeChild(newHeader);
// switch pictures 
var thinkIcon = document.getElementById('pic');
thinkIcon.setAttribute("src", "newPic.jpg");
//adding events
videoBanner.addEventListener("click", myEventHandler);
function myEventHandler() {
	alert("Hello World!");
}
