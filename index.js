
const simple_color = ["red","green","tomato","pink","aqua", "rgba(43, 127, 238, 0.705)","#d6b5b5"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = simple_color[randomNumber];
    color.textContent = simple_color[randomNumber];
});

function getRandomNumber(){
    return Math.floor((Math.random() * simple_color.length));
}