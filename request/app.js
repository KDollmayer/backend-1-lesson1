const https = require("https")
const options = {
    hostname: "example.com",
    port: 443,
    path: '/',
    method: "GET"
    // headers: {""}
}

const req = https.request(options, res => {
    res.on("data", d => {
        console.log(String(d))
    })
})

req.on("error", err => {
    console.error(err)
})
req.end()