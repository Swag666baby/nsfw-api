import {searchPorn} from "../../utils/scrapers/pornpics/index";
import {Router, requests, response} from "express";
const routes = Router();

routes.get("/r/image/:tag", async(request, response) => {
	const resp = await searchPorn(request.params.tag)
	if(resp[0]){
	    response.send(resp);
	}else{
		response.send({"error": "tag not found. see the documentation at: https://github.com/Swag666baby/nsfw-api"});
	}
});
export default routes;
