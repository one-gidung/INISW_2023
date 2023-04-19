const http = require('http');
const PORT = 8080;
const server = http.createServer(async (req, res)=> {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8"});
    res.write("<h1>강사 만세!!</h1>");
    res.write("<h2>강사 만세!!</h2>");
    res.end(`<p>${req.url}</p>`);
}).listen(PORT);

server.on("listening", () => {
    console.log(`### ${PORT} 포트에서 서버가 시작되었습니다.`);
})