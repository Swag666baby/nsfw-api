const fs = require('fs');
const express = require('express');
const _ = require('lodash');
const app = express();

function randomImages(folder, response){
    fs.readdir(folder, (err, files) => {
        if (err) throw err;
        response.contentType('image/jpeg')
        const randomImage = _.sample(files);
        response.send(fs.readFileSync(`${folder}/${randomImage}`))
    });
}

app.get('/hentai', (request, response) =>{
    randomImages("media/hentai", response)
});
app.get('/yuri', (request, response) => {
    randomImages("media/yuri", response)
});
app.get('/yaoi', (request, response) => {
    randomImages("media/yaoi", response)
});
app.get('/bdsm', (request, response) => {
    randomImages("media/bdsm", response)
});
app.get('/trap', (request, response) => {
    randomImages("media/trap", response)
});
app.listen(3000, () => {
  console.log('server running on port 3000');
});