const app = require('express')();
const cors = require('cors');
const fs = require('fs');

app.use(cors());

app.get('/leaderBoard', (req,res)=>{
    var rawData = fs.readFileSync('./database.json');
    var data = JSON.parse(rawData);
    res.json(data);
})

app.listen(3000);