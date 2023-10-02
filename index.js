

var FirstPlayerName = prompt("Please! Enter First Player Name ?? "); 

var SecondPlayerName = prompt("Please! Enter Second Player Name ?? ");

alert("Welcome " + FirstPlayerName + " and " + SecondPlayerName +", Good Luck Both of You "); 

document.querySelector(".one p").innerText = FirstPlayerName; 

document.querySelector(".two p").innerText = SecondPlayerName; 
if(FirstPlayerName === "" ) {
    FirstPlayerName = "Player 1"; 
}
if(SecondPlayerName=== "" ) {
    SecondPlayerName = "Player 2" ;
}

function RollTheDice() {
    var ran1 = Math.floor(Math.random()*6)+ 1 ; 
    var ran2  = Math.floor(Math.random()*6)+ 1 ; 

    var imgsrc1 = "./images/dice" + ran1 + ".png" ; 
    var imgsrc2 = "./images/dice" + ran2 + ".png" ;

    document.querySelector(".one img").setAttribute("src" , imgsrc1);
    document.querySelector(".two img").setAttribute("src" , imgsrc2);


    if(ran1 > ran2) {
        document.querySelector("h1").innerText = "🚩 "+ FirstPlayerName +" Wins" ;  
    }else if (ran2 > ran1 ){    
        document.querySelector("h1").innerText = SecondPlayerName +" Wins 🚩" ;  
    }else{
        document.querySelector("h1").innerText = "🎌 Draw !! 🎌" ;  
    }
}