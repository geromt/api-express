const http = require('node:http')
const fs = require('node:fs')

const desiredPort = process.env.PORT ?? 3001

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')

  if (req.url === '/') {
    res.end('Bienvenido a mi página web') // Es status code por defecto es 200, no es necesario especificarlo
  } else if (req.url === '/image.png') {
    fs.readFile('./image.png', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('Error 500: Error interno del servidor')
      } else {
        res.setHeader('Content-Type', 'image/png')
        res.end(data)
      }
    })
  } else if (req.url === '/about') {
    res.end('Acerca de mí')
  } else {
    res.statusCode = 404
    res.end('Error 404: Página no encontrada')
  }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`Server listening on port ${desiredPort}`)
})
