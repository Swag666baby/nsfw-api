import {readdir, readFileSync} from "fs";
import {sample} from "lodash";

export const imageRandomization = (folder, response) => {
    readdir(folder, (err, files) => {
        if(err) throw err;
        response.contentType('image/jpeg');
        const randomImage = sample(files);
        response.send(readFileSync(`${folder}/${randomImage}`));
    });
}