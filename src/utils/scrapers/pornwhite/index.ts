import {search} from "./search";
import {scraper} from "./scraper";

export const searchPornVideos = async(query) => {
	const images: any[] = await search(query);
	let data: any[] = [];
	
	for(let image of images){
	    data.push(await scraper(image))
	}
	return data;
}