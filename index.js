const http = require('http')

const serwer = http.createServer()
serwer.on('connection', (socket => {
    console.log('new connection')
}))

serwer.listen(3000)