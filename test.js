const http = require("http");
const fs = require("fs");
const requests = require("requests");

//to read the entire html file so that we can update it afterwards.
const indexHtml = fs.readFileSync("index.html","utf-8");

const replaceval = (tempval,orgval) => {
    let temperature = tempval.replace("{%tempval%}",orgval.main.temp); //since API is showing temp as 301.33
    temperature = temperature.replace("{%tempmin%}",orgval.main.temp_min);
    temperature = temperature.replace("{%tempmax%}",orgval.main.temp_max);
    // temperature = temperature.replace("{%tempStatus%}",orgval.weather[0].main);
    // console.log(temperature);
    return temperature;
}

const server = http.createServer((req,res) => {
    if(req.url == "/"){
        requests("https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=bdb67319105d0e431adafd63447fb5fc")
        .on('data', (chunk) => {
            const parseData = JSON.parse(chunk);
            const arrData = [parseData];
            const realTimeData = arrData.map((val) => replaceval(indexHtml,val)).join(" ");
            res.write(realTimeData);
            // console.log(realTimeData);
        })
        .on('end', (err) => {
        if (err) return console.log('connection closed due to errors', err);
        // console.log('end');
        res.end();
        });
    }
    // else{
    //     res.writeHead(404,{"Content-type" : "text/html"});
    //     res.end("404 Error");
    // }
}
);

server.listen(8000,"127.0.0.1");