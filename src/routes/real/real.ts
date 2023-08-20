import {Router, requests, response} from "express";
import {imageRandomization} from "../../controllers/image_randomization";
const routes = Router()

routes.get("/media/r/boobs", async(request, response) => {
	imageRandomization("media/real/boobs", response);
});
routes.get("/media/r/ass", async(request, response) => {
	imageRandomization("media/real/ass", response);
});
routes.get("/media/r/pussy", async(request, response) => {
	imageRandomization("media/real/pussy", response);
});

export default routes;