let box=document.querySelectorAll('.boxes');
let resetbtn=document.querySelector("#reset");

let turn=true;

const winpattern = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

box.forEach((boxes) => {
    boxes.addEventListener("click",() => {
        console.log("Box is clicked");
        if(turn)
        {
            boxes.innerHTML='O';
            turn=false;
        }
        else
        {
            boxes.innerHTML='X';
            turn=true;
        }
        });
        
});