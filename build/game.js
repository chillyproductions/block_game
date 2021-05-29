const size = 50;
var gameLoop;

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.height = 2 * size;
canvas.width = 20 * size; 

var side = 0;
var switchCountDown = 0;
var boardArr = [new Array(20).fill(0),new Array(20).fill(0)]
var playerPos = 0;

function rotate(){
    for(let i = 0; i < boardArr[0].length-1; i++){
        boardArr[0][i] = boardArr[0][i+1];
        boardArr[1][i] = boardArr[1][i+1];
    }
    if(switchCountDown == 0){
        boardArr[side][boardArr[0].length-1] = 1;
        boardArr[Math.abs(side-1)][boardArr[0].length-1] = 0;

        if(Math.random() > 0.7){
            switchCountDown = 3;
            side = Math.abs(side-1);
        }
    }
    else{
        switchCountDown--;
        boardArr[0][boardArr[0].length-1] = 0;
        boardArr[1][boardArr[0].length-1] = 0;
    }
}

function showBoard(){
    ctx.fillStyle = "#000000";
    for(let i = 0; i < boardArr[0].length; i++){
        if(boardArr[0][i])
            ctx.fillRect(i*size,0,size,size);
        else if(boardArr[1][i])
            ctx.fillRect(i*size,size,size,size);
    }
}

function showPlayer(){
    ctx.fillStyle = "#00cc00";
    ctx.fillRect(1*size,playerPos*size,size,size);
}

function clearBoard(){
    ctx.clearRect(0,0,boardArr[0].length * size,boardArr[0].length * size);
}

function deathCheck(score){
    if(boardArr[playerPos][1] == 1){
        clearInterval(gameLoop);
        post(score);
        alert(score);
        location.href = './game.html';
        
    }
    return score + 20;
}

function startListening(){
    let score = 0;
    gameLoop = setInterval(() => {
        clearBoard();
        rotate();
        showBoard();
        showPlayer();
        score = deathCheck(score);

        document.getElementById("score").innerHTML = "score: "+ score;
    }, 50);

    document.addEventListener('keydown', key=>{
        if(key.key == "ArrowUp"){
            playerPos = 0;
            clearBoard();
            showBoard();
            showPlayer();
        }
        else if(key.key == "ArrowDown"){
            playerPos = 1;
            clearBoard();
            showBoard();
            showPlayer();
        }
        else if(key.key == " "){
            playerPos = Math.abs(playerPos-1);
            clearBoard();
            showBoard();
            showPlayer();
        }
    })
}


addEventListener('load', async()=>{
    if(localStorage.getItem("name"))
        startListening();
    else
        location.href = "./";
})

