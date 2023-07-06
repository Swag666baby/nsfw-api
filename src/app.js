const fs = require("fs");
const axios = require("axios");
const _ = require("lodash");
const cheerio = require("cheerio");
const express = require("express");
const nsfwMedia = require("./routes/media");
const searchRoute = require("./routes/search");
const app = express();

app.get('/media/:value', (request, response) =>{
    console.log(request.params.value)
    nsfwMedia(request, fs, response, _);
});
app.get("/search", async(request, response) => {
    searchRoute(request, response)
})
app.get("/", async(request, response) => {
    response.send({"docs": "https://github.com/Swag666baby/nsfw-api"})
})

app.listen(3000, () => console.log("running"))
