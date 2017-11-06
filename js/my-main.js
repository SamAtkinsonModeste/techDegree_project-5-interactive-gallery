// JavaScript Document

jQuery("#myNanoGallery").show();


jQuery("#myNanoGallery").nanoGallery(
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
