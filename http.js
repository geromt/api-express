const http = require('node:http')

const desiredPort = process.env.PORT ?? 3001

const processRequest = (req, res) => {
  if (req.url === '/') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end('Bienvenido a mi página web')
  } else if (req.url === '/about') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end('Acerca de mí')
  } else {
    res.statusCode = 404
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end('Error 404: Página no encontrada')
  }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`Server listening on port ${desiredPort}`)
})
