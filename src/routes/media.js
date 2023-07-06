function nsfwMedia(request, fs, response, _){
    const value = request.params.value;
    
    function randomImages(folder){
        fs.readdir(folder, (err, files) => {
            if(err) throw err;
            response.contentType('image/jpeg');
            const randomImage = _.sample(files);
            response.send(fs.readFileSync(`${folder}/${randomImage}`));
        });
    }
    
    if(value == "hentai") randomImages("media/hentai");
    else if(value == "yuri") randomImages("media/yuri");
    else if(value == "yaoi") randomImages("media/yaoi");
    else if(value == "trap") randomImages("media/trap");
    else if(value == "bdsm") randomImages("media/bdsm");
    else response.send({"response":"see the routes in : https://github.com/Swag666baby/nsfw-api"})
}
module.exports = nsfwMedia;