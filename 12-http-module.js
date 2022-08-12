const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    
    if(req.url === '/about'){
        res.end('Welcome to our about page')
    }
    res.end(`
    <h1>Oops</h1>
    <p>Can't seen to find page</p>
    <a href="/">Back to home<a>` )
})


server.listen(5000)