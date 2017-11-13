// JavaScript Document



//shows Search Box and Nano gallery when js is not disabled
$("#search").fadeIn(1400);
$("#myNanoGallery").fadeIn(1800);


function contains(text_one, text_two) {
	if(text_one.indexOf(text_two) != -1){
		return true;
	}
}


$("#searchImgs").keyup(function () {
	var searchImgs = $("#searchImgs").val().toLowerCase();
	$("a").text().each(function (){
		if(!contains($(this).text().toLowerCase(), searchImgs)){
		$(this).detach();
		} else {
		 $(this).append();
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


   		


$("#myNanoGallery").nanoGallery(
			{thumbnailWidth:200,thumbnailHeight:200,
			 itemsBaseURL:'img',
			 thumbnailHoverEffect:
			 
			[{
				  'name': 'rotateCornerBL',
				  'duration':400, 
				  easing: 'swing',
				  easingBack: 'swing' },
				 ],

				thumbnailGutterWidth: 10,
				thumbnailGutterHeight: 10,
			 
			 colorScheme: 'default',
             locationHash: false,
			 thumbnailLabel:{display:true,position:'overImageOnTop', align:'center'},
             viewerDisplayLogo:false
			 
			 
			});






	
											
	
	
	
	


