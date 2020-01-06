var http = require("http");

http.createServer(function onReq(req, res) {
  if (pathname === '/favicon.ico') {
    return;
  }
  res.writeHead(200, {"Content-Type": "text/plain"})
  const now = new Date()
  res.write(`哦哈哈哈${now.getMinutes()}分-${now.getSeconds()}`)
  res.end()
}).listen(7878)
