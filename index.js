var http = require("http");
var url = require("url");

http.createServer(function onReq(req, res) {
  var pathname = url.parse(req.url).pathname;
  if (pathname === '/favicon.ico') {
    return;
  }
  res.writeHead(200, {"Content-Type": "text/plain"})
  const now = new Date()
  res.write(`哦哈哈哈${now.getMinutes()}分：${now.getSeconds()}秒`)
  res.end()
}).listen(7878)
