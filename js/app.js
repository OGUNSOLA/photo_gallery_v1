var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $caption = $('<p id="caption"></p>');
var thisImage;
var $overlayContainer = $('<div class="overlayContainer"></div>');
var $nextImage = $('<img src="icons/previous.jpg" id="next"></img>');
var $previousImage = $('<img src="icons/next.jpg" id="previous"></img>');
var ok;


$('body').append($overlay);
$overlay.append($overlayContainer);
$overlayContainer.append($image);
$overlay.append($nextImage);
$overlay.append($previousImage);
$overlay.append('<p id="closer">Click Image To Close</p>');
$overlay.append($caption);










$('.gallery a').click(function(event){
	event.preventDefault();
	$overlay.show('slow');
	$nextImage.show('slow');
	$previousImage.show('slow');
	theCurrentImage(this);
});







function theCurrentImage (currentImage){
	thisImage = currentImage;
	var image2show = $(thisImage).attr('href');
	$image.attr('src',image2show);

	var captionText = $(currentImage).children('img').attr('alt');
	$caption.text(captionText);
}


$nextImage.click(function() {
	theParent= $(thisImage).parent().next();
	if (theParent.length!=0){
		ok=$(theParent).children('a')
	}
	theCurrentImage(ok);

});




$previousImage.click(function() {
	theParent= $(thisImage).parent().prev();
	if (theParent.length!=0){
		ok=$(theParent).children('a')
	}
	theCurrentImage(ok);
});


//When overlay is clicked
$overlayContainer.click(function(){
    $overlay.hide();
});
