var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $caption = $('<p></p>');
var $nextImage = $('<img>');
var $prevImage = $('<img>');

$overlay.append($image);

$overlay.append($caption);

$('body').append($overlay); //add overlay


$('.gallery a').click(function(event){
	event.preventDefault();
	$overlay.show('slow');
	$('.arrows').show();
	theCurrentImage(this);
});







function theCurrentImage (currentImage){
	thisImage = currentImage;
	var image2show = $(thisImage).attr('href');
	$image.attr('src',image2show);

	var captionText = $(currentImage).children('img').attr('alt');
	$caption.text(captionText);
}


$('.next').click(function() {
	$nextImage= thisImage.nextElementSibling;
	 $overlay.detach($image);
	 $overlay.attach($nextImage);
});




$('.previous').click(function() {
	$prevImage= thisImage.previousElementSibling;
	 $overlay.detach($image);
	 $overlay.attach($prevImage); 
});


//When overlay is clicked
$overlay.click(function(){ 
	$overlay.hide()
    $('.arrows').hide();
});
