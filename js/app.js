// JavaScript Document



//shows Search Box and Nano gallery when js is not disabled
$("#search").fadeIn(1400);
$("#myLightGallery").fadeIn(1800);




 $("#searchImgs").keyup(function(){
	 var filter = $(this).val().toLowerCase();
  console.log(filter);
	 
	 $(".thumbNail").each(function (){
		 
		 //if the a items doesn't contain the text phrase
				 if ($(this).attr('title').search(new RegExp(filter, "i"))< 0){
			 $(this).fadeOut();
					 
					 //if the a items does contain the text phrase
		 } else {
			 $(this).show();
		 }
		 
	 });
	 
 });
	
	
	






$("#lightGallery-container").lightGallery({
	mode:'lg-slide-circular',
	cssEasing: 'ease',
	easing: 'linear',
	speed: 800,
	height: '100%',
	width: '100%',
	escKey: true,
	download: false,
	thumbnail: true,
	animateThumb: true,
	currentPagerPosition: 'right'
});
			
			







	
											
	
	
	
	


// JavaScript Document