const http = require('node:http')
const holiJSON = require('./json/holi.json')

const processRequest = (req, res) => {
  const { method, url } = req

  switch (method) {
    case 'GET':
      switch (url) {
        case '/':
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          res.end('Bienvenido a mi página web')
          break
        case '/image.png':
          res.setHeader('Content-Type', 'image/png')
          res.end('Aquí iría la imagen')
          break
        case '/holi':
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          res.end(JSON.stringify(holiJSON))
          break
        case '/about':
          res.end('Acerca de mí')
          break
        default:
          res.statusCode = 404
          res.end('Error 404: Página no encontrada')
      }
  }
}

const desiredPort = process.env.PORT ?? 3001
const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`Server listening on port ${desiredPort}`)
})
