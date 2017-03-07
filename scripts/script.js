 $(document).ready(function(){
    var currentPic = 0;
    var numOfPics = 0;
   $(".img-container img").hide();
   $(".img-container img").eq(currentPic).show();
    numOfPics = $(".img-container img").length;
    function nextImage(){
        if(currentPic < numOfPics){
             $(".img-container img").eq(currentPic)
                 .hide();
             currentPic = currentPic+1;
        
             $(".img-container img").eq(currentPic)
                 .fadeIn( )
                 .show();
              
             
             if(currentPic == numOfPics){
             currentPic = 0;
             $(".img-container img").eq(currentPic).fadeIn( ).show( ).end();
                 
         }// nested if
        

         }// end if
        
    }//end function
     
     setInterval(nextImage, 7000);
});//end main

