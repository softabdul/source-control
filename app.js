// BUILDING BASIC WEB SERVER 
const http = require ('http');

const server = http.createServer((req,res)=>{

    if(req.url ==="/"){
        res.end("welcome to our site")
    }
    if(req.url === "/about"){
        res.end("welcome to the brife history")
    }
    res.end(`
        <h1>Ooops!</h1>
    
    <p>It seems like something went wrong</p>
    <a href = "/"> back home </a>
    `)

})

server.listen(5000) 