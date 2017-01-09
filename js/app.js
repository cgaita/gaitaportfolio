  //slideshow
var Projects = function(image, url, gitUrl){
	this.image=image;
	this.url=url;
	this.gitUrl=gitUrl;
}
var about_me = new Projects("img/about_me.png","http://codepen.io/cgaita/full/oLEAzY/","http://codepen.io/cgaita/pen/oLEAzY/");
var karma = new Projects("img/karma.png","https://cgaita.github.io/startup-landing-page-clone/", "https://github.com/cgaita/startup-landing-page-clone");
var street_fighter = new Projects("img/street_fighter.png", "https://cgaita.github.io/jquery-streetfighter/", "https://github.com/cgaita/jquery-streetfighter");
var shopping_list = new Projects("img/shopping_list.png", "https://cgaita.github.io/shopping-list/", "https://github.com/cgaita/shopping-list");
var hot_cold = new Projects("img/hot_cold.png","https://cgaita.github.io/hot-or-cold-starter/", "https://github.com/cgaita/hot-or-cold-starter");
var quiz = new Projects("img/quiz.png","https://cgaita.github.io/quiz/", "https://github.com/cgaita/quiz/tree/master");
var stackoverflow = new Projects("img/stackoverflow.png","https://cgaita.github.io/stackoverflow/","https://github.com/cgaita/stackoverflow");
var logos = new Projects("img/logos.png", "https://cgaita.github.io/logos/", "https://github.com/cgaita/logos");
var instagram = new Projects("img/instagram.png","https://cgaita.github.io/instagram/","https://github.com/cgaita/instagram");
  
var projectArray = [about_me, karma, street_fighter, shopping_list, hot_cold, quiz, stackoverflow, logos, instagram];
  
var image = new Array ("img/about_me.png", "img/karma.png", "img/street_fighter.png", "img/shopping_list.png", "img/hot_cold.png", "img/quiz.png","img/stackoverflow.png","img/logos.png","img/instagram.png");
var image_number =0;
var image_length = image.length - 1;
var Interval;

function setLinks(num) {
	var currentLink = projectArray[image_number].url;
	var currentGitLink = projectArray[image_number].gitUrl;
	var gitLink ="<li><a href=\"" + currentGitLink + "\" target=_new><i class='fa fa-github' aria-hidden='true'></i></a></li><li><a href=\"" + currentLink + "\" target=_new><i class='fa fa-desktop' aria-hidden='true'></i></a></li>";
	$('.icons > ul').html(gitLink);
}
function change_image(num){
	image_number = image_number + num;
	if (image_number > image_length){
		image_number =0;
	}
	if (image_number < 0){
		image_number= image_length;
	}
	$('#slideshow').fadeOut('slow', function(){
		$(this).attr('src', projectArray[image_number].image);
	}).fadeIn('slow');
	setLinks(image_number);
}
	change_image(image_number);
  

var modal = document.getElementById('myModal');
 
 // Get the button that opens the modal
var btn = document.getElementById("myBtn");
 
 // Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
 
 // When the user clicks on the button, open the modal 
btn.onclick = function() {
 	modal.style.display = "block";
}
 
 // When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = "none";
}
 
 // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
} 
$('.prev').on('click', function(e){
	change_image(-1)
})
$('.next').on('click', function(e){
	change_image(1)
})