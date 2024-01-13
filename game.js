let box = document.querySelectorAll(".game-box");
let reset = document.querySelector("#reset-btn");
let msgBox = document.querySelector(".msg-box");
let newGame = document.querySelector("#new");
let msgGame = document.querySelector("#msg");

let turnO = true;


let patterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
];




box.forEach((gamebox) => {
    gamebox.addEventListener("click",() => {
        if (turnO=== true){
            gamebox.innerText = "X";
            turnO = false;
        } else {
            gamebox.innerText = "O";
            turnO = true;
        }
        gamebox.disabled = true;
        winner();
    });
});

let disableBoxes = ()=>{
    for (perBox of box){
        perBox.disabled = true;
    }
}

let enableBoxes = ()=>{
    for (perBox of box){
        perBox.disabled = false;
        perBox.innerText = "";
    }
}


let showWinner = (winner) =>{
    msg.innerText = `The winner is ${winner}`;
    msgBox.classList.remove("hide");
    disableBoxes();
}

let resetOrNew = () => {
    turnO = true;
    enableBoxes();
    msgBox.classList.add("hide");
}

let winner = () =>{
    for (let pat of patterns) {
        let pos1Val = box[pat[0]].innerText;
        let pos2Val = box[pat[1]].innerText;
        let pos3Val = box[pat[2]].innerText;

        if (pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log ("winner winner chicken dinner");
                showWinner(pos3Val);
            }
        }
    }
};

newGame.addEventListener("click", resetOrNew );
reset.addEventListener("click", resetOrNew );