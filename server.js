const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const { json } = require('express');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('build'))

app.get('/leaderBoard', (req,res)=>{
    var rawData = fs.readFileSync('./database.json');
    var data = JSON.parse(rawData);
    res.json(data);
})

app.post('/leaderBoard', (req, res)=>{
    var rawData = fs.readFileSync('./database.json');
    var leaderBoard = JSON.parse(rawData).leaderBoard;

    for(var i = 0; i < leaderBoard.length; i++){
        if(req.body.score > leaderBoard[i].score){
            for(let i2 = leaderBoard.length -1; i2 > i; i2--)
                leaderBoard[i2] = leaderBoard[i2-1];
            
            leaderBoard[i] = req.body;
            break;
        }
    }

    fs.writeFileSync("./database.json",JSON.stringify({leaderBoard},null,2));
})

app.listen(process.env.PORT || 3000);