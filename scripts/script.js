 $(document).ready(function(){
    var currentPic = 0;
    var numOfPics = 0;
   $(".img-container img").hide();
   $(".img-container img").eq(currentPic).show();
    numOfPics = $(".img-container img").length;
    $(".next").on("click", function(){
     
         if(currentPic < numOfPics){
             $(".img-container img").eq(currentPic).hide();
             currentPic = currentPic+1;
             $(".img-container img").eq(currentPic).fadeIn().show();
              
             
             if(currentPic == numOfPics){
             currentPic = 0;
             $(".img-container img").eq(currentPic).fadeIn().show();
         }// nested if
        

         }// end if
         
          
    });//end event listener
    
    
    $(".prev").on("click", function(){
        if(currentPic < numOfPics){
            $(".img-container img").eq(currentPic).hide();
             currentPic = currentPic-1;
             $(".img-container img").eq(currentPic).fadeIn().show();
              
            
            if(currentPic == -1){
             currentPic = numOfPics -1;
            $(".img-container img").eq(currentPic).show();
            
            
        } //end nested if
        
        }// end if
            
    });
});//end main
