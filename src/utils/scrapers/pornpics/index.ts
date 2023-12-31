import {load} from "cheerio";
import { default as axios} from "axios";

export const searchPornImages = async(query) => {
	let data: any[] = []
	try{
	    const request = await axios.get(`https://www.pornpics.com/${query}/`);
        let $ = load(request.data);
	
	    $(".rel-link img").map((index, element) => {
		    data.push(`${$(element).attr("data-src")}`);
	    });
	return data
	}catch{
	    return []
    }
}
