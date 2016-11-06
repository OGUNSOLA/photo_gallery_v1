var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $caption = $('<p></p>');
var thisImage;
var ok;

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
	theParent= $(thisImage).parent().next();
	if (theParent.length!=0){
		ok=$(theParent).children('a')
	}
	theCurrentImage(ok); 

});




$('.previous').click(function() {
	theParent= $(thisImage).parent().prev();
	if (theParent.length!=0){
		ok=$(theParent).children('a')
	}
	theCurrentImage(ok); 
});


//When overlay is clicked
$overlay.click(function(){ 
	$overlay.hide()
    $('.arrows').hide();
});
