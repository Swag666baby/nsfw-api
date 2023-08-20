import {scraper} from "../utils/scraper.js";

export const surveyController  = (search) => {
    let data: any[] = []
    const awaitPromise = () => {
        return new Promise(async(resolve) => {
            data = await scraper(search);
            resolve(data);
        });
     }
    const main = async() => {
        try{
            await awaitPromise();
            return data;
        }catch{
            return {"error":  10060};
        }
    }
    return main()
}