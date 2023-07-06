const fs = require("fs");
const axios = require("axios");
const _ = require("lodash");
const cheerio = require("cheerio");
const express = require("express");
const nsfwMedia = require("./routes/media");
const searchRoute = require("./routes/search");
const app = express();

app.get('/media:value', (request, response) =>{
    nsfwMedia(request, response, fs, _);
});
app.get("/", async(request, response) => {
    searchRoute(request, response)
})

app.listen(3000)
