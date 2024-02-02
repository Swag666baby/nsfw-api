import {load} from "cheerio";
import {default as axios} from "axios";

export const resolvedImages  = async(urls) => {
	let resolvedImages: any[] = []
	
	for(let url of urls){
   	 const headers = {
  	      "User-Agent": "Mozilla/5.0 (Linux; Android 12; SM-S906N Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, como Gecko) Versão/4.0 Chrome/80.0.3987.119 Mobile Safari/537.36",
	    }
 	   const response = await axios.get(url, {headers});
	    let $ = load(`${response.data}`);
 	   let data: any[] = []
 	   $(".container img").map((index, element) => {
			const image = $(element).attr("src")
  	      if(!image?.endsWith(".svg")){
				resolvedImages.push(image);
			}
  	  });
	}
	return resolvedImages;
}