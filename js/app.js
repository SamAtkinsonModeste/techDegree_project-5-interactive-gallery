// JavaScript Document



//shows Search Box and Nano gallery when js is not disabled
$("#search").fadeIn(1400);
$("#theLightGallery").fadeIn(1800);


function contains(text_one, text_two) {
	if(text_one.indexOf(text_two) != -1){
		return true;
	}
}


$("#searchImgs").keyup(function () {
	var searchImgs = $("#searchImgs").val().toLowerCase();
	$("a").text().each(function (){
		if(!contains($(this).text().toLowerCase(), searchImgs)){
		$(this).hide();
		} else {
		 $(this).show();
	   }
	});
	
});

/*console.log($("a[title]").text());*/


/*$("a[title='hay bales']").detach();*/

//1. Create object of search input
/*$("#searchImgs").on("keyup", function(){
	//2. Get value of search input
		var $searchVal =$(this).val().toLowerCase();
		/*console.log($searchVal);*/
	/*$("a[title='lake']").each( function(){

		var $imgTitle =$("a[title]").text();

		if((this).not($searchVal)) {
			(this).detach();

		} else {
			(this).append();
		}

		 });	
	});*/

//3. check if the value matches text of all a elements
//3A. create var for a link text
//3B. Then match to  searchVal
//4. remove all a elemnts whose text is not the same value


   		


$("#theLightGallery").lightGallery({
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
			
			






	
											
	
	
	
	


