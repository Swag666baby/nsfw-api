import {searchPornImages} from "../../utils/scrapers/pornpics";
import {searchPornVideos} from "../../utils/scrapers/pornwhite";
import {Router, requests, response} from "express";
const routes = Router();

routes.get("/r/image/:tag", async(request, response) => {
	const resp = await searchPornImages(request.params.tag)
	if(resp[0]){
	    response.send(resp);
	}else{
		response.send({"error": "tag not found. see the documentation at: https://github.com/Swag666baby/nsfw-api"});
	}
});
routes.get("/r/video/search", async(request, response) => {
	const resp = await searchPornVideos(request.query.q)
	if(resp[0]){
	    response.send(resp);
	}else{
		response.send({"error": "tag not found. see the documentation at: https://github.com/Swag666baby/nsfw-api"});
	}
});
export default routes;
