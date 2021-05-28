async function get(){
    let res = await fetch('http://localhost:3000/leaderBoard')
    let data = await res.json();
    return data.leaderBoard;
}

function post(score){
    fetch('http://localhost:3000/leaderBoard',{
        method:'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name:"nuti", score:score})
    })
}

async function setLeaderBoard(){
    let arr = await get();   
    s = "";
    for(let score of arr){
        s += `<div>${score.name}: ${score.score}</div>`
    }

    document.getElementById("leaderBoard").innerHTML = s;  
}

setLeaderBoard();