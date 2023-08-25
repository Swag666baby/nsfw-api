import {load} from "cheerio";
import {default as axios} from "axios";

export const pages = async(query) => {
	const response = await axios.get(`https://sfmcompile.club/?s=${query}`)
	const $ = load(response.data)
	let pages: any[] = []
	
	$("a").map((index, element) => {
		var url = $(element).attr("href")
		if(url?.includes("/page/")){
			pages.push(url)
		}
	});
	return pages
}