import {Router, requests, response} from "express";
const routes = Router()

routes.get("/", async(request, response) => {
	response.send({"response":"see the routes in : https://github.com/Swag666baby/nsfw-api"})
});

export default routes;