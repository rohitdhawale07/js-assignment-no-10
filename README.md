# js-assignment-no-10

hosted link :- https://rohitdhawale07.github.io/js-assignment-no-10/

this is simple preoject of creating a two buttons who changes the value of circle background color and changes shape from trianagle to square and voice versa.
firsly we created a whole html using div and button elements.
then we give appropriate css to our html document.

and then there is js part initially we get all the id's by get element by id method.
and then added event listener to buttons respectively.
for the change color button we added click event and run a infinite loop of colors by using if else condition.
and for change shape button we craeted a new class by className method whose parameters will be given in css.
after clicking on change shape button it actually chnges two classes first class is craeted by html and the second class is created dynamically.

HTML code
<div id="section">
        <div id="circle">
            <div class="triangle"></div>
        </div>
        <div id="changeColor">
            <button class="btn">Change Color</button>
        </div>
        <div id="changeShape">
            <button class="btn">Change Shape</button>
        </div>
    </div>

    CSS code
    
#section{
    text-align: center;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
}
#circle{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: red;
    text-align: center;
    display: flex;
}
.triangle{
    position: relative;
    width: 70px;
    height: 70px;
    background-color: rgb(250, 247, 247);
    z-index: 100;
    margin-top: 40px;
    margin-left: 40px;
}

.btn{
    padding: 3px 5px;
    border-radius: 5px;
    color: white;
    background-color: rgb(52, 52, 252);
}
.Triangle{
    background-color: transparent;
    position: relative;
    left: 38px;
    top: 40px;
    width: 0;
    height: 0;
    border-bottom: 75px solid rgb(246, 246, 252);
    border-right: 75px solid transparent;
}

 JAVASCRIPT code
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



