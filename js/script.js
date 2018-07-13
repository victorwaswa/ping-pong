$(document).ready(function(){
 $("form#leo").submit(function(event){
     event.preventDefault;
     var number=parseInt($("input#ro").val());
     var result=numbers(number);
     $("#result").text(result);
    });
 });
     var numbers = function(number) {
         for(number=0;number<20;number++){
        if((number % 3) ===0 && number % 5 === 0) {
                 alert("pingpong");
            }
            else if (number%5===0) {
                alert ("pong");
            }
             else if (number % 3 === 0) {
                 alert ("ping");
            
            }
            else {
                alert(number)
            }
    };
}
     
   
