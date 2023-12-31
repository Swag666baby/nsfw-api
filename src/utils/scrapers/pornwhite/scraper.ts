import {load} from "cheerio";
import axios from "axios";

export const scraper = async(url) => {
    const response = await axios.get(url);
    let $ = load(`${response.data}`);
    let data: any[] = []
    const images = $(".player meta").map((index, element) => {
        data.push(`${$(element).attr("content")}`);
    });
    
    return {
    	"title": data[0],
        "thumbnail": data[2],
        "video": data[4],
        "date": data[5],
        "url": data[6],
    }
}