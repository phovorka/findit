$(document).ready(function(){
 var params  = 'width='+(((screen.width)/2));
 params += ', height='+screen.height;
 params += ', top=0';
 params += ', left='+(((screen.width)/2)-10);
 params += ', fullscreen=yes';

  $("#btn1").click(function(){
   var q = $("#test3").val(); 
   var url1 = "https://codepen.io/search/pens?q=";
   var url = url1+q;
   window.open(url, 'window name', params);
   return false;
    });
  
    $("#btn2").click(function(){
   var q = $("#test3").val(); 
   var url1 = "https://glitch.com/search?q=";
   var url = url1+q;
   window.open(url, 'window name', params);
   return false;
    });

  });
