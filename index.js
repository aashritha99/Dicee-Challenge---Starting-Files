var random_number1=Math.floor(Math.random()*6)+1;

var random_image1="dice"+random_number1+".png"; // dice1.png - dice6.png
var random_image_source="images/"+random_image1; // images/dice1.png - images/dice6.png

var image1= document.querySelectorAll("img")[0].setAttribute("src", random_image_source);

var random_number2=Math.floor(Math.random()*6)+1;
var random_image2="dice"+random_number2+".png";
var random_image_spurce2="images/"+random_image2;
var images2=document.querySelectorAll("img")[1].setAttribute("src", random_image_spurce2);

if(random_number1>random_number2){
    document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else{
    if(random_number2>random_number1){
        document.querySelector("h1").innerHTML="Player 2 Wins!";
    }
    else{
        document.querySelector("h1").innerHTML="Draw!";
    }
}