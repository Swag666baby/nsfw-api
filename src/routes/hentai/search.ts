import {surveyController} from "../../controllers/search_controller";
import {Router, requests, response} from "express";
const routes = Router();

routes.get("/h/search", async(request, response) => {
	const resp = await surveyController(request.query.q)
	response.send(resp);
});

export default routes;
