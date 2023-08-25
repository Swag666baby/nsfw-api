import {surveyController} from "../../controllers/search_controller";
import {searchVideos} from "../../utils/scrapers/sfmcompile/index";
import {Router, requests, response} from "express";
const routes = Router();

routes.get("/h/image/search", async(request, response) => {
	const resp = await surveyController(request.query.q)
	if(resp[0]){
	    response.send(resp);
	}else{
		response.send({"error": "not found"});
	}
});
routes.get("/h/video/search", async(request, response) => {
	const resp = await searchVideos(request.query.q)
	if(resp[0]){
	    response.send(resp);
	}else{
		response.send({"error": "not found"});
	}
});

export default routes;
