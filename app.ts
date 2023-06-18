import {readdir, readFileSync} from "fs";
import * as express from "express";
import {sample} from "lodash";
const app = express();

function randomImages(folder, response){
    readdir(folder, (err, files) => {
        if (err) throw err;
        response.contentType('image/jpeg')
        const randomImage = sample(files);
        response.send(readFileSync(`${folder}/${randomImage}`))
    });
}
app.get('/:value', (request, response) =>{
    const value: string = request.params.value
    if(value == "hentai") randomImages("media/hentai", response)
    else if(value == "yuri") randomImages("media/yuri", response)
    else if(value == "yaoi") randomImages("media/yaoi", response)
    else if(value == "trap") randomImages("media/trap", response)
    else response.send({"response":"see the routes in : https://github.com/Swag666baby/nsfw-api"})
});
app.listen(3000, () => console.log('server running on port 3000'));
