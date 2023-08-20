import * as express from "express";
import * as bodyParser from "body-parser";
import real from "./routes/real/real";
import hentai from "./routes/hentai/hentai";
import home from "./routes/home";
import search from "./routes/hentai/search";
const app = express();
app.use(bodyParser.json());

app.use("/",
    real,
    hentai,
    search,
    home
);

app.listen(3000, () => {
	console.log("running");
});
