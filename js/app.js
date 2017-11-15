// JavaScript Document



//shows Search Box and Nano gallery when js is not disabled
$("#search").fadeIn(1400);
$("#myLightGallery").fadeIn(1800);

//function imgSearch() {
//var input, filter, thumbNail, img;
//input = document.getElementById('searchImgs');
//filter = input.value.toLowerCase();
//thumbNail = document.getElementByClassName('thumbNail');
//
//for (var i = 0; i < thumbNail.lenght; i++){
//	
//	img = thumbNail[i].getElementsByTagName('img')[0];
//	if (img.alt.toLowerCase().indexOf(filter)> -1){
//		thumbNail[i].style.display = "";
//		console.log(filter);
//	} else {
//		thumbNail[i].style.display = "none";
//	}
//}
//	
//}
//function contains(text_one, text_two) {
//	if(text_one.indexOf(text_two) != -1){
//		return true;
//	}
//}
//
//
$("#searchImgs").keyup(function () {
	var searchImgs = $("#searchImgs").val().toLowerCase();
    var thumbImg =$("img").attr();
});

/*console.log($("a[title]").text());*/


/*$("a[title='hay bales']").detach();*/

//1. Create object of search input
/*$("#searchImgs").on("keyup", function(){
	//2. Get value of search input
		var $searchVal =$(this).val().toLowerCase();
		/*console.log($searchVal);*/
	/*$("img[alt]']").each( function(){

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
			
			






	
											
	
	
	
	


