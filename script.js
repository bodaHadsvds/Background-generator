var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var  body  = document.getElementById("gradient")


color1.addEventListener( "input" ,function(){
    console.log(color1);

    body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
   
}) 


color2.addEventListener( "input" ,function(){

    body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
   
})

