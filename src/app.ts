import * as express from "express";
import * as bodyParser from "body-parser";
import real from "./routes/porn/porn";
import hentai from "./routes/hentai/hentai";
import home from "./routes/home";
import hentaiSearch from "./routes/hentai/search";
import pornSearch from "./routes/porn/search";
const app = express();
app.use(bodyParser.json());

app.use("/",
    real,
    hentai,
    hentaiSearch,
    pornSearch,
    home
);

app.listen(3000, () => {
	console.log("running");
});
