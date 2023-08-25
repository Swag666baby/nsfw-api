import {pages} from "./pages";
import {load} from "cheerio";
import {default as axios} from "axios";

export const searchVideos = async(query) => {
	const pageUrls = await pages(query)
    let data: any[] = []
	for(let page of pageUrls){
	    const response = await axios.get(page)
	    const $ = load(response.data)
	
	    $(".wp-video-shortcode source").map((index, element) => {
		    var url = $(element).attr("src")
		    if(url?.endsWith(".mp4")){
			    data.push(url)
		    }
	    });
	}
	return data;
}