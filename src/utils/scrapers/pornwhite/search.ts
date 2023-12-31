import {load} from "cheerio";
import axios from "axios";

export const search = async(search) => {

    const response = await axios.get(`https://www.pornwhite.com/search/?q=${search}`);
    let $ = load(`${response.data}`);
    let data: any[] = []
    const images = $("a").map((index, element) => {
    	let image = `${$(element).attr("href")}`
        if(image?.startsWith("https://www.pornwhite.com/videos/")){
            data.push(image);
        }
    });
    
    return data;
}