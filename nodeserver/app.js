const http = require("http")

const server = http.createServer((req, res)=> {
    res.statusCode = 200
    res.setHeader("Content-Type", "text/html")
    res.write("<h1>Hello World</h1>")
    res.end()
})

server.listen(3000, () => {
    console.log("Server startet at port 3000")
})