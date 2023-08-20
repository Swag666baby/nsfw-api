import {Router, requests, response} from "express";
import {imageRandomization} from "../../controllers/image_randomization";
const routes = Router()

routes.get("/media/h/vanila", async(request, response) => {
	imageRandomization("media/hentai/vanila", response);
});
routes.get("/media/h/yaoi", async(request, response) => {
	imageRandomization("media/hentai/yaoi", response);
});
routes.get("/media/h/yuri", async(request, response) => {
	imageRandomization("media/hentai/yuri", response);
});
routes.get("/media/h/trap", async(request, response) => {
	imageRandomization("media/hentai/trap", response);
});
routes.get("/media/h/bdsm", async(request, response) => {
	imageRandomization("media/hentai/bdsm", response);
});

export default routes;