var randomNumbers=Math.floor(Math.random()*6)+1;

var randomImages="images/dice"+randomNumbers+".png";

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImages);

/*second dice image*/
var randomNumbers2=Math.floor(Math.random()*6)+1;

var randomImage2="images/dice"+randomNumbers2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImage2);

if(randomNumbers>randomNumbers2){
    document.querySelector("h1").innerHTML="Player1 is won";
}else{
    document.querySelector("h1").innerHTML="Player2 is won";
}

