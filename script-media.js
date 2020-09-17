
// MEDIA SCREEN MOBILE ______________________________________________


	else if (screen.width <= 470) {   // MEDIA SIZE MOBILE

  $("main").hide();
  $(".about").hide();
  $("#lang").hide();
  $("#lang2").hide();

  $(".name").prepend( "<br>" );
  $(".name").append( " Mobile Site under Construction / See you soon" );
  $("header").css("padding-left","10vw");
  $("header").css("padding-right","10vw");

  	// Signals that this is script for Mobile media size:
  	console.log("MOBILE");

}