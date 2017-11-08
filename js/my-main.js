// JavaScript Document



//shows Search Box and Nano gallery when js is not disabled
$("#search").fadeIn(1400);
$("#myNanoGallery").fadeIn(1800);


//search functionality
//simple get the input to console

/*console.log($("a").attr("title"));*/

/*var $imageContainer= $("a").attr("title");*/
/*$( "[title]" ).each(function( index ) {
  console.log( index + ": " + $( this ).text() );
});*/

//1.Capture input value and convert to lower case
$("#searchImgs").on("keyup", function(){ 
	var $titleImg=$(this).val().toLowerCase();
	//2.Need to check each A with attribute title
	    console.log($titleImg);
	});

   			   

											
	
	
	/*console.log(titleImg);
	
});*/


$("#myNanoGallery").nanoGallery(
			{thumbnailWidth:200,thumbnailHeight:200,
			 itemsBaseURL:'img',
			 thumbnailHoverEffect:
			 /*[{ name: 'slideUp', duration: 400, durationBack: 200, easing: 'swing' },
                  { name: 'borderLighter', duration: 300, durationBack: 200, delay: 200 }],*/
          
				[{
				  'name': 'rotateCornerBL',
				  'duration':400, 
				  easing: 'swing',
				  easingBack: 'swing' },
				 ],

				thumbnailGutterWidth: 10,
				thumbnailGutterHeight: 10,
			 /*thumbnailHoverEffect: [{ name: 'slideUp', duration: 400, durationBack: 200, easing: 'swing', easingBack: 'swing' }],*/
			 colorScheme: 'default',
             locationHash: false,
			 thumbnailLabel:{display:true,position:'overImageOnTop', align:'center'},
             viewerDisplayLogo:false
			 
			 
			});
