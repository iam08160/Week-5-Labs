const {request , response} = require("express")
const express = require("express")
const app = express()
app.listen(4000 , () => {
    console.log(`[server] : listening on 4000`)
})

app.get(`/example`, (request, response) => {
    response.send( "<h1>hello example</h1>")
})

app.get(`/sup` , (request , response ) => {
response.send("sup")
})

app.get(`/hi` , (request , response ) => {
    response.send("hi")
})

app.get(`/yo` , (request , response ) => {
    console.log(request.params)
})

