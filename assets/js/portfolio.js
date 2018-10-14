const descriptive = ["DESIGNER", "FRONT-END DEVELOPER", "RESEARCHER", "CREATOR"];
let counter = 0;

function descriptiveLoop() {
    if (counter < descriptive.length) {
        $("#changingTitles").empty();
        $("#changingTitles").append(descriptive[counter]);
        counter++;
    } else {
        counter = 0;
    };
};

setInterval(descriptiveLoop, 2000);

$(document).ready(function(){
    var scrollTop = 0;
    $(window).scroll(function(){
      scrollTop = $(window).scrollTop();
       $('.counter').html(scrollTop);
      
      if (scrollTop >= 100) {
        $('#global-nav').addClass('scrolled-nav');
      } else if (scrollTop < 100) {
        $('#global-nav').removeClass('scrolled-nav');
      } 
      
    }); 
    
  });
