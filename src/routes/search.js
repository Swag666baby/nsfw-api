const scraper = require("../tools/scraper")

function searchRoute(request, response){
    let data = "";
    const awaitPromise = () => {
        return new Promise(async(resolve) => {
            data = await scraper(`${request.query.search}`?.replace(/%20/g, "_"))
            resolve();
        });
     }
    async function main(){
        try{
            await awaitPromise()
            response.send(data)
        }catch{
            response.send({"error":  10060});
        }
    }
    main();
}
module.exports = searchRoute;