const circle = document.getElementById("circle");
const triangle = document.querySelector(".triangle");
const changeColor = document.getElementById("changeColor");
const changeShape = document.getElementById("changeShape");

var arrOfColors = ["red","green","blue","orange","cyan","violet","lightblue","lightgreen","lemon"];
var index = 0;  
changeColor.addEventListener("click",()=>{
    if(index === arrOfColors.length){
        index = 0;
    }
    circle.style.backgroundColor = arrOfColors[index];
    index++;
})

var triangleShape = false;
changeShape.addEventListener("click",()=>{
    if(!triangleShape){
         var newShape = document.querySelector(".triangle")
         newShape.className = "Triangle";
        triangleShape = true;
    }else{
        var shape = document.querySelector(".Triangle");
        shape.className = "triangle"
        triangleShape = false;

    }
})