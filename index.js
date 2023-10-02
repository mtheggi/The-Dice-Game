var ran1 = Math.floor(Math.random()*6)+ 1 ; 
var ran2  = Math.floor(Math.random()*6)+ 1 ; 

var imgsrc1 = "./images/dice" + ran1 + ".png" ; 
var imgsrc2 = "./images/dice" + ran2 + ".png" ;

document.querySelector(".one img").setAttribute("src" , imgsrc1);
document.querySelector(".two img").setAttribute("src" , imgsrc2);


if(ran1 > ran2) {
    document.querySelector("h1").innerText = "🚩 player 1 Wins" ;  
}else if (ran2 > ran1 ){    
    document.querySelector("h1").innerText = "player 2 Wins 🚩" ;  
}else{
    document.querySelector("h1").innerText = "🎌 Draw !! 🎌" ;  
}