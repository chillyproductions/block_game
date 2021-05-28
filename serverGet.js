async function get(){
    let rawData = await fetch('http://localhost:3000/leaderBoard');
    let data = await JSON.parse(rawData)
    return data.leaderBoard;
}

function post(score){

}