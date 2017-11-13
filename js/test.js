// JavaScript Document


console.log($("a[id]").text().toLowerCase());
$("#haybale").remove();
$("#cave").remove();     
$("#canyon").remove();  
$("#iceberg").remove();  
$("#desert").remove();  
$("#fall").remove();  
$("#lake").remove();  
$("#dunes").remove();  
$("#sunset").remove();  
$("#country_lane").remove();  
$("#bluebells").remove();  
   


var $imgThumb= $(".nanoGalleryThumbnailContainer");
//1.Capture input value and convert to lower case
var imgText = $("a[id]").text().toLowerCase();


$("#searchImgs").on("keyup", function(){ 
	var $titleImg=$(this).val().toLowerCase();
	//2.Need to check each A with attribute title
//	    console.log($titleImg);
    
	
	  imgText.each(function (){
		  
		  if(titleImg.indexOf(imgText).not(this) )
			  imgText.remove();
	  });
	
	});


//search functionality
//simple get the input to console



/*var $imageContainer= $("a").attr("title");*/
/*$( "a" ).each(function( index ) {
  console.log( index + ": " + $( this ).text() );
});*/
