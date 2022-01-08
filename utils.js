const fs = require('fs');

function writeDataToFile(filename, content) {
    fs.writeFileSync(filename, JSON.stringify(content), 'utf-8'), (err) => {
        console.log(err);
    }
}
function getPostData(req) {
    return new Promise((resolve, reject) => {
        try {
            var body = "";
            req.on('data', (chunk)=>{
                body += chunk.toString();
            })
            req.on('end', ()=>{
                resolve(body);
            })
        } catch (error) {
            console.log(error);
        }
    })
}

module.exports = {
    writeDataToFile,
    getPostData
}