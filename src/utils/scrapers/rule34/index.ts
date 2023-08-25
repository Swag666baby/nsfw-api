import {load} from "cheerio";
import {default as axios} from "axios";

export const scraper = async(search) => {
    const headers = {
        "User-Agent": "Mozilla/5.0 (Linux; Android 12; SM-S906N Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, como Gecko) Versão/4.0 Chrome/80.0.3987.119 Mobile Safari/537.36",
    }
    const response = await axios.get(`https://www.rule34.us/index.php?r=posts/index&q=${search}`, {headers});
    let $ = load(`${response.data}`);
    let data: any[] = []
    const images = $(".thumbail-container img").map((index, element) => {
        data.push(`${$(element).attr("data-src")}`);
    });
    return data;
}